import { isLoggedIn } from "./api/api.js";
import { renderHomePage } from "./pages/homePage.js";
import { renderLoginPage } from "./pages/loginPage.js";



export let app = document.querySelector('.app')

export async function renderApp() {
    app.innerHTML = ""
    const isLogged = await isLoggedIn()
    switch (isLogged.isLogged) {
        case false:
            renderLoginPage(app)
            break;
        case true:
            renderHomePage(app, isLogged.userData)
            break;
    }
}

await renderApp()
