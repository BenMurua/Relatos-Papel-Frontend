# 📚 Relatos de Papel

**Relatos de Papel** es una aplicación web de e-commerce para comprar libros. Está desarrollada con React, Vite y React Router, y usa Context API para el carrito y un tema claro/oscuro.

---

## 🎯 Características

- Landing page con redirección automática
- Listado de libros con búsqueda por título o autor
- Filtro por autor
- Vista de detalle de cada libro
- Añadir / actualizar cantidad de libros en el carrito
- Popup de carrito desde la cabecera
- Página “Resumen del carrito” y proceso de checkout
- Modo claro / oscuro persistente en localStorage

---

## 📂 Estructura de carpetas

```
/src
 ├─ assets/         # Imágenes, datos mock
 ├─ components/     # UI: BookCard, CartItem, Header, Footer…
 ├─ context/        # Theme & BookCard (carrito) providers
 ├─ hooks/          # Custom hooks (useCart, useBookCardQuantity)
 ├─ pages/          # Rutas: Home, CartDetail, Checkout, BookDetail, Landing…
 ├─ routes/         # Configuración de React Router
 ├─ utils/          # Funciones de utilidad (getAllBooks, searchBooks…)
 ├─ App.jsx         # Componente raíz con <Outlet/>
 └─ main.jsx        # Arranque de la aplicación
```

---

## 🚀 Instalación y desarrollo

Requisitos previos: [Node.js](https://nodejs.org/) ≥16.x y npm o yarn.

1. Clona el repositorio  
   `git clone https://github.com/kikelovera7/RELATOS_DE_PAPEL_UNIR.git`

2. Instala dependencias

   ```bash
   cd relatos-de-papel
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en `http://localhost:5173`

---

## ⚙️ Scripts disponibles

- `npm run dev` Inicia Vite en modo desarrollo
- `npm run build` Genera la versión de producción en `/dist`
- `npm run preview` Previsualiza la build de producción
- `npm run lint` Ejecuta ESLint

---

## 🛠️ Tecnologías

- React 19
- Vite
- React Router v7 (HashRouter)
- Context API + Hooks
- CSS Modules y CSS Variables
- ESLint

---

## 🤝 Contribuciones

1. Haz un _fork_ del proyecto
2. Crea una rama (`git checkout -b feature/mi-nueva-caracteristica`)
3. Realiza tus cambios y commitea (`git commit -m 'feat: descripción'`)
4. Haz push a tu rama (`git push origin feature/mi-nueva-caracteristica`)
5. Abre un _pull request_
