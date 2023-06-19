// import { } from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
// import GithubContext from '../../context/github/GithubContext'

function RepoList({ repos }) {

    return (
        <div className='rounded-lg shadow-lg card bg-base-300'>
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    Latest Repositories
                </h2>
                {repos.map(repo =>
                    // (<h3>{repo.name}</h3>)
                    <RepoItem key={repo.id} repo={repo} />
                )}
            </div>
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList