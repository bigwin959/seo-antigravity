
import json
import sys

def detect_duplicates(ordered_pairs):
    keys = {}
    for key, value in ordered_pairs:
        if key in keys:
            print(f"Duplicate key found: {key}")
        else:
            keys[key] = value
    return keys

if len(sys.argv) < 2:
    print("Usage: python verify_json.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1]
print(f"Checking {file_path}...")
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        json.load(f, object_pairs_hook=detect_duplicates)
    print("JSON structure is valid.")
except json.JSONDecodeError as e:
    print(f"JSON Decode Error: {e}")
except Exception as e:
    print(f"Error: {e}")
