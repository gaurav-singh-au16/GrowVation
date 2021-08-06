import React from 'react'

function Navbar(props) {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Gallery App</span>
                    </a>
                </header>
            </div>
        </div>
    )
}

export default Navbar
