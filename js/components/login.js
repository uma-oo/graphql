import { createButton, createElement, setAttributes, handleFormSubmit } from "../utils/utils.js";

export default function Login() {
    const loginForm = createElement('form', 'login-form', null)
    const loginInput = createElement('input', null)
    const password = createElement('input', null)
    const loginTitle = createElement('h2', 'login-title', 'Login to your account')

    const buttonsContainer = createElement('div', 'buttons-container')
    const submitButton = createButton({ text: "Login" }, "submit", "sbmit-btn")
    const resetButton = createButton({ text: "Reset" }, "reset", "reset-btn")
    buttonsContainer.append(submitButton, resetButton)
    setAttributes(loginInput, {
        placeholder: "username or email",
        required: 'true',
        type: 'text',
        id: 'login',
        name: 'login'
    })
    setAttributes(password, {
        placeholder: "password",
        required: 'true',
        type: 'password',
        id: 'password',
        name: 'password'
    })
    // create the place that will be holding the error 
    const errorForm = createElement('span', 'login-error')
    // the event listeners on the submitButton (but where to validate data)
    loginForm.append(loginTitle,loginInput, password,buttonsContainer, errorForm)
    loginForm.addEventListener('submit', (e) => { handleFormSubmit(e) })
    return loginForm
}