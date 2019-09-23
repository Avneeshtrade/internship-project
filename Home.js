import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function Home(){

    return (
      <Fragment>
      <nav className="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link disabled" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/user">user</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/login">login</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/register">register</Link>
    </li>

  </ul>

</nav>
</Fragment>
    );
}
export default Home;