import { createSvgElement, setSvgAttributes } from "../utils/utils.js"


export function createGroupsChart(groups_per_project) {
  
  const svg = createSvgElement('svg');
  setSvgAttributes(svg, { width: '100%', height: 450 });


  const yAxis = createSvgElement('line');
  const xAxis = createSvgElement('line');
  setSvgAttributes(yAxis, { x1: 50, y1: 50, x2: 50, y2: 350, stroke: "black" });
  setSvgAttributes(xAxis, { x1: 50, y1: 350, x2: 610, y2: 350, stroke: "black" });
  svg.append(yAxis, xAxis);

  const initialTranslate = 60;
  let offset = 0;

  const baseline = 350;
  const barWidth = 40;
  const step = 50;
  const unitHeight = 83.33; // your scale factor

  groups_per_project.forEach((group) => {
    const g = createSvgElement('g');
    setSvgAttributes(g, { transform: `translate(${initialTranslate + offset}, 0)` });

    const count = Number(group.members_aggregate.total_members.count) || 0;
    const height = unitHeight * count;
    const y = baseline - height; // grow upwards

    const rect = createSvgElement('rect');
    setSvgAttributes(rect, { x: 0, y, width: barWidth, height, fill: "#4a90e2" });

    const textCount = createSvgElement('text');
    textCount.textContent = String(count);
    setSvgAttributes(textCount, { x: barWidth / 2, y: y - 5, textAnchor: "middle", fontSize: 12 });

    const textProject = createSvgElement('text');
    textProject.textContent = group.name_project.name;
    setSvgAttributes(textProject, { x: barWidth / 2, y: 365, textAnchor: "middle", fontSize: 11 });

    const teamList = createSvgElement('text');
    teamList.textContent = (group.members_aggregate.team || []).join(",");
    setSvgAttributes(teamList, { x: barWidth / 2, y: 380, textAnchor: "middle", fontSize: 10 });

    g.append(rect, textCount, textProject, teamList);
    svg.append(g);

    offset += step;
  });

  return svg;
}




{/* <svg width="660" height="450">
    <line x1="50" y1="50" x2="50" y2="350" stroke="black" />
    <line x1="50" y1="350" x2="610" y2="350" stroke="black" />

    <g transform="translate(60, 0)">
        <rect x="0" y="266.67" width="40" height="83.33" fill="#4a90e2" />
        <text x="20" y="261.67" text-anchor="middle" font-size="12">1</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">go-reloaded</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">ooumayma</text>
    </g>
//
    <g transform="translate(140, 0)">
        <rect x="0" y="266.67" width="40" height="83.33" fill="#4a90e2" />
        <text x="20" y="261.67" text-anchor="middle" font-size="12">1</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">math-skills</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">ooumayma</text>
    </g>

    <g transform="translate(220, 0)">
        <rect x="0" y="266.67" width="40" height="83.33" fill="#4a90e2" />
        <text x="20" y="261.67" text-anchor="middle" font-size="12">1</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">guess-it-1</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">ooumayma</text>
    </g>

    <g transform="translate(300, 0)">
        <rect x="0" y="116.67" width="40" height="233.33" fill="#4a90e2" />
        <text x="20" y="111.67" text-anchor="middle" font-size="12">3</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">ascii-art</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">aayoubst, ooumayma, helbadao</text>
    </g>

    <g transform="translate(380, 0)">
        <rect x="0" y="116.67" width="40" height="233.33" fill="#4a90e2" />
        <text x="20" y="111.67" text-anchor="middle" font-size="12">3</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">ascii-art-output</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">aayoubst, ooumayma, helbadao</text>
    </g>

    <g transform="translate(460, 0)">
        <rect x="0" y="116.67" width="40" height="233.33" fill="#4a90e2" />
        <text x="20" y="111.67" text-anchor="middle" font-size="12">3</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">ascii-art-web</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">aayoubst, ooumayma, midbenke</text>
    </g>

    <g transform="translate(540, 0)">
        <rect x="0" y="116.67" width="40" height="233.33" fill="#4a90e2" />
        <text x="20" y="111.67" text-anchor="middle" font-size="12">3</text>
        <text x="20" y="365" text-anchor="middle" font-size="11">ascii-art-fs</text>
        <text x="20" y="380" text-anchor="middle" font-size="10">helbadao, aayoubst, ooumayma</text>
    </g>
</svg> */}
