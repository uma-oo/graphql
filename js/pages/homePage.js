import { navigateTo } from '../utils/utils.js'
import { isLoggedIn } from "../api/api.js"
import { createElement } from '../utils/utils.js'

export function renderHomePage(app) {
    isLoggedIn().then(
        console.log("hhhhhhhhhhhh")
    )

}