from docx import Document
import re
import json

def is_bold_run(paragraph):
    """
    Check if the paragraph contains any bold run
    """
    return any(run.bold for run in paragraph.runs)

def extract_sections_from_docx(file_path):
    document = Document(file_path)
    sections = []
    current_section = None

    for para in document.paragraphs:
        text = para.text.strip()

        if not text:
            continue

        # Match numbered titles from 1. to 7.
        match = re.match(r'^([1-7])\.\s+(.*)', text)

        if match and is_bold_run(para):
            if current_section:
                sections.append(current_section)

            number = match.group(1)
            title = text
            current_section = {
                "title": title,
                "content": ""
            }
        elif current_section:
            # Append paragraph to current content
            current_section["content"] += text + "\n"

    # Append last section
    if current_section:
        sections.append(current_section)

    return sections

def save_sections_to_json(sections, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(sections, f, ensure_ascii=False, indent=2)

# === USAGE ===
input_docx_path = "suaAdvice.docx"  # Replace with your actual file
output_json_path = "output_sections.json"

sections = extract_sections_from_docx(input_docx_path)
save_sections_to_json(sections, output_json_path)

print(f"Extracted and saved {len(sections)} sections to {output_json_path}")
