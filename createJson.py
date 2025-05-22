from docx import Document
import json

def docx_to_json(input_file, output_file):
    try:
        # Read .docx file
        doc = Document(input_file)
        paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
        
        if not paragraphs:
            raise ValueError("Document is empty")
        
        # First paragraph as title, rest as content
        title = paragraphs[0]
        content = '\n'.join(paragraphs[1:])
        
        # Create JSON
        data = {"title": title, "content": content}
        
        with open(output_file, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=4, ensure_ascii=False)
        
        print(f"Successfully created {output_file}")
    
    except FileNotFoundError:
        print(f"Error: Input file '{input_file}' not found")
    except ValueError as ve:
        print(f"Error: {ve}")
    except Exception as e:
        print(f"Error: An unexpected error occurred: {e}")

input_file = "BabaJiSarkar.docx"
output_file = "BabaJiSarka.json"
docx_to_json(input_file, output_file)