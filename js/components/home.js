import { renderApp } from "../index.js";
import { createButton, createElement } from "../utils/utils.js";

export function Home(app) {
    const header = createElement('header', 'header-section', '')
    const main = createElement('main', 'main-section')
    const chartGrp = createElement('div', null)
    chartGrp.innerHTML = `
    <svg id="chart" style="width: 100%; height: auto;" preserveAspectRatio="xMidYMid meet">
    <style>
    .bar { fill: #4a90e2; }
    .bar:hover { fill: #357abd; }
    .tooltip { display: none; position: absolute; background: #333; color: #fff; padding: 5px; border-radius: 3px; font-size: 12px; pointer-events: none; }
    text { font-family: Arial, sans-serif; }
   </style>
   <svg>`
    main.append(chartGrp)
    const footer = createElement('footer', 'footer-section', '')
    const logoutButton = createButton({ text: "Log out" }, 'submit', 'logout-btn')
    logoutButton.addEventListener('click', (() => {
        localStorage.removeItem("token")
        renderApp()
    }))
    header.append(logoutButton)
    app.append(header, main, footer)
    return app
}
