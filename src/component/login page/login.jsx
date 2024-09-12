import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='flex justify-center  items-center '>
      <div className='w-full h-screen relative'>
        <img src="/image/Login_bg.jpg" alt=""  className='w-full h-screen object-cover'/>
      </div>
      
      <div className='loginContainer absolute p-10 rounded-xl sm:right-0 mx-8'>
      <h1 className="font-Opensans text-xl font-bold">Login to your Account</h1>

      <div className="mt-10">
              <form action="" className="flex flex-col">
                <label htmlFor="userName" className="font-Opensans text-sm text-slate-700 font-medium mb-2">User Name</label>

                <input type="text" name="" id="userName" className="border-b-2 border-b-neutral-100 mb-5 " />

                <label htmlFor="Password" className="font-Opensans text-sm text-slate-700 font-medium mb-2">Password</label>

                <input type="password" id="Password" className="border-b-2 border-b-neutral-100 mb-5 " />


                
                <div className=" justify-end flex text-sm mb-6 text-blue-500">
                
                Forgot Password?
                </div>

               <Link to='home'  className="p-4 bg-amber-500 text-white rounded-xl flex justify-center"><button type="submit">Login</button></Link> 
              

              </form>
            </div>

            <div className=" font- font-Opensans text-sm mt-5 flex flex-col items-center sm:block">
            Don't you have account? <span className="text-blue-400" >Create a account</span>
            </div>
      </div>
      

    </section>
  )
}

export default Login