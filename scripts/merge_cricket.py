
import json
import sys

try:
    print("Loading bn/translation.json...")
    with open('public/locales/bn/translation.json', 'r', encoding='utf-8') as f:
        main_data = json.load(f)
    
    print("Loading bn_cricket_guide.json...")
    with open('bn_cricket_guide.json', 'r', encoding='utf-8') as f:
        new_data = json.load(f)
        
    print("Merging cricketGuide...")
    if 'cricketGuide' in new_data:
        main_data['cricketGuide'] = new_data['cricketGuide']
        
        print("Saving to bn/translation.json...")
        with open('public/locales/bn/translation.json', 'w', encoding='utf-8') as f:
            json.dump(main_data, f, indent=4, ensure_ascii=False)
        print("Success.")
    else:
        print("Error: cricketGuide key not found in bn_cricket_guide.json")

except Exception as e:
    print(f"Error: {e}")
