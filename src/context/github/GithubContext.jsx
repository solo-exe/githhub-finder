import { createContext, useReducer } from 'react'
import GithubReducer from './GitHubReducer'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get Sample Users for testing
    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                // Authrozation: `token ${authtoken}`
            }
        })
        const data = await response.json()
        dispatch({ type: 'GET_USERS', payload: data, })
    }

    // Search for Users
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                // Authrozation: `token ${authtoken}`
            }
        })
        const { items } = await response.json()
        dispatch({ type: 'GET_USERS', payload: items, })
    }

    // Get Single User
    const getUser = async (login) => {
        setLoading()
        const response = JSON.parse(await (fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                // Authrozation: `token ${authtoken}`
            }
        }).then(response => response.text()).catch(error => console.log('error', error))))

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            dispatch({ type: 'GET_USER', payload: response, })
        }
    }

    const clearUsers = async () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    //Set Loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider value={{
            user: state.user,
            users: state.users,
            loading: state.loading,
            fetchUsers,
            getUser,
            searchUsers,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext