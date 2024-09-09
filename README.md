# Documentación del Proyecto de Formulario de Contacto

## Resumen del Proyecto
Este proyecto es una aplicación web simple construida con Flask para procesar un formulario de contacto. El formulario captura información del usuario como nombre, apellido, correo electrónico, teléfono y mensaje.

## Cambios en la Lógica del Servidor
### Problema Identificado
El código original intentaba usar el método `match()` directamente sobre una cadena, lo que causaba un error de atributo (`AttributeError`).

### Solución Implementada
Se cambió el uso de `match()` por `re.match()` del módulo `re` para validar el correo electrónico y otros datos del formulario. Esto se realizó para asegurar que las validaciones se realicen correctamente usando expresiones regulares.

### Código Actualizado
Aquí está el código corregido para el archivo `app.py`:
```python
import re
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    print("hola se cargo el home")
    return render_template('index.html')

@app.route('/formulario', methods=['POST'])
def procesar_formulario():
    nombre = request.form['nombre']
    apellido = request.form['apellido']
    email = request.form['email']
    telefono = request.form['telefono']
    mensaje = request.form['mensaje']

    print(f'''
            nombre: {nombre}
            apellido: {apellido}
            email: {email}
            telefono: {telefono}
            mensaje: {mensaje}
          ''')

    # Código de validación actualizado
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(email_regex, email):
        return 'El correo electrónico no es válido'

    if not nombre.isalpha() or not apellido.isalpha():
        return 'El nombre y apellido deben contener solo letras'
    
    if not telefono.isdigit() or len(telefono) < 9 or len(telefono) > 12:
        return 'El teléfono debe contener entre 9 y 12 dígitos'
    
    if mensaje == '':
        return 'Por favor, ingrese un mensaje'

    print("hola")
    return 'Formulario procesado correctamente'

if __name__ == '__main__':
    app.run(debug=True)
