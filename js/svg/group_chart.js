
import { createSvgElement, setSvgAttributes, createElement } from "../utils/utils.js"


export function renderChart() {
    const svg = document.getElementById("chart");
    const dataLength = groups_per_project.length;
    const maxXp = Math.max(...groups_per_project.map(g => Number(g.xp_per_project.transactions[0].amount) || 0), 1000);
    const padding = 50;
    const barWidth = 20;
    const step = 30;
    const chartWidth = padding * 2 + step * dataLength;
    const chartHeight = 400;
    const baseline = chartHeight - padding;
    const unitHeight = (chartHeight - 2 * padding) / maxXp;

    // Set viewBox dynamically
    svg.setAttribute("viewBox", `0 0 ${chartWidth} ${chartHeight}`);

    // Clear previous content
    svg.innerHTML = "";

    // Y-axis
    const yAxis = createSvgElement("g");
    setSvgAttributes(yAxis, { transform: `translate(${padding}, 0)` });
    const yLine = createSvgElement("line");
    setSvgAttributes(yLine, { x1: 0, y1: padding, x2: 0, y2: baseline, stroke: "#333", strokeWidth: 2 });
    yAxis.appendChild(yLine);

    // Y-axis labels
    [0, maxXp / 4, maxXp / 2, (3 * maxXp) / 4, maxXp].forEach((val, i) => {
        const y = baseline - (val * (chartHeight - 2 * padding) / maxXp);
        const text = createSvgElement("text");
        text.textContent = Math.round(val);
        setSvgAttributes(text, { x: -10, y: y + 5, textAnchor: "end", fontSize: 12 });
        yAxis.appendChild(text);
    });
    const yLabel = createSvgElement("text");
    yLabel.textContent = "XP Amount";
    setSvgAttributes(yLabel, { x: -padding, y: chartHeight / 2, textAnchor: "middle", transform: "rotate(-90)", fontSize: 14 });
    yAxis.appendChild(yLabel);
    svg.appendChild(yAxis);

    // X-axis
    const xAxis = createSvgElement("g");
    setSvgAttributes(xAxis, { transform: `translate(${padding}, ${baseline})` });
    const xLine = createSvgElement("line");
    setSvgAttributes(xLine, { x1: 0, y1: 0, x2: step * dataLength, y2: 0, stroke: "#333", strokeWidth: 2 });
    xAxis.appendChild(xLine);
    svg.appendChild(xAxis);

    // Bars and labels
    let offset = 0;
    groups_per_project.forEach((group, index) => {
        const g = createSvgElement("g");
        setSvgAttributes(g, { transform: `translate(${padding + offset}, 0)` });

        const count = Number(group.xp_per_project.transactions[0].amount) || 0;
        const height = unitHeight * count;
        const y = baseline - height;

        // Bar
        const rect = createSvgElement("rect", "bar");
        setSvgAttributes(rect, { x: 0, y, width: barWidth, height, fill: "#4a90e2" });

        // Tooltip
        const tooltipText = `Project: ${group.name_project.name}\nMembers: ${group.members_aggregate.total_members.count}\nTeam: ${(group.members_aggregate.team.map(t => t.userLogin) || []).join(", ")}`;
        rect.onmouseover = (e) => {
            let tooltip = document.getElementById("tooltip");
            if (!tooltip) {
                tooltip = document.createElement("div");
                tooltip.id = "tooltip";
                tooltip.className = "tooltip";
                document.body.appendChild(tooltip);
            }
            tooltip.style.display = "block";
            tooltip.textContent = tooltipText;
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        };
        rect.onmouseout = () => {
            const tooltip = document.getElementById("tooltip");
            if (tooltip) tooltip.style.display = "none";
        };

        // Project name (rotated)
        const textProject = createSvgElement("text");
        textProject.textContent = group.name_project.name;
        setSvgAttributes(textProject, { x: barWidth / 2, y: baseline + 30, textAnchor: "end", fontSize: 10, transform: `rotate(-45, ${barWidth / 2}, ${baseline + 30})` });

        g.appendChild(rect);
        g.appendChild(textProject);
        svg.appendChild(g);

        offset += step;
    });
}