
import { fetchData } from '../api/api.js'
import { Home } from '../components/home.js'
import { queryData } from '../queries/groups.js'
import { createGroupsChart } from '../svg/group_chart.js'
import { createElement } from '../utils/utils.js'

export async function renderHomePage(app, userData) {
    app.innerHTML = ""
    console.log("app", app.innerHTML);
    app = Home(app)
    console.log("userData", userData, userData.user[0].id);
    const [query, variables] = queryData(parseInt(userData.user[0].id))
    const [status, data] = await fetchData(query, variables)

    if (data) {
        const main = document.querySelector("main")
        const groupsContainer = createElement('div', 'groups-svg')
        console.log("data", data.data["groups_per_project"]);
        const groupsChart = createGroupsChart(data.data["groups_per_project"])
        console.log(groupsChart);
        groupsContainer.appendChild(groupsChart)
        main.append(groupsContainer)
    }
    return app

}