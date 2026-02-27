
import json
import sys

try:
    print("Loading en/translation.json...")
    with open('public/locales/en/translation.json', 'r', encoding='utf-8-sig') as f:
        main_data = json.load(f)
    
    print("Loading en_aviator_guide.json...")
    with open('en_aviator_guide.json', 'r', encoding='utf-8-sig') as f:
        new_data = json.load(f)
        
    print("Merging aviatorGuide...")
    if 'aviatorGuide' in new_data:
        main_data['aviatorGuide'] = new_data['aviatorGuide']
        
        print("Saving to en/translation.json...")
        with open('public/locales/en/translation.json', 'w', encoding='utf-8') as f:
            json.dump(main_data, f, indent=4, ensure_ascii=False)
        print("Success.")
    else:
        print("Error: aviatorGuide key not found in en_aviator_guide.json")

except Exception as e:
    print(f"Error: {e}")
