import React from 'react'

function About() {
    return (
        <div className='justify-end'>
            <h1 className="text-6xl">GITHUB FINDER</h1>
            <p className="mb-4 text-2xl font-light text-red-500">
                A React App to search github profiles.
            </p>
            <p className="text-lg text-gray-40">
                Version <span className="text-white">1.0.0</span>
            </p>
        </div>
    )
}

export default About