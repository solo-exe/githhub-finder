import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({ title }) {
    return (
        <div className='navbar mb-12 shadow-lg | bg-neutral text-neutral-content'>
            <div className="container justify-between  mx-auto">

                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-5xl' />
                    <Link to='/' className='text-lg font-bold align-middle' >
                        {title}
                    </Link>
                </div>

                <div className="flex px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                    </div>
                    <div className="flex justify-end">
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                    </div>
                </div>

            </div>
        </div >
    )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.protoTypes = {
    title: PropTypes.string,
}

export default Navbar
