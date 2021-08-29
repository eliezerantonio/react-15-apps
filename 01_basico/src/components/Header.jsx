import React from 'react'

const Header = (props) => {

    console.log(props);
    return (
        <div clasName>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header
