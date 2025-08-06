
import { fetchData } from '../api/api.js'
import { Header } from '../components/header.js'
import { Home } from '../components/home.js'
import { queryData } from '../queries/query.js'
import { BarChart } from '../svg/barChart.js'
import { PieChartSkills } from '../svg/pieChart.js'
import { RenderPersonalInfo } from '../components/info.js'
export async function renderHomePage(userData) {
  let app = document.querySelector('.app')
  app.innerHTML = ''
  app = Home(app)
  const [query, variables] = queryData(parseInt(userData.user[0].id))
  const [status, data] = await fetchData(query, variables)

  if (status == 200 && data) {
    let dataOrganized = Object.values(Object.values(data)[0]);
    const personalInfo = Object.values(dataOrganized[0])[0];
    const level = Object.values(dataOrganized[1])[0];
    const projects = Object.values(dataOrganized[2]);
    const skills = Object.values(dataOrganized[3])[0];
    // n3mru l header 
    const header = document.querySelector('header')
    Header(header, personalInfo)
    // n3mru l main section 
    const main = document.querySelector("main")
    // add the personal info thing
    const personalInfoContainer = RenderPersonalInfo(personalInfo, level, projects?.length)
    // let's handle here the bar chart svg  w logic ;) 
    // the hardest part 
    const barChartContainer = BarChart(projects)
    // handle the pie chart logic 
    const [skillsChartContainer, buttons] = PieChartSkills(skills)
    main.append(personalInfoContainer, skillsChartContainer, barChartContainer)
    if (buttons.length > 0) {
      buttons[0].click()
    }
    // l footer section 

  }
  return app

}