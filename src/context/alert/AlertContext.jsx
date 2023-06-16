import { createContext, useReducer } from 'react'
import AlertReducer from './AlertReducer'


const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        })

        // setTimeout(() => {
        //     console.log('REMOVE ALERT RUNS')
        //     dispatch({ type: 'REMOVE_AlERT' })
        // }, 3000)
    }

    return <AlertContext.Provider value={{
        alert: state, setAlert
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext