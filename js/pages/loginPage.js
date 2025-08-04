
import Login from "../components/login.js"
import { createElement } from "../utils/utils.js"



export function renderLoginPage(app) {
    app.innerHTML = "" // Clear the app container
    const loginPage = createElement('div', 'login-page') // This is the main container for the login page
    loginPage.append(Login()) // Append the login component to the login page container


    app.append(loginPage)
    return app


}