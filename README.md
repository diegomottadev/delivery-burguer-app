<div align="center">

# 🍔 Burger Builder

**Build your burger layer by layer, watch the price update in real time, and place your order.**

One of my first React applications: the project where I stopped reading about components and started building them.

![React](https://img.shields.io/badge/React-16.13-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-3-8DD6F9?logo=webpack&logoColor=black)

### [🍔 Try it live](https://diegomottadev.github.io/delivery-burguer-app/)

![Burger Builder in action](https://user-images.githubusercontent.com/64202326/233193956-e2e2b1ca-10f8-4fb3-a038-24cd7e6fd603.png)

</div>

---

## 📖 The story behind the project

This project marks my **first serious steps with React**. To learn it in depth, not just skim the surface, I followed
[**React - The Complete Guide (incl. Hooks, React Router, Redux)**](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
by **Maximilian Schwarzmüller**, one of the most comprehensive React courses out there.

The goal wasn't to copy code, but to understand **why** React works the way it does: how state flows, when a component re-renders, how to split a UI into reusable pieces, and how those pieces talk to each other. Burger Builder was the practice ground where all of that became concrete.

> 💡 Later on I upgraded the project to run on **React 16**, which taught me how a codebase evolves alongside its ecosystem.

---

## ✨ What you can do

- 🥗 **Add and remove ingredients**: salad, bacon, cheese and meat, and watch the burger grow on screen.
- 💲 **Real-time pricing**: each ingredient has its own cost and the total is recalculated instantly.
- 🚫 **Smart controls**: you can't remove an ingredient that isn't there, and the *ORDER NOW* button only activates when there's something to order.
- 🧾 **Order summary**: an animated modal shows your burger's details and total price before you confirm.
- ✅ **Order confirmation**: after confirming you see the total paid and can start a new burger.
- 📱 **Responsive design**: a navigation bar on desktop and a side drawer menu on mobile.

---

## 🧠 What I learned building it

| Concept | Where it shows up in the code |
|---|---|
| **Stateful vs. presentational components** | `BurgerBuilder` handles the logic; `Burger`, `BuildControls` and `OrderSummary` only receive *props* |
| **Immutable state** | Handlers copy state with the *spread* operator (`{...this.state.ingredients}`) before updating it |
| **`setState` based on previous state** | `Layout` toggles the side drawer with `setState(prevState => ...)` |
| **Dynamic list rendering** | `Burger` turns `{ meat: 2, cheese: 1 }` into a stack of components using `map` + `reduce` |
| **Child → parent communication** | Controls receive functions via *props* (`ingredientAdded`, `ordered`, ...) |
| **Higher Order Components** | `Auxiliar` as a wrapper with no extra DOM node, and `Layout` as the shared structure |
| **Reusable UI components** | `Modal`, `Backdrop` and `Button` with variants (`Success` / `Danger`) |
| **CSS Modules** | Locally scoped styles per component, no class name collisions |
| **Props validation** | `PropTypes` in `BurgerIngredient` |
| **100% CSS burger** | Bun, seeds, meat and cheese are drawn purely with CSS, no images |

---

## 🗂️ Project structure

```
src/
├── containers/
│   └── BurgerBuilder/         # Stateful component: ingredient and price logic
├── components/
│   ├── Burger/
│   │   ├── BurgerIngredient/  # Each layer of the burger (pure CSS)
│   │   ├── BuildControls/     # More / Less buttons per ingredient
│   │   ├── OrderSummary/      # Summary shown inside the modal
│   │   └── OrderConfirmation/ # Order confirmed screen
│   ├── Navigation/            # Toolbar, SideDrawer and NavigationItems
│   ├── Logo/
│   └── UI/                    # Modal, Backdrop, Button (reusable)
├── hoc/
│   ├── Auxiliar/              # Wrapper with no extra DOM node
│   └── Layout/                # Overall app structure
└── assets/
```

---

## 🚀 Getting started

**Requirements:** [Node.js](https://nodejs.org) installed.

```bash
# 1. Clone the repository
git clone https://github.com/diegomottadev/delivery-burguer-app.git
cd delivery-burguer-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open **http://localhost:3000** in your browser and start building your burger. 🍔

| Command | Description |
|---|---|
| `npm start` | Development server with hot reload |
| `npm run build` | Optimized production build in `/build` |
| `npm test` | Runs the tests with Jest |
| `npm run deploy` | Builds the app and publishes it to GitHub Pages (`gh-pages` branch) |

---

## 🛣️ Next steps

The course goes far beyond this stage, and this project has room to grow with it:

- [ ] Save orders to a backend (Firebase) using Axios
- [ ] Checkout flow with **React Router**
- [ ] Global state management with **Redux**
- [ ] User authentication
- [ ] Migrate class components to **Hooks**

---

## 🙌 Credits

- Course: [React - The Complete Guide (incl. Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by **Maximilian Schwarzmüller** (Academind).
- Built by **[Diego Motta](https://github.com/diegomottadev)** as part of my journey learning React.

<div align="center">

⭐ If you found this project useful, or it brought back memories of your own first steps with React, give it a star!

</div>
