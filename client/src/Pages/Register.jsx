import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [name,setname]=useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit= async(e)=> {
    e.preventDefault();
    const requestData = {
      name: name,
      username: username,
      password: password,
    };
    console.log('Request Data:', requestData);
    try {
      const res =await axios.post("/api/v1/auth/register", requestData)
    if(res && res.data && res.data.success){
      toast.success(res.data && res.data.message);
      navigate("/login");
    }

    else{
      toast.error(res.data.message);
    }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
}


  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="text" 
          name="name" 
          placeholder="Enter your Name" 
          value={name} 
          onChange={(e)=>setname(e.target.value) } required/>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={e => setUsername(e.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={e => setPassword(e.target.value)}/>
      <button>Register</button>
    </form>
  );
}