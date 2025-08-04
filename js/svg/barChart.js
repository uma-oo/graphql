




// for this one we'll be trying to create a bar chart but in other way ;) 
// ila zd9 hadshi ana safi ghanwli front end engineer u blasti mashi hna 


import { createSvgElement, setSvgAttributes, createElement } from "../utils/utils.js"


// horizontal one 7itash projects name are long and we need to display them all
export function BarChart(projectsData) {
    const barChartContainer = createElement('div', 'bar-chart-container chart-container');
    const maxXP = Math.max(...projectsData.map(project => project.xp_per_project.transactions[0].amount));
    // to handle the width of the bar chart
    const chartWidth = 600
    const labelWidth = 250
    const maxBarWidth = chartWidth - labelWidth
    // the bar width will be calculated based on the maxXP 
    // to handle the height of the bar chart
    const barHeight = 40
    const gap = 20 // gap between bars
    const chartHeight = projectsData.length * barHeight + gap

    // let's sort the data by the name of the project
    projectsData.sort((a, b) => a.name_project.name.localeCompare(b.name_project.name));
    console.log("sorted projectsData", projectsData);

    const svg = createSvgElement('svg')
    setSvgAttributes(svg, {
        width: chartWidth,
        height: chartHeight,
        class: 'bar-chart'
    });
    projectsData.forEach((project, index) => {
        // 
        const teamMembers = project.members_aggregate.team;
        let teamMemberNames = []
        teamMembers.map(
            (member) => {
                teamMemberNames.push(member.userLogin)
            }
        );
        console.log(teamMemberNames);
        const barWidth = (project.xp_per_project.transactions[0].amount / maxXP) * maxBarWidth;
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
    

        // Create a text element for the project name
        const text = createSvgElement('text');
        setSvgAttributes(text, {
            x: 10,
            y: yPosition + barHeight / 2 + 5,
            fill: 'var(--fourth-color)',
            class: 'bar-label'
        });
        text.textContent = project.name_project.name;
        const divTitle = createElement('div', 'bar-title');
        const title = createSvgElement('text');
        setSvgAttributes(title, { class: 'bar-text', x: labelWidth, y: yPosition + barHeight / 2 + 5 });
        title.textContent = `Team Members: ${teamMemberNames.join(', ')} XP: ${project.xp_per_project.transactions[0].amount}`;
        divTitle.appendChild(title);
        
        group.append(rect, text, divTitle);
        svg.appendChild(group);
    });


    barChartContainer.appendChild(svg);
    return barChartContainer;


}


