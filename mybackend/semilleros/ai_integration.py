import google.generativeai as genai
import textwrap
from IPython.display import Markdown
import sys

sys.stdout.reconfigure(encoding='utf-8')

model = genai.GenerativeModel('gemini-1.5-flash')

GOOGLE_API_KEY='AIzaSyB941HKZmW_yn1Lb_615in--832Q6_aHK4'
genai.configure(api_key=GOOGLE_API_KEY)

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def resumir_descripcion(descripcion):
    print("resumiendo")
    # Solicitar resumen a Gemini
    if(descripcion == 'Sin descripcion'):
      model = genai.GenerativeModel('gemini-1.5-flash')
      prompt = f"Resume en 30 palabras maximo, de manera concisa y clara, destacando los aspectos clave la siguiente descripción:\n\n{descripcion}"
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = f"Resume en 30 palabras maximo, de manera concisa y clara, destacando los aspectos clave la siguiente descripción:\n\n{descripcion}"

    response = model.generate_content(prompt)
    return response.text.strip()