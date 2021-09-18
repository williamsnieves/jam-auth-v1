import React from "react";
import {Link} from 'gatsby' 

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">Secret stuff</Link>
        <Link to="/dashboard/base" activeClassName="active">Base stuff</Link>
      </nav>
    </div>
  )
}

export default Profile