#!/usr/bin/python3
from pdfminer.high_level import extract_text
import sys
file = sys.argv[1]
keyword = sys.argv[2]
text = extract_text(file)
if(keyword in text):
    print(f'Found word "{keyword}" in {file}')
