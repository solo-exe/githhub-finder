import { createContext, useReducer } from 'react'
import gitHubReducer from './GitHubReducer'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)


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
        // setUsers(data)
        // setLoading(false)
    }

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        console.log(`${GITHUB_URL}/search/users?${params}`)
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                // Authrozation: `token ${authtoken}`
            }
        })
        const { items } = await response.json()
        dispatch({ type: 'GET_USERS', payload: items, })
        // setUsers(data)
        // setLoading(false)
    }

    const clearUsers = async () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    //Set Loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            fetchUsers,
            searchUsers,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext