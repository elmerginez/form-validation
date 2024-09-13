## Resumen del Proyecto
Este proyecto es una aplicación web simple construida con Flask para procesar un formulario de contacto. El formulario captura información del usuario como nombre, apellido, correo electrónico, teléfono y mensaje.

## Tecnologías Utilizadas

- **HTML5** para la estructura del formulario.
- **Flask** para manejar las rutas y el procesamiento del formulario.
- **JavaScript** para validaciones en el frontend.
- **Tailwind CSS** para los estilos y la disposición del formulario.
- **Regular Expressions (Regex)** para validar campos como el correo electrónico y el teléfono.

## Requisitos Previos

Asegúrate de tener instalado:

- Python 3.x
- Flask (`pip install flask`)

## Instalación

1. Clona este repositorio:
```
git clone https://github.com/elmerginez/form-validation.git
```
2. Navega al directorio del proyecto:
```
cd form-validation
```
3. Crea un entorno virtual:
- En Windows:
```
python -m venv .venv
.venv\Scripts\activate
```
- En Linux:
```
python3 -m venv .venv
source .venv/bin/activate
```

4. Instala las dependencias necesarias:
```
pip install -r requirements.txt
```
5. Ejecuta la aplicación:
```
flask --app App run
```
6. Abre tu navegador y ve a http://localhost:5000 para ver el formulario.

## Estructura del Proyecto
- index.html: El archivo HTML principal que contiene el formulario de contacto.
- App.py: Archivo Python que utiliza Flask para procesar los datos del formulario.
- Tailwind CSS: Se utiliza para estilizar el formulario de manera moderna y responsiva.
## Validaciones del Formulario
- Frontend
Nombre y apellido: Solo permiten letras y espacios.
Correo electrónico: Valida que el correo siga un formato estándar (ejemplo: usuario@dominio.com).
Teléfono: Debe tener entre 9 y 12 dígitos.
Mensaje: Campo requerido.
- Backend
El nombre y el apellido deben contener solo letras.
El correo electrónico debe seguir un formato válido.
El número de teléfono debe contener solo dígitos y tener entre 9 y 12 caracteres.
El mensaje no puede estar vacío.
- Uso
Una vez que el usuario completa y envía el formulario, los datos se validan en el frontend. Si todo es correcto, el formulario se envía al servidor donde Flask realiza una segunda validación. Si todos los datos son válidos, se devuelve un mensaje indicando que el formulario ha sido procesado correctamente.

## Mejoras Futuras
Añadir un sistema de envío de correos electrónicos para notificar cuando se reciba un mensaje a través del formulario.
Implementar una base de datos para almacenar los mensajes recibidos.

## Licencia
Este proyecto está bajo la licencia MIT.