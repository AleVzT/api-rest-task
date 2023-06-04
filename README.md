# api-rest-task

Es una API REST desarrollada en Node Express.js que proporciona un conjunto de endpoints para la gestión de tareas. Esta API permite realizar operaciones CRUD (Create, Read, Update, Delete) en tareas individuales, lo que brinda a los usuarios la posibilidad de editar, eliminar, agregar y consultar tareas de manera eficiente.

## Características principales:

1. Crear tarea: Mediante el endpoint POST, los usuarios pueden crear nuevas tareas, proporcionando la información necesaria, como el título y la descripción de la tarea.
2. Consultar todas las tareas: Con el endpoint GET, los usuarios pueden obtener una lista de todas las tareas disponibles en el sistema, lo que les permite tener una visión general de su progreso y estado.
3. Actualizar tarea: El endpoint PUT permite a los usuarios actualizar los detalles de una tarea existente. Pueden modificar el título, la descripción o cualquier otro atributo de la tarea según sea necesario.
4. Eliminar tarea: Utilizando el endpoint DELETE, los usuarios pueden eliminar una tarea específica del sistema. Esto proporciona flexibilidad y control para administrar las tareas de manera efectiva.
5. Cambiar estado de tarea: Con el endpoint PATCH, los usuarios tienen la capacidad de cambiar el estado de una tarea, lo que les permite marcar una tarea como completa, pendiente o en progreso, según sus necesidades.

La API está diseñada para ser fácilmente integrada en aplicaciones existentes, lo que brinda flexibilidad y adaptabilidad a diferentes entornos.

## Requisitos Previos

- Node.js (versión 18.16.0): [Sitio web de descarga](https://nodejs.org)
- Gestor de paquetes NPM o Yarn

## Configuración

1. Clona el repositorio desde GitHub:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Navega al directorio del proyecto:
	```bash
	cd tu-repositorio

3. Instala las dependencias del proyecto:
	```bash
	npm install

4. Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias, como el USER y PASS:
	```bash
	USER=nombre_de_usuario
	PASS=contraseña

## Levantar Localmente

1. Ejecuta el siguiente comando para iniciar el servidor localmente:
	```bash
	npm start

2. Abre tu navegador web y ve a http://localhost:8080 para ver la aplicación en funcionamiento.
