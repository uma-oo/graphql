
import { createElement } from "../utils/utils.js";

export function Home(app) {
    const header = createElement('header', 'header-section', '')
    const main = createElement('main', 'main-section')
    const footer = createElement('footer', 'footer-section', '')
   
    app.append(header, main, footer)
    return app
}
