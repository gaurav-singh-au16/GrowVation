import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const axios = require('axios')

const clickHandler = (userName) => {
  const data = {
    username : userName
  }
  console.log(data)
  if (userName === ""){
    alert('Enter the Username')
  }
  else{
    axios
    .post('http://localhost:5000/login', data)
    .then(() => console.log('data sent to BE'))
    .catch(err => {
      console.error(err);
    });
  }

}

function Login() {
    const [userName, setUserName] = useState('')    

    

    return (
        <>
        <Navbar userName = {userName}/>
        <div className='container border border-dark rounded mt-5 w-50'>
            <h1 className='display-5 text-center mt-3'>Sign In</h1>
            <input className='form-control mt-3' placeholder='User Name'
            value = {userName}
            onInput = {(e)=>setUserName(e.target.value)}
            />
            <div className='text-center'><Link to={'/gallery'} className='btn btn-primary btn-lg mt-3 my-3'
            onClick={()=>clickHandler(userName)}
            >Sign In</Link></div>
        </div>
        <Footer />
        </>
    )
}

export default Login
