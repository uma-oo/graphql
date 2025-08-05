
import { createElement, setAttributes } from "../utils/utils.js";


export function Home(app) {
    const header = createElement('header', 'header-section', '')
    const main = createElement('main', 'main-section')
    const footer = createElement('footer', 'footer-section', '')
    const footerContainer = createElement('div', 'footer-container')
    const footerContent = createElement('span', null , 'Created with hardships, struggles and a little bit of love 🌸 by')
    const githubLink = createElement('a', 'link', 'uma-oo')
    setAttributes(githubLink, {'href': 'https://github.com/uma-oo', 'target': '_blank'})
    footerContainer.append(footerContent, githubLink)
    footer.append(footerContainer)
    app.append(header, main, footer)
    return app
}
