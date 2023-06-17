import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'


import GithubContext from '../context/github/GithubContext'

function User() {

    const { getUser, user } = useContext(GithubContext)
    const params = useParams()
    console.log("PARAMS", params)

    useEffect(() => {
        getUser(params.login)
    }, [])
    console.log('USER', user)

    return (
        <div>{user.name}</div>
    )
}

export default User