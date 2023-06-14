import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

export default function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        console.log('runs');
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                // Authrozation: `token ${authtoken}`
            }
        })
        const data = await response.json()
        console.log(data);
        setUsers(data)
        setLoading(false)
    }

    if (!loading) {
        return (
            <>
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                        // <h3>{user.login}</h3>
                    ))}
                </div >
            </>

        )
    } else {
        return <Spinner />
    }


}
