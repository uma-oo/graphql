import { renderApp } from "../index.js"
import { loginUser } from "../api/api.js"
const SVG_NS = "http://www.w3.org/2000/svg";

export function createElement(tag, className, text = '') {
    let element = document.createElement(tag)
    if (className) element.className = className
    if (text) element.textContent = text
    return element
}



export function createSvgElement(tag) {
    return document.createElementNS(SVG_NS, tag);
}

export function setSvgAttributes(el, attrs) {
    for (const [k, v] of Object.entries(attrs || {})) {
        el.setAttribute(k, String(v));
    }
}


export function handleFormSubmit(event) {
    event.preventDefault()
    let form = new FormData(event.target)
    const formData = Object.fromEntries(form.entries())
    console.log(event.target);
    if (event.target.className === "login-form") {
        login(event.target, formData)
    }
}


export function loadFormErrors(form, data) {
    for (let [field, error] of Object.entries(data)) {
        let inputError = form.querySelector(`.form-grp[data-for="${field}"]>.input-error`)
        if (inputError) {
            inputError.textContent = error;
        }
    }
}

export function createButton(content, type, className) {
    let button = document.createElement('button')
    button.setAttribute('type', type)

    if (className) button.className = className
    let btnIcon = content.icon ? createIcon(content.icon) : ""
    let btnText = createElement('span', null, content.text)
    button.append(btnIcon, btnText)
    return button
}


export function navigateTo(pathname) {
    history.replaceState({}, "", pathname)
    renderApp()
}


export function setAttributes(elem, attributes) {
    for (let [key, val] of Object.entries(attributes)) {
        elem.setAttribute(key, val)
    }
}



export function login(form, data) {
    loginUser(data)
        .then(([status, response]) => {
            let formError = form.querySelector(".login-error")
            if (status == 200) {
                localStorage.setItem("token", response)
                navigateTo("/")
            } else {
                formError.innerText = response.error
            }
        })
}




export function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
