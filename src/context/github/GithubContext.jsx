import { createContext, useReducer } from 'react'
import GithubReducer from './GitHubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // const getRepos = async (login) => {
    //     setLoading()
    //     const response = JSON.parse(await (fetch(`${GITHUB_URL}/users/${login}/repos`, {
    //         headers: {
    //             // Authrozation: `token ${authtoken}`
    //         }
    //     }).then(response => response.text()).catch(error => console.log('error', error))))
    //     if (response.status === 404) {
    //         window.location = '/notfound'
    //     } else {
    //         dispatch({ type: 'GET_REPOS', payload: response, })
    //     }
    // }

    //Set Loading
    // const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            // getUserAndRepos
            // getRepos,

            // getUserAndRepos,
            // fetchUsers,
            // searchUsers,
            // clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext