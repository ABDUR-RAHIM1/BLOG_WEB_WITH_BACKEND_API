import React from 'react'

function Spinner() {
    const style = {
        width:"100%",
        height :"100vh",
        display:"flex",
        alignItems :"center",
        justifyContent :"center"
    }
    return (
        <div>
            <div style={style}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner