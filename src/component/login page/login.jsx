import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'; 

function Login() {

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate(); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
      navigate('/home');
    }
  }, [formErrors]);

 
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <section className='flex justify-center items-center'>
      <div className='w-full h-screen relative'>
        <img src="/image/Login_bg.jpg" alt="" className='w-full h-screen object-cover' />
      </div>

      <div className='loginContainer absolute p-10 rounded-xl sm:right-0 mx-8'>
        <h1 className="font-Opensans text-xl font-bold">Login to your Account</h1>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Username field */}
            <label htmlFor="userName" className="font-Opensans text-sm text-slate-700 font-medium mb-2">User Name</label>
            <input
              type="text"
              name="username"
              id="userName"
              className="border-b-2 border-b-neutral-100 mb-2"
              value={formValues.username}
              onChange={handleChange}
            />
            {/* Error message for username */}
            {formErrors.username && <p className="text-red-500 text-sm mb-4">{formErrors.username}</p>}

            {/* Password field */}
            <label htmlFor="Password" className="font-Opensans text-sm text-slate-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="Password"
              className="border-b-2 border-b-neutral-100 mb-2"
              value={formValues.password}
              onChange={handleChange}
            />
            {/* Error message for password */}
            {formErrors.password && <p className="text-red-500 text-sm mb-4">{formErrors.password}</p>}

            <div className="justify-end flex text-sm mb-6 text-blue-500">
              Forgot Password?
            </div>

            <button type="submit" className="p-4 bg-amber-500 text-white rounded-xl flex justify-center">
              Login
            </button>
          </form>
        </div>

        <div className="font-Opensans text-sm mt-5 flex flex-col items-center sm:block">
          Don't have an account? <span className="text-blue-400">Create an account</span>
        </div>
      </div>
    </section>
  );
}

export default Login;
