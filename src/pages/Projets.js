import React from 'react'
import { Link } from 'react-router-dom'

const Projets = () => {
    return (
        <div>
            <h1>Projets</h1>
            <Link to="/">                
                <div className="attendence">Attendence List</div>
            </Link>
        </div>
    )
}

export default Projets
