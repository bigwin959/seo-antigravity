import json

# Load the Bengali live casino guide
with open('bn_live_casino_guide.json', 'r', encoding='utf-8') as f:
    bn_live = json.load(f)

# Load the main Bengali translation file
with open('public/locales/bn/translation.json', 'r', encoding='utf-8') as f:
    bn_main = json.load(f)

# Add liveCasinoGuide to the main file
bn_main['liveCasinoGuide'] = bn_live['liveCasinoGuide']

# Save the updated file
with open('public/locales/bn/translation.json', 'w', encoding='utf-8') as f:
    json.dump(bn_main, f, ensure_ascii=False, indent=4)

print('✅ Success: liveCasinoGuide Bengali translations added!')
