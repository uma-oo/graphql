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

export async function logoutUser() {
    try {
        const response = await fetch("http://localhost:8080/api/user/logout", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        })

        return response.status
    } catch (error) {
        console.error(`Error trying to logout: ${error}`)
    }
}

export async function isLoggedIn() {
    const token = localStorage.getItem("token")
    if (!token) {
        return { isLoggedIn: false }
    }
    try {
        const response = await fetch("https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql", {
            Authorization: Bearer,
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status) return { isLoggedIn: true, error: "The JWT authentication failed" }

    }
    catch (error) {
        return { isLoggedIn: false, error }
    }
    return { isLoggedIn: false }

}


// Oumaymanewfocus@2024