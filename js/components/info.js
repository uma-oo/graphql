import { createElement, setAttributes } from "../utils/utils.js";



export function RenderPersonalInfo(personalInfo, level, cohorts, projectsDone) {
    const infoContainer = createElement('div', 'info-container')
    console.log("hhhhhhhh", Object.entries(personalInfo));
    const personalInfoContainer = createElement('div', 'peronalInfoContainer')
    for (let [key, value] of Object.entries(personalInfo)) {
        if (key == "login") continue
        if (key == "auditRatio") value = Math.round(value * 10) / 10;
        const keyValueContainer = createElement('div', 'key-value')
        const keyHeader = createElement('h5', "key", `${key}: `)
        const valueSpan = createElement('span', 'value', `${value}`)
        keyValueContainer.append(keyHeader, valueSpan)
        personalInfoContainer.append(keyValueContainer)
    }
    const levelContainer = CreateInfoElementContainer('Current Level', level?.level, '../icon-level.png')
    const auditRatio = Math.round(personalInfo.auditRatio*10)/10
    const auditRatioContainer = CreateInfoElementContainer('Audit Ratio', auditRatio, '../icon-engagement.png')
    const projectDoneContainer = CreateInfoElementContainer('Finished Projects', projectsDone, '../icon-done.png')
    infoContainer.append(levelContainer,projectDoneContainer, auditRatioContainer)
    return infoContainer

}


function CreateInfoElementContainer(text, value, pathIcon) {
    const dataContainer = createElement('div', 'key-value')
    const elementContainer = createElement('div', 'data-container')
    const levelHeading = createElement('h4', null, `${text}`)
    const levelValue = createElement('span', 'data-value', `${value}`)
    dataContainer.append(levelHeading, levelValue)
    const levelIcon = createElement('img', 'icon')
    setAttributes(levelIcon, { src: `${pathIcon}` })
    elementContainer.append(levelIcon, dataContainer)
    return elementContainer
}