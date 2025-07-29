import { isLoggedIn } from "../api/api.js"
import { navigateTo, createElement, createForm, login } from "../utils/utils.js"
import { loginForm } from "../forms/loginForm.js"
import Login from "../components/login.js"
export function renderLoginPage(app) {
    app.append(Login())
    
}