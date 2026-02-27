
import json

try:
    with open('public/locales/en/translation.json', 'r', encoding='utf-8-sig') as f:
        data = json.load(f)

    cricket = data.get('cricketGuide')
    if cricket:
        with open('temp_cricket.json', 'w', encoding='utf-8') as f:
            json.dump({'cricketGuide': cricket}, f, indent=4, ensure_ascii=False)
        print("Successfully extracted cricketGuide")
    else:
        print("cricketGuide not found in en/translation.json")
except Exception as e:
    print(f"Error: {e}")
