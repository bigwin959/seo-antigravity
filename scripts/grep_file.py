
import sys

filename = sys.argv[1]
search_term = sys.argv[2]

try:
    with open(filename, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f, 1):
            if search_term in line:
                print(f"{i}: {line.strip()}")
except Exception as e:
    print(f"Error: {e}")
