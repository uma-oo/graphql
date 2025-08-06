import { isLoggedIn } from "./api/api.js";
import { renderHomePage } from "./pages/homePage.js";
import { renderLoginPage } from "./pages/loginPage.js";





export async function renderApp() {
    const isLogged = await isLoggedIn()
    console.log(isLogged);
    switch (isLogged.isLogged) {
        case false:
            renderLoginPage()
            break;
        case true:
            renderHomePage(isLogged.userData)
            break;
    }
}

await renderApp()
