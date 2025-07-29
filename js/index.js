import { isLoggedIn } from "./api/api.js";
import { Home } from "./components/home.js";
import Login from "./components/login.js";
import { renderLoginPage } from "./pages/loginPage.js";
// import { renderHomePage } from "./pages/homePage.js"
// import { renderLoginPage } from "./pages/loginPage.js";


export let app = document.querySelector('.app')

export async function renderApp() {
    console.log("hnaaaa");
    app.innerHTML = ""
    const isLogged = await isLoggedIn()
    console.log("isLoggedin ", isLogged);
    switch (isLogged.isLoggedIn) {
        case false:
            console.log("inside the login");
            renderLoginPage(app)
            break;
        case true:
            console.log("inside the home");
            Home(app)
            break;
    }
}

await renderApp()

// Oumaymanewfocus@2024