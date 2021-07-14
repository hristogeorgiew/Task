import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from '../auth/LogOutBtn';

import { Nav } from 'react-bootstrap';

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
     

      <Nav>
        <Nav.Item>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>

        {loggedIn === false && (
          <>
            <Nav.Item>
            <Nav.Link><Link to="/register">Register</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav.Item>
          </>
        )}
        {loggedIn === true && (
          <>
            <Nav.Item>
            <Nav.Link><Link to="/customer">Customer</Link></Nav.Link>
            </Nav.Item>
            <LogOutBtn />
          </>
        )}
      </Nav>

    </div>
  );
}

export default Navbar;