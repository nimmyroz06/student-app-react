import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
        <NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 colsm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <center><h1><b>Search Student</b></h1></center><br></br>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Student Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-info">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default SearchStudent