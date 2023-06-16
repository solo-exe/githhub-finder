import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

export default function UserSearch() {
    const [text, setText] = useState('')

    const { users, searchUsers, clearResults } = useContext(GithubContext)
    const { alert, setAlert } = useContext(AlertContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            // alert()
            setAlert('Please enter something', 'error')
        } else {
            // @todo - search users
            searchUsers(text)
            setText('')
        }
    }

    const handleClear = (e) => {
        e.preventDefault()
        clearResults()
    }


    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid
        -cols-2 md:grid-cols-2 mb-8 gap-8' >

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-40 input input-lg bg-white text-black mr-8" placeholder='Search' value={text} onChange={handleChange} />
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                        </div>
                    </div>
                </form>
            </div>

            {users.length > 0 && (<div>
                <button className="btn btn-ghost btn-lg" onClick={handleClear}>
                    Clear
                </button>
            </div>)}

        </div>
    )
}
