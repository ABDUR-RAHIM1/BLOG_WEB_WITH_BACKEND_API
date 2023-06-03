import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { loggedInContext } from '../App'
import '../StyleComponent/Navbar.css'

function Navbar() {
    const [login] = useContext(loggedInContext) 
    return (
        <div className='myNavbar sticky-top'>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container">
                    <Link className="navbar-brand" to='/'> <h3>𝓢𝓽𝓸𝓻𝔂 𝓢𝓮𝓮𝓭𝓼 </h3> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/user">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create Post</Link>
                            </li>
                        </ul>

                        <div className="logInContainer">
                            <Link to='/login'>sign in</Link>
                            <small className='text-primary'>{login.email}</small>
                        </div>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>

                        </form>
                    </div>
                </div>
            </nav>







        </div>
    )
}

export default Navbar