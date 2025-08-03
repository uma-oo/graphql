
import { fetchData } from '../api/api.js'
import { Home } from '../components/home.js'
import { queryData } from '../queries/groups.js'
import { BarChart } from '../svg/barChart.js'
import { PieChartSkills } from '../svg/pieChart.js'

export async function renderHomePage(app, userData) {
  app.innerHTML = ""
  app = Home(app)
  console.log("userData", userData, userData.user[0].id);
  const [query, variables] = queryData(parseInt(userData.user[0].id))
  const [status, data] = await fetchData(query, variables)

  if (data) {
    let dataOrganized = Object.values(Object.values(data)[0]);
    console.log("dataOrganized", dataOrganized);
    const personalInfo = Object.values(dataOrganized[0])[0];
    const level = Object.values(dataOrganized[1])[0];
    const cohorts = Object.values(dataOrganized[2])[0];
    const projects = Object.values(dataOrganized[3]);
    console.log("projects", projects);
    const skills = Object.values(dataOrganized[4])[0];
    const main = document.querySelector("main")
    // let's handle here the bar chart svg  w logic ;) 
    // the hardest part 
    const barChartContainer = BarChart(projects)

    main.append(barChartContainer)

    // handle the pie chart logic 
    const [skillsChartContainer, buttons] = PieChartSkills(skills)
    main.append(skillsChartContainer)
    if (buttons.length > 0) {
      buttons[0].click()
    }

  }
  return app

}