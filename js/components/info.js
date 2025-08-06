import { createElement, setAttributes } from "../utils/utils.js";



export function RenderPersonalInfo(personalInfo, level, projectsDone) {
    const infoContainer = createElement('div', 'info-container')
    const levelContainer = CreateInfoElementContainer('Current Level', level?.level, './assets/icon-level.png')
    const auditRatio = Math.round(personalInfo.auditRatio*10)/10
    const auditRatioContainer = CreateInfoElementContainer('Audit Ratio', auditRatio, './assets/icon-engagement.png')
    const projectDoneContainer = CreateInfoElementContainer('Finished Projects', projectsDone, './assets/icon-done.png')
    infoContainer.append(levelContainer,projectDoneContainer, auditRatioContainer)
    return infoContainer

}


function CreateInfoElementContainer(text, value, pathIcon) {
    const dataContainer = createElement('div', 'key-value')
    const elementContainer = createElement('div', 'data-container')
    const levelHeading = createElement('h4', null, `${text}`)
    const levelValue = createElement('span', null, `${value}`)
    dataContainer.append(levelHeading, levelValue)
    const levelIcon = createElement('img', null)
    setAttributes(levelIcon, { src: `${pathIcon}` })
    elementContainer.append(levelIcon, dataContainer)
    return elementContainer
}