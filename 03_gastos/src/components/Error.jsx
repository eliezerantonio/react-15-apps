import React from 'react'

const Error = ({msg}) => {
    return (
        <div>
            <p className="alert alert-danger error">{msg }</p>
        </div>
    )
}

export default Error
