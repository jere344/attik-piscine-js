#!/usr/bin/env python3
"""
Script to generate JavaScript exercise files from questions.json
Each file will contain the question/context as comments and a proposed answer template
"""

import json
import os
from pathlib import Path

def format_comment(text, prefix="// "):
    """Format text as JavaScript comment"""
    if isinstance(text, list):
        return "\n".join(f"{prefix}{item}" for item in text)
    return f"{prefix}{text}"

def generate_exercise_file(exercise_key, exercise_data):
    """Generate a JavaScript file for a single exercise"""
    
    # Extract exercise info
    exercise_num = exercise_data.get("exerciseNumber", "000")
    title = exercise_data.get("title", "No title")
    paragraphs = exercise_data.get("paragraphs", [])
    list_items = exercise_data.get("listItems", [])
    headings = exercise_data.get("headings", [])
    code_examples = exercise_data.get("codeExamples", [])
    progress = exercise_data.get("progress", "")
    
    # Build file content
    lines = []
    lines.append("/*")
    lines.append(f" * Exercise {exercise_num}: {title}")
    lines.append(f" * {progress}")
    lines.append(" * " + "=" * 60)
    lines.append(" */")
    lines.append("")
    
    # Add paragraphs
    if paragraphs:
        lines.append("/*")
        for para in paragraphs:
            lines.append(f" * {para}")
        lines.append(" */")
        lines.append("")
    
    # Add list items
    if list_items:
        lines.append("/*")
        for item in list_items:
            lines.append(f" * - {item}")
        lines.append(" */")
        lines.append("")
    
    # Add code examples as comments
    if code_examples:
        lines.append("/*")
        lines.append(" * Examples:")
        for example in code_examples:
            lines.append(" * " + "-" * 60)
            for line in example.split("\n"):
                lines.append(f" * {line}")
        lines.append(" */")
        lines.append("")
    
    # Add solution template
    lines.append("// ==================== SOLUTION ====================")
    lines.append("")
    
    # Create a basic template based on exercise title
    if "fonction" in title.lower() or "function" in title.lower():
        lines.append("// TODO: Implement the function below")
        lines.append("")
        lines.append("function functionName() {")
        lines.append("    // Your code here")
        lines.append("}")
        lines.append("")
    elif "variable" in title.lower() or "déclaration" in title.lower():
        lines.append("// TODO: Declare your variables below")
        lines.append("")
        lines.append("// Your code here")
        lines.append("")
    elif "dom" in title.lower() or "événement" in title.lower():
        lines.append("// TODO: Add your DOM manipulation code below")
        lines.append("")
        lines.append("// Your code here")
        lines.append("")
    else:
        lines.append("// TODO: Write your solution below")
        lines.append("")
        lines.append("// Your code here")
        lines.append("")
    
    return "\n".join(lines)

def main():
    # Read questions.json
    with open("questions.json", "r", encoding="utf-8") as f:
        questions = json.load(f)
    
    # Create output directory
    output_dir = Path("exercises")
    output_dir.mkdir(exist_ok=True)
    
    print(f"Found {len(questions)} exercises")
    print(f"Creating files in '{output_dir}' directory...\n")
    
    # Generate files
    for exercise_key, exercise_data in questions.items():
        exercise_num = exercise_data.get("exerciseNumber", "000")
        title_slug = exercise_data.get("title", "exercise").lower()
        # Clean the title: remove all non-alphanumeric characters except spaces
        title_slug = "".join(c if c.isalnum() or c == " " else "" for c in title_slug)
        title_slug = title_slug.replace(" ", "_")[:30]
        
        # Replace dots with underscores for filename (200.3 -> 200_3)
        exercise_num_clean = exercise_num.replace(".", "_")
        filename = f"{exercise_num_clean}_{title_slug}.js"
        filepath = output_dir / filename
        
        content = generate_exercise_file(exercise_key, exercise_data)
        
        if filepath.exists():
            print(f"⚠️  Skipping existing file: {filename}")
            continue
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        
        print(f"✓ Created: {filename}")
    
    print(f"\n✓ Successfully created {len(questions)} exercise files!")
    print(f"  Location: {output_dir.absolute()}")

if __name__ == "__main__":
    main()
