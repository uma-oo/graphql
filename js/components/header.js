import { createElement, createButton } from "../utils/utils.js";
import { renderApp } from "../index.js";



export function Header(header , data) {
    const greeting = createElement('h1', null, `Welcome back ${data.login}`)
    const logoutButton = createButton({ text: "Log-out" }, 'submit', 'button-skills logout')
    logoutButton.addEventListener('click', (() => {
        localStorage.removeItem("token")
        renderApp()
    }))
    header.append(greeting, logoutButton)
   

}