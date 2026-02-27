import json
import os

def merge_translations():
    bn_path = 'public/locales/bn/translation.json'
    aviator_path = 'bn_aviator_guide.json'

    with open(bn_path, 'r', encoding='utf-8') as f:
        bn_data = json.load(f)

    with open(aviator_path, 'r', encoding='utf-8') as f:
        aviator_data = json.load(f)

    # Merge aviatorGuide
    if 'aviatorGuide' in aviator_data:
        bn_data['aviatorGuide'] = aviator_data['aviatorGuide']
        print("Merged aviatorGuide into Bengali translation.")

    with open(bn_path, 'w', encoding='utf-8') as f:
        json.dump(bn_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    merge_translations()
