import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const github = axios.create({
    baseURL: GITHUB_URL,
    header: {
        Authorization: '' // GITHUB HEADER AUTH
    }
})

// Get Sample Users for testing
export const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
        headers: {
            // Authrozation: `token ${authtoken}`
        }
    })
    const data = await response.json()
    return data
}

// Search for Users
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const response = await github.get(`/search/users?${params}`)
    console.log(response)
    return response.data.items
}


// Get Single User
export const getUser = async (login) => {
    const response = JSON.parse(await (fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            // Authrozation: `token ${authtoken}`
        }
    }).then(response => response.text()).catch(error => console.log('error', error))))

    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        return response
    }
}

export const getRepos = async (login) => {
    const response = JSON.parse(await (fetch(`${GITHUB_URL}/users/${login}/repos`, {
        headers: {
            // Authrozation: `token ${authtoken}`
        }
    }).then(response => response.text()).catch(error => console.log('error', error))))
    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        return response
    }
}

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    console.log('USER', user.data)
    return { user: user.data, repos: repos.data }
}