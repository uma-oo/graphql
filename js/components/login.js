import { createButton, createElement, setAttributes, handleFormSubmit } from "../utils/utils.js";

export default function Login() {

    const loginContainer = createElement('div', 'login-container')
    const loginForm = createElement('form', 'login-form', null)
    const loginInput = createElement('input', null)
    const password = createElement('input', null)
    const loginTitle = createElement('h2', 'login-title', 'Log in to your account')
    // const icon = createElement('img', 'login-icon')


    const buttonsContainer = createElement('div', 'buttons-container')
    const submitButton = createButton({ text: "Log In" }, "submit", "sbmit-btn")
    buttonsContainer.append(submitButton)
    setAttributes(loginInput, {
        placeholder: "Username or Email",
        required: 'true',
        type: 'text',
        id: 'login',
        name: 'login'
    })
    setAttributes(password, {
        placeholder: "Password",
        required: 'true',
        type: 'password',
        id: 'password',
        name: 'password'
    })
    // create the place that will be holding the error 
    const errorForm = createElement('span', 'login-error')
    // the event listeners on the submitButton (but where to validate data)
    loginForm.append(loginTitle, loginInput, password, buttonsContainer, errorForm)
    loginForm.addEventListener('submit', (e) => { handleFormSubmit(e) })
    loginContainer.append(loginForm)
    return loginContainer
}