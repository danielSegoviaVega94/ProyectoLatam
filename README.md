# challengeEncriptado
# Encriptador y Desencriptador de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto utilizando varios métodos de encriptación. Es ideal para practicar HTML, CSS y JavaScript.

## Estructura del Proyecto

- **index.html**: Contiene la estructura principal de la página web.
- **styles/**
  - **styles.css**: Contiene los estilos CSS para la página web.
- **scripts/**
  - **scripts.js**: Contiene la lógica de JavaScript para encriptar, desencriptar, intercambiar texto y manejar archivos.
- **README.md**: Este archivo, proporciona información sobre el proyecto.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local usando el siguiente comando:
    ```bash
    git clone <URL_del_repositorio>
    ```
2. Abre el archivo `index.html` en tu navegador web favorito.

## Funcionalidades

- **Encriptar**: Revertir el texto ingresado en el área de entrada utilizando varios métodos de encriptación.
- **Desencriptar**: Revertir el texto ingresado en el área de entrada utilizando varios métodos de encriptación.
- **Intercambiar**: Intercambiar el contenido del área de entrada y salida.
- **Historial**: Guardar el historial de encriptaciones y desencriptaciones realizadas por el usuario.
- **Validar**: Asegurar que el texto ingresado solo contenga letras minúsculas y espacios (excepto para Base64).
- **Cargar Archivo**: Cargar un archivo de texto para encriptar o desencriptar.
- **Descargar Resultado**: Descargar el resultado en un archivo de texto.

## Métodos de Encriptación Soportados

- **Revertir Texto**: Revertir el texto ingresado.
- **Cifrado César**: Desplazar cada letra del texto ingresado por un número fijo de posiciones.
- **Base64**: Codificar el texto ingresado en formato Base64 (sin restricciones de validación).

## Persistencia del Historial

El historial de encriptaciones y desencriptaciones se guarda en el almacenamiento local del navegador (`localStorage`), lo que permite que el historial persista entre sesiones de navegación.

## Cómo Usar

1. **Ingresar Texto**: Escribe o carga el texto que deseas encriptar o desencriptar en el área de entrada.
2. **Seleccionar Método**: Elige el método de encriptación que deseas utilizar desde el selector de métodos.
3. **Encriptar o Desencriptar**: Haz clic en el botón correspondiente para encriptar o desencriptar el texto.
4. **Intercambiar**: Utiliza el botón de intercambiar para mover el texto encriptado o desencriptado entre las áreas de entrada y salida.
5. **Historial**: Consulta el historial de operaciones realizadas.
6. **Cargar y Descargar Archivos**: Carga un archivo de texto para encriptar o desencriptar su contenido, y descarga el resultado en un archivo de texto.

