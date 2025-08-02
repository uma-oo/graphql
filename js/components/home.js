import { renderApp } from "../index.js";
import { createButton, createElement } from "../utils/utils.js";

export function Home(app) {
    const header = createElement('header', 'header-section', '')
    const main = createElement('main', 'main-section')
    const footer = createElement('footer', 'footer-section', '')
    const logoutButton = createButton({ text: "Log out" }, 'submit', 'logout-btn')
    logoutButton.addEventListener('click', (() => {
        localStorage.removeItem("token")
        renderApp()
    }))
    header.append(logoutButton)
    app.append(header, main, footer)
    return app
}
