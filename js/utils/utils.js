import { renderApp } from "../index.js"
import { loginUser } from "../api/api.js"

export function createElement(tag, className, text = '') {
    let element = document.createElement(tag)
    if (className) element.className = className
    if (text) element.textContent = text
    return element
}


export function createForm(formRepresentaion, id) {
    let formElement = document.createElement('form')
    formElement.noValidate = true
    formElement.id = id

    formRepresentaion.elements.forEach((elem) => {
        let formGrp = createElement('div', 'form-grp')
        formGrp.dataset.for = elem.attributes.name
        let label = createElement('label', null, elem.label)
        label.setAttribute('for', elem.attributes.id)
        let formInput = createElement(elem.tag, null)
        setAttributes(formInput, elem.attributes)
     
        formGrp.style.width = elem.style.width
        let inputError = createElement('p', 'input-error')
        formGrp.append(label, formInput, inputError)
        formElement.append(formGrp)
    });

    let formButtons = createElement("div", 'form-buttons')

    formRepresentaion.buttons.forEach(button => {
        formButtons.append(createButton(button.content, button.type, button.style))
    })
    formElement.append(formButtons)
    formElement.addEventListener('submit', (e) => { handleFormSubmit(e) })
    return formElement
}

export function handleFormSubmit(event) {
    event.preventDefault()
    let form = new FormData(event.target)
    const formData = Object.fromEntries(form.entries())
    console.log(formData);
    if (event.target.id === "login-form") {
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
        .then(([status, token]) => {
            let formError = form.parentElement.querySelector(".form-error")
            if (status == 200) {
                localStorage.setItem("token", token)
                navigateTo("/")
            } else if (status == 401) {
                formError.innerText = data.error
                formError.classList.add("form-have-error")
            }
        })
}




