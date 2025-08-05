
import Login from "../components/login.js"
import { createElement } from "../utils/utils.js"



export function renderLoginPage() {
    const app = document.querySelector('.app')
    app.innerHTML = "" 
    const loginPage = createElement('div', 'login-page') 
    loginPage.append(Login()) 
    app.append(loginPage)
}