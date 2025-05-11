import { Link } from "react-router-dom";

import '/src/navbar.css';

function Navbar() {
  return (

    <nav className="navbar">
    <div className="navbar-left">A?</div>
    <div className="navbar-right">

     <Link className="nav-link" to="/courses">Kurssit</Link>
     <Link className="nav-link" to="/programs">Ohjelmat</Link>

    </div>
    </nav>
  );
}
export default Navbar;