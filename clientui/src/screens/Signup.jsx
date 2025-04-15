import {useState} from "react";
import axios from "axios";

import React from 'react'
import apis from "./Config";
import { Typewriter } from 'react-simple-typewriter'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { successToast, errorToast } from "../functions/messages.js";
import Loader from "../components/loader.jsx";



const Signup = () => {

    const [user, setUser] = useState({
        email: "", password: ""
})

const [loader, setloader] = useState(false);

const preSignupHandler = async (e) => {
    e.preventDefault();
    try {
      setloader(true);
        const {data} = await axios.post(`${apis.auth}/pre-signup`, user);
        const {ok, error, message} = data
        if (ok) {
          successToast(message)
    } else {
      errorToast(error)
    }
} catch (err) {
    console.log(err.message)  
}
finally {
  setloader(false)
}
}

const changeUser = (e) => {
    const {name, value} = e.target 
    setUser({...user,  [name]: value });
    console.log(user.email + " - " + user.password)
}




  return (
    <div className="flex flex-col relative text-center justify-center bg-gray-900 h-screen">
      <form className="hover:scale-110 transition-transform flex-col mx-auto text-white text-center justify-center w-80 p-4 rounded-lg bg-gray-800" onSubmit={preSignupHandler}>
     { loader ? <Loader /> : (
       <h1 className="text-2xl font-bold text-white mb-1">
       <Typewriter 
       loop={false}
       words={['Nexskills Pre-Signup']}
       typeSpeed={100}
       deleteSpeed={50} 
       cursor={true}
       cursorStyle='|'
       >
      
       </Typewriter>
       </h1>
     )}
      <p className="text-sm text-gray-100 mb-2"> Please provide email and password we will send verification link to create account in nexskills store.</p>
        <br />
        <div className="bg-gray-700 rounded-md text-white flex item-center p-3">
          <MdOutlineAlternateEmail className="w-5 h-5 mt-1"/>

        <input type="text" 
               name="email" 
               className="w-full bg-transparent outline-none"
               value= {user.email}
               onChange={changeUser}
               placeholder="Enter Email...."  />
        </div>
        <br />
        <div  className="bg-gray-700 rounded-md text-white flex item-center p-3">
          <RiLockPasswordFill className="w-5 h-5 mt-1"/>

               <input type="txt" 
               name="password" 
               className="w-full bg-transparent outline-none"
               value= {user.password}
               onChange={changeUser}
               placeholder="Enter Passord...."  />
                </div>
              <br />
               <button className="bg-red-500 w-full hover:bg-red-600 p-2 rounded-md mb-2">
                { loader ? "Loading..." : "Signup" }
               </button>
               <button className="bg-black w-full flex items-center hover:bg-gray-800 p-2 rounded-md mb-2">
                <IoLogIn className="w-5 h-5 mt-1"/>
                Already have a account? Login</button>

      </form>
    </div>
  )
}

export default Signup
