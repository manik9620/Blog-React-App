import React from 'react'
import { useAuth } from '../Context/Auth';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

function HomePage() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Sucessfully");
      };
  return (
    <div>
      <h1>Welcome</h1>
      <Link
        onClick={handleLogout}
        className="dropdown-item"
        to="/login"
    >
    logout
    </Link>
    </div>
  )
}

export default HomePage
