import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Student App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Add Student</Link>
        <Link className="nav-link" to="/search">Search Student</Link>
        <Link className="nav-link" to="/delete">Delete Student</Link>
        <Link className="nav-link" to="/viewall">View All Students</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar