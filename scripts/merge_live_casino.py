import json
import os

def merge_live_casino():
    # English
    en_path = 'public/locales/en/translation.json'
    en_new_path = 'en_live_casino_guide.json'
    
    # Bengali
    bn_path = 'public/locales/bn/translation.json'
    bn_new_path = 'bn_live_casino_guide.json'
    
    # Merge English
    try:
        with open(en_path, 'r', encoding='utf-8-sig') as f:
            en_data = json.load(f)
        with open(en_new_path, 'r', encoding='utf-8') as f:
            en_new_data = json.load(f)
            
        if 'liveCasinoGuide' in en_new_data:
            en_data['liveCasinoGuide'] = en_new_data['liveCasinoGuide']
            print("Merged liveCasinoGuide into English.")
            
        with open(en_path, 'w', encoding='utf-8') as f:
            json.dump(en_data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error merging English: {e}")

    # Merge Bengali
    try:
        with open(bn_path, 'r', encoding='utf-8-sig') as f:
            bn_data = json.load(f)
        with open(bn_new_path, 'r', encoding='utf-8') as f:
            bn_new_data = json.load(f)
            
        if 'liveCasinoGuide' in bn_new_data:
            bn_data['liveCasinoGuide'] = bn_new_data['liveCasinoGuide']
            print("Merged liveCasinoGuide into Bengali.")
            
        with open(bn_path, 'w', encoding='utf-8') as f:
            json.dump(bn_data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error merging Bengali: {e}")

    # Thai
    th_path = 'public/locales/th/translation.json'
    th_new_path = 'th_live_casino_guide.json'
    
    # Merge Thai
    try:
        with open(th_path, 'r', encoding='utf-8-sig') as f:
            th_data = json.load(f)
        with open(th_new_path, 'r', encoding='utf-8') as f:
            th_new_data = json.load(f)
            
        if 'liveCasinoGuide' in th_new_data:
            th_data['liveCasinoGuide'] = th_new_data['liveCasinoGuide']
            print("Merged liveCasinoGuide into Thai.")
            
        with open(th_path, 'w', encoding='utf-8') as f:
            json.dump(th_data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error merging Thai: {e}")

if __name__ == "__main__":
    merge_live_casino()
