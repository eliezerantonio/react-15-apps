import React from 'react'

const Header = ({title}) => {
    return (
        <div>
            <nav className="nav-wraper light-blue darken-3">
                <a href="#!" className="brand-logo center">{title }</a>
            </nav>
            
        </div>
    )
}

export default Header
