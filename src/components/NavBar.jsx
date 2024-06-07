import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Add Student</a>
        <a className="nav-link" href="/search">Search Student</a>
        <a className="nav-link" href="/delete">Delete Student</a>
        <a className="nav-link" href="/viewall">View All Students</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar