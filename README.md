# 📝 Todo App (Vanilla JavaScript)

A minimal, neon-themed **todo list application** built with **vanilla HTML, CSS, and JavaScript**. Add tasks with Enter, mark them complete with a click, delete them with the ✕ icon — and everything is saved in **localStorage**, so your list survives a page refresh.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Project Type

| | |
|---|---|
| **Category** | Frontend CRUD app / Productivity tool |
| **Type** | Static single-page app with browser storage |
| **Purpose** | Create, complete, and delete daily tasks |
| **Persistence** | Browser **localStorage** (no backend) |
| **Dependencies** | SweetAlert2 (CDN), Font Awesome (CDN) |
| **Build Tools** | None — runs directly in the browser |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (radial gradients, neon glow, keyframe animation, Flexbox) |
| Logic | Vanilla JavaScript (ES6+, event delegation) |
| Storage | `localStorage` + `JSON.stringify` / `JSON.parse` |
| UI Alerts | [SweetAlert2](https://sweetalert2.github.io/) |
| Icons | Font Awesome 7 |
| Fonts | Google Fonts — Open Sans |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

---

## ✨ Features

- ➕ **Add a task** by typing and pressing `Enter`
- ✅ **Toggle complete** by clicking the task (green strike-through style)
- ❌ **Delete a task** with the ✕ icon
- 💾 **Auto-save** to `localStorage` on every change
- 🔄 **Restores your list** automatically on page reload
- ⚠️ **Empty-input warning** with a SweetAlert2 popup
- 🎨 **Neon dark UI** — glowing title, hover lift, animated delete icon
- 📱 **Fully responsive** — optimized for 480px and 360px screens

---

## ⚙️ How It Works

```js
// Add on Enter
item.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (item.value === "") return Swal.fire({ /* warning */ });
    addTodo(item.value);
    saveTodo();
    item.value = "";
  }
});

// Save all visible todos
const saveTodo = () => {
  const todoData = [...document.querySelectorAll("#todo-box li")]
    .map((li) => li.innerText);
  localStorage.setItem("todos", JSON.stringify(todoData));
};

// Restore on load
JSON.parse(localStorage.getItem("todos"))?.forEach(addTodo);
```

1. **Add** — Enter key checks for empty input, appends an `<li>` with a delete icon, then saves.
2. **Complete** — a delegated click listener toggles the `.done` class.
3. **Delete** — clicking the `<i>` icon removes its parent `<li>` and re-saves.
4. **Load** — an IIFE reads `localStorage` and re-renders every saved todo.

> **Improvement idea:** user input is currently inserted via `innerHTML`. Escaping the text (or using `textContent`) would prevent HTML/script injection if the app is ever shared publicly.

---

## 📁 Project Structure

```
todoApp/
├── index.html        # Input box + todo list container
├── css/
│   └── custom.css    # Neon theme, done state, animations, breakpoints
└── js/
    └── app.js        # Add / toggle / delete / localStorage logic
```

---

## 🚀 Getting Started

No installation required.

```bash
git clone https://github.com/faisalrlakhany/todoApp.git
cd todoApp
```

Open `index.html` in your browser, or use VS Code **Live Server**.

> SweetAlert2 and Font Awesome load from CDNs, so keep an internet connection for the full experience.

---

## 🧠 Concepts Practiced

- DOM creation and `innerHTML` templating
- Event delegation (`click` on the list, `keyup` on the input)
- `classList.toggle` for state styling
- `localStorage` read/write with JSON serialization
- CSS keyframe animations and neon `box-shadow` effects
- Responsive design with media queries

---

## 👨‍💻 Author

**Muhammad Faisal Lakhany**
GitHub: [@faisalrlakhany](https://github.com/faisalrlakhany)
