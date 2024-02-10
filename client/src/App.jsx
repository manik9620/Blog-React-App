import './App.css'
import LandingPage from './Pages/LandingPage';
import {Route,createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom";
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';

function App() {

  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<HomePage/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
