# Proyecto de React - Tareas y Perfil

Este es un proyecto sencillo de React hecho con Vite para la tarea. Tiene una lista de tareas básica y una tarjeta de presentación con mis datos.

## Cómo correrlo:
1. Instalar cosas: npm install
2. Correr: npm run dev

## Estructura del código:
```
src/
├── components/
│   ├── Encabezado.jsx       → Componente funcional simple (encabezado)
│   ├── PiePagina.jsx        → Componente funcional simple (pie de página)
│   ├── TarjetaPerfil.jsx    → Componente con propiedades (tarjeta de perfil)
│   ├── FormularioTarea.jsx  → Componente con estado (formulario + botón mostrar/ocultar)
│   └── ListaTareas.jsx      → Lista dinámica con .map()
├── App.jsx                  → Componente principal
├── App.css
├── index.css
└── main.jsx
```

## Respuestas del cuestionario:

a) ¿Qué diferencia hay entre props y state en React?
Las propiedades (props) son datos que le pasas a un componente desde afuera (desde el padre) y son fijas, el componente que las recibe no las puede cambiar. El estado (state) es algo interno del componente que sí puede cambiar cuando el usuario hace alguna acción (como escribir en un input o dar clic a un botón), y cuando cambia, la pantalla se actualiza sola.

b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Porque React necesita saber exactamente qué elemento de la lista cambió, se agregó o se borró. Si no ponemos una key (clave), React se puede confundir y actualizar mal las cosas. La key debe ser un valor único, como el ID.

c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
useState sirve para crear una variable de estado que React vigila. Si esa variable cambia, React vuelve a renderizar el componente en la pantalla para mostrar el nuevo valor.
Lo usé en `FormularioTarea.jsx` para guardar lo que la persona escribe en la caja de texto (`texto`) antes de agregar la tarea, y también para abrir y cerrar el mensaje de ayuda (`mostrarAyuda`) con un botón.

d) Enlace del repositorio de GitHub:
(poner enlace aquí)

e) Enlace de GitHub Pages:
(poner enlace aquí)
