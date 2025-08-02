




// for this one we'll be trying to create a bar chart but in other way ;) 
// ila zd9 hadshi ana safi ghanwli front end engineer u blasti mashi hna 


// horizontal one 7itash projects name are long and we need to display them all
export function BarChart(projectsData) {


}



// helper function to calclulate dimensions of the bar chart
// ghaliban ghaid nkhdm b log bash data tkuun mgadaaa

function calculateBarDimensions(projectsData) {
    maxXP = Math.max(...projectsData.map(project => project.xp_per_project.transactions[0].amount));
    // to handle the width of the bar chart
    chartWidth = 600
    labelWidth = 150
    maxBarWidth = chartWidth - labelWidth
    // to handle the height of the bar chart
}