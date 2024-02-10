import {useState} from 'react'
import styles from "./Login.module.css";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import { useAuth } from '../Context/Auth';

function Login() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const {auth,setAuth} = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const handleSubmit =async (e) =>{
    
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { username, password });
      console.log(res);
      if (res) {
        toast.success(res.data && res.data.message);
        localStorage.setItem("auth", JSON.stringify(res.data));
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        navigate(location.storage || '/home');
      } else {
        toast.error(res.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message); // Access the error message directly
    }
    
  }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}
className={styles.login}>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>{setusername(e.target.value)}} required/>

        <input type='password' placeholder='password' value={password}
        onChange={(e)=>{setpassword(e.target.value)}} required/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
