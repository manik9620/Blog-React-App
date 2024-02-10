import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

function Navbar() {
  const {auth,setAuth}=useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    // toast.success("Logout Sucessfully");
  };
  return (
    <div className={styles.main}>
     <header>   
     <Link to="/"><p className={styles.logo}>MyBlog</p> </Link>
     <nav className={styles.loginregister}>
     {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink  to="/register">
                    register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/login">
                    login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ">
                      <NavLink
                        onClick={handleLogout}
                        className="dropdown-item"
                        to="/login"
                      >
                        logout
                      </NavLink>
                </li>
              </>
            )}
     </nav>
     </header>
    </div>
  )
}

export default Navbar
