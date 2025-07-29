import { createButton, createElement, setAttributes, handleFormSubmit } from "../utils/utils.js";

export default function Login() {
    const loginForm = createElement('form', 'login-form', null)
    const loginInput = createElement('input', null)
    const password = createElement('input', null)
    const submitButton = createButton({ text: "Login" }, "submit", "sbmit-btn")
    const resetButton = createButton({ text: "Reset" }, "reset", "reset-btn")
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
    // the event listeners on the submitButton (but where to validate data)
    loginForm.append(loginInput, password, submitButton, resetButton)
    loginForm.addEventListener('submit', (e) => { handleFormSubmit(e) })
    return loginForm
}