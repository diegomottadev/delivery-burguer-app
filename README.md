<div align="center">

# 🍔 Burger Builder

**Arma tu hamburguesa capa por capa, mira el precio en tiempo real y haz tu pedido.**

Una de mis primeras aplicaciones en React: el proyecto donde dejé de leer sobre componentes y empecé a construirlos.

![React](https://img.shields.io/badge/React-16.13-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-3-8DD6F9?logo=webpack&logoColor=black)

![Burger Builder en acción](https://user-images.githubusercontent.com/64202326/233193956-e2e2b1ca-10f8-4fb3-a038-24cd7e6fd603.png)

</div>

---

## 📖 La historia detrás del proyecto

Este proyecto marca mis **primeros pasos serios en React**. Para aprenderlo a fondo, y no solo por encima, seguí el curso
[**React - The Complete Guide (incl. Hooks, React Router, Redux)**](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
de **Maximilian Schwarzmüller**, uno de los cursos de React más completos que existen.

El objetivo no era copiar código, sino entender **por qué** React funciona como funciona: cómo fluye el estado, cuándo se vuelve a renderizar un componente, cómo se divide una interfaz en piezas reutilizables y cómo se comunican entre sí. Burger Builder fue el campo de práctica donde todo eso se volvió concreto.

> 💡 Más adelante actualicé el proyecto para que funcione con **React 16**, lo que me sirvió para entender cómo evoluciona un código base con el ecosistema.

---

## ✨ Qué puedes hacer

- 🥗 **Agregar y quitar ingredientes**: lechuga, bacon, queso y carne, y ver cómo la hamburguesa crece en pantalla.
- 💲 **Precio en tiempo real**: cada ingrediente tiene su costo y el total se recalcula al instante.
- 🚫 **Controles inteligentes**: no puedes quitar un ingrediente que no existe y el botón *ORDER NOW* solo se activa cuando hay algo que pedir.
- 🧾 **Resumen del pedido**: un modal animado muestra el detalle de tu hamburguesa antes de confirmar.
- 📱 **Diseño responsive**: barra de navegación en escritorio y menú lateral (*side drawer*) en móvil.

---

## 🧠 Lo que aprendí construyéndolo

| Concepto | Dónde se ve en el código |
|---|---|
| **Componentes con estado vs. presentacionales** | `BurgerBuilder` maneja la lógica; `Burger`, `BuildControls` y `OrderSummary` solo reciben *props* |
| **Estado inmutable** | Los *handlers* copian el estado con *spread* (`{...this.state.ingredients}`) antes de actualizarlo |
| **`setState` basado en el estado previo** | `Layout` alterna el *side drawer* con `setState(prevState => ...)` |
| **Renderizado dinámico de listas** | `Burger` transforma `{ meat: 2, cheese: 1 }` en una pila de componentes con `map` + `reduce` |
| **Comunicación hijo → padre** | Los controles reciben funciones por *props* (`ingredientAdded`, `ordered`, ...) |
| **Higher Order Components** | `Auxiliar` como *wrapper* sin DOM extra, y `Layout` como estructura común |
| **Componentes UI reutilizables** | `Modal`, `Backdrop` y `Button` con variantes (`Success` / `Danger`) |
| **CSS Modules** | Estilos con alcance local por componente, sin colisiones de clases |
| **Validación de props** | `PropTypes` en `BurgerIngredient` |
| **Hamburguesa 100% CSS** | Pan, semillas, carne y queso están dibujados solo con CSS, sin imágenes |

---

## 🗂️ Estructura del proyecto

```
src/
├── containers/
│   └── BurgerBuilder/        # Componente con estado: lógica de ingredientes y precio
├── components/
│   ├── Burger/
│   │   ├── BurgerIngredient/ # Cada capa de la hamburguesa (CSS puro)
│   │   ├── BuildControls/    # Botones Más / Menos por ingrediente
│   │   └── OrderSummary/     # Resumen que se muestra en el modal
│   ├── Navigation/           # Toolbar, SideDrawer y NavigationItems
│   ├── Logo/
│   └── UI/                   # Modal, Backdrop, Button (reutilizables)
├── hoc/
│   ├── Auxiliar/             # Wrapper sin nodo extra en el DOM
│   └── Layout/               # Estructura general de la app
└── assets/
```

---

## 🚀 Cómo ejecutarlo

**Requisitos:** [Node.js](https://nodejs.org) instalado.

```bash
# 1. Clona el repositorio
git clone https://github.com/diegomottadev/delivery-burguer-app.git
cd delivery-burguer-app

# 2. Instala las dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm start
```

Abre **http://localhost:3000** en tu navegador y empieza a armar tu hamburguesa. 🍔

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo con recarga automática |
| `npm run build` | Build optimizado para producción en `/build` |
| `npm test` | Ejecuta los tests con Jest |

---

## 🛣️ Próximos pasos

El curso sigue mucho más allá de esta etapa, y este proyecto tiene espacio para crecer con él:

- [ ] Guardar pedidos en un backend (Firebase) con Axios
- [ ] Flujo de checkout con **React Router**
- [ ] Manejo de estado global con **Redux**
- [ ] Autenticación de usuarios
- [ ] Migrar los componentes de clase a **Hooks**

---

## 🙌 Créditos

- Curso: [React - The Complete Guide (incl. Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) de **Maximilian Schwarzmüller** (Academind).
- Desarrollado por **[Diego Motta](https://github.com/diegomottadev)** como parte de mi camino aprendiendo React.

<div align="center">

⭐ Si este proyecto te resultó útil o te trajo recuerdos de tus primeros pasos en React, ¡déjale una estrella!

</div>
