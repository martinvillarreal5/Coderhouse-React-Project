# Proyecto ecommerce React
### General
Bienvenido a mi proyecto de React realizado en el curso de CoderHouse, creado con Create React App, con características como: 
* Single Page Aplication mediante el uso de React Router Dom
* Uso de base datos Firebase Firestore 
* Uso de hooks useState y useEffect
* Lista de productos obtenidos desde base de datos
* Filtrar productos por categorías obtenidas desde base de datos utilizando id de categoría obtenida de la ruta de navegación mediante hook useParams
* Acceder al detalle de cada producto accediendo a su respectivo documento en la base datos utilizando id obtenida de la ruta de navegación mediante useParams.
* Añadir cantidad seleccionable de productos desde el detalle al carrito de compras mediante useContext y Contexto de carrito
* Carrito de Compras accesible en cualquier sección de la página mediante un CartWidget (ícono del carrito) en la barra de navegación, con listado de productos obtenidos desde el Contexto del carrito y precio total de la compra
* Eliminar productos del carrito individualmente o vaciar completamente el carrito utilizando funciones del Contexto del carrito
* Formulario de compra realizado con react-hook-form y validado por zod para agregar orden de compra (con datos del comprador, productos, timestamp y estado de orden) a la base de datos

### Instrucciones y Consideraciones
* Requiere el uso de Node.js para funcionar: 
Una vez descargado o clonado el proyecto, abrir la terminal en la ubicación raíz del mismo y correr los siguientes comandos:
    npm install    (Para descargar las dependencias del proyecto)
    npm start      (Para iniciar el proyecto en un servidor local en el navegador)

### Dependecias Extra
* MUI: Librería robusta, de uso amigable y moderna de componentes con diseño de Material Design de Google. Ayuda a crear una página con diseño moderno sin las limitaciones de tiempo de iniciar CSS completo desde cero
    - mui-image: Librería que proporciona un componente de imagen altamente configurable y permite un diseño acorde a Material Design
* React Hook Form: Librería ligera y sin dependencias que permite un manejo sencillo y optimizado de los datos del formulario y su validación mediante Hooks y componentes especializados. Su componente Controller es especialmente útil a la hora de integrar con librerías UI como MUI
* Zod: Librería moderna de declaración y validación de "schemas" (cualquier tipo de dato, desde strings hasta objetos dentro de objetos) sin necesidad de dependencias y con un peso muy reducido. Pensada para Typescript pero usable también en Javascript, facilita elegantemente la validación de formularios de React Hook Form.
* hookform/resolvers: 
Permite integración de Zod con react hook form mediante un "resolver" el cual permite utilizar como validación la schema generada por Zod, en vez de la validación por defecto de react-hook-form

