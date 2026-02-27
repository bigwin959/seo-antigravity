# Fix encoding and syntax errors in LiveCasinoGuide.tsx
import codecs

file_path = r"c:\Users\jaxon\OneDrive\Desktop\A L L\Company\seo document\seo-antigravity\pages\LiveCasinoGuide.tsx"

# Read with UTF-8 encoding
with codecs.open(file_path, 'r', encoding='utf-8-sig') as f:
    content = f.read()

# Fix mojibake characters
content = content.replace('€¢', '•')
content = content.replace('â€¢', '•')

# Fix syntax errors
content = content.replace('</section >', '</section>')
content = content.replace('< section className = "py-16 bg-gray-900" >', '<section className="py-16 bg-gray-900">')
content = content.replace('< section className = "py-16 bg-gray-950" >', '<section className="py-16 bg-gray-950">')

# Write back with UTF-8 BOM
with codecs.open(file_path, 'w', encoding='utf-8-sig') as f:
    f.write(content)

print("File fixed successfully!")
