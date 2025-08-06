
import { createSvgElement, setSvgAttributes, createElement, setAttributes } from "../utils/utils.js"




// for this one we'll be trying to create a bar chart but in other way ;) 
// ila zd9 hadshi ana safi ghanwli front end 




// horizontal one 7itash projects name are long and we need to display them all
export function BarChart(projectsData) {
    const HeadingTitle = createElement('h2', null, 'Projects Chart');
    const title = createElement('h4', null, 'XP | Group Members');
    const barChartContainer = createElement('div', 'chart-container');
    const svgContainer = createElement('div', 'bar-chart-container');
    const maxXP = Math.max(...projectsData.map(project => {
        let res = project.xp_per_project.transactions[0];
        try {
            return res.amount;
        } catch (error) {
            console.log("err", project);
            
        }
    }));
    // to handle the width of the bar chart
    const chartWidth = 700
    const labelWidth = 350
    const maxBarWidth = chartWidth - labelWidth
    // the bar width will be calculated based on the maxXP 
    // to handle the height of the bar chart
    const barHeight = 40
    const gap = 20 // gap between bars
    const chartHeight = projectsData.length * barHeight + gap

    // let's sort the data by the name of the project
    projectsData.sort((a, b) => a.name_project.name.localeCompare(b.name_project.name));
    const tooltip = createElement('div');
    setAttributes(tooltip, { id: "tooltip" });
    const svg = createSvgElement('svg')
    setSvgAttributes(svg, {
        width: chartWidth,
        height: chartHeight,
    });
    projectsData.forEach((project, index) => {
        // 
        const teamMembers = project?.members_aggregate?.team;
        let teamMemberNames = []
        teamMembers.map(
            (member) => {
                teamMemberNames.push(member?.userLogin)
            }
        );
        const barWidth = (project.xp_per_project.transactions[0]?.amount / maxXP) * maxBarWidth;
        const yPosition = (index * barHeight) + gap; // to add a gap between bars
        //  nssit l grp ;)
        const group = createSvgElement('g');
        setSvgAttributes(group, {
            class: 'bar-group'
        })
        // Create a rectangle for the bar
        const rect = createSvgElement('rect');
        setSvgAttributes(rect, {
            x: labelWidth,
            y: yPosition,
            width: barWidth,
            height: barHeight - 5,
            class: 'bar',
            rx: 8,
        });

        rect.addEventListener("mouseenter", (e) => {
            tooltip.style.display = "block";
            tooltip.textContent = `Team: ${teamMemberNames.join(', ')} XP: ${project.xp_per_project.transactions[0].amount}`;
        });
        // Create a text element for the project name
        const text = createSvgElement('text');
        setSvgAttributes(text, {
            x: 10,
            y: yPosition + barHeight / 2 + 5,
            fill: 'var(--fourth-color)',
            class: 'bar-label'
        });
        text.textContent = project.name_project.name;
        group.append(rect, text);
        svg.appendChild(group);

    });
    svgContainer.appendChild(svg);

    barChartContainer.append(HeadingTitle, title, svgContainer, tooltip);
    return barChartContainer;


}


