import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import RepoList from '../repos/RepoList'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card shadow-md bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div className='avatar'>
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="Profile" />
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{login}</h2>
                    <Link className='text-base text-opacity-20' to={`/user/${login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem