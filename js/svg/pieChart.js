
import { createElement, createButton, createSvgElement, setSvgAttributes, getCssVar } from '../utils/utils.js';
//  for this section we will try to create the pie chart of the skills as the first step


export function PieChartSkills(skills) {
  const container = createElement('div', 'chart-container');
  const divSvg = createElement('div', 'svg-container');
  const svg = createSvgElement("svg");
  svg.classList.add('pie-chart-svg');
  svg.setAttribute("viewBox", "0 0 32 32");
  const  HeadingTitle = createElement('h2', 'skills-chart-title', 'Skills Chart');
  const title = createElement('h4', 'skills-chart-title', 'Skills Chart Pie');
  let buttons = []
  const divButtons = createElement('div', 'buttons-container');
  const skillsChartContainer = createElement('div', 'skills-chart-container');
  skills.forEach((element, index) => {
    const buttonText = element.type.replace("skill_", "");
    const button = createButton({ text: buttonText }, 'button', 'button-56');
    button.addEventListener('click', () => {
      title.textContent = `${buttonText.toUpperCase()} Making — ${element.amount}% done | ${100 - element.amount}% to go`;
      svg.innerHTML = ""; // Clear previous content
      const circle = createSvgElement("circle");
      setSvgAttributes(circle, {
        cx: "16",
        cy: "16",
        r: "16",
        fill: "none"
      });
      circle.setAttribute("stroke-dasharray", `${element.amount} ${100}`)
      let legend = AddLegend(getCssVar('--fourth-color'), element.amount, getCssVar('--third-color'), 100 - element.amount);
      skillsChartContainer.append(legend);
      svg.append(circle);
    });
    buttons.push(button);
    divButtons.append(button);
    // but we need to add a legend for the amount completed and the amount to go  

  });

  divSvg.append(svg);
  skillsChartContainer.append(divSvg);
  container.append(HeadingTitle,title, divButtons, skillsChartContainer);

  console.log("svg", svg);
  return [container, buttons];
}



function AddLegend(completedColor, completedAmount, toGoColor, toGoAmount) {
  let legendExists = document.querySelector('.chart-legend');
  if (legendExists) {
    legendExists.remove();
  }

  // Add legend
  const legend = createElement('div', 'chart-legend');
  // section dyal completed
  const divCompleted = createElement('div', 'legend-item');
  const textCompleted = createElement('span', null, `Completed: ${completedAmount}%`);
  const rectCompleted = createElement('span', 'legend-rect');
  rectCompleted.style.backgroundColor = completedColor;
  divCompleted.append(rectCompleted, textCompleted);
  // section dyal to go
  const divToGo = createElement('div', 'legend-item');
  const textToGo = createElement('span', null, `To Go: ${toGoAmount}%`);
  const rectToGo = createElement('span', 'legend-rect');
  rectToGo.style.backgroundColor = toGoColor;

  divToGo.append(rectToGo, textToGo);

  legend.append(divCompleted, divToGo);


  return legend
}