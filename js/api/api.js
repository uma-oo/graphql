import { renderApp } from "../index.js";
import { navigateTo } from "../utils/utils.js";

export async function loginUser(data) {
    try {
        const response = await fetch('https://learn.zone01oujda.ma/api/auth/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${data.login}:${data.password}`),
            },
            body: JSON.stringify(data)
        })
        return [response.status, await response.json()]
    } catch (error) {
        console.error(`Error trying to login${error}`);
    }
}


export async function isLoggedIn() {
    const token = localStorage.getItem("token")
    if (!token) {
        return { isLogged: false }
    }
    try {
        const response = await fetch("https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `{
                        user {
                            id
                        }
                    }`
            })


        })
        let res = await response.json()
        if (response.ok && !res.data) return { isLogged: false, error: res.errors }
        else return { isLogged: true, userData: res.data }

    }
    catch (error) {
        return { isLogged: false, error }
    }
}



export async function fetchData(query, variables) {
    const token = localStorage.getItem("token")
    if (!token) {
        return { isLogged: false }
    }
    try {
        const response = await fetch("https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables
            })


        })

        return [response.status, await response.json()]
    }
    catch (error) {
        return [, error]
    }

}





















