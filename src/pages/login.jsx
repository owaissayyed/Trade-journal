import React, { useState } from "react";

// @components
import {
  Card,
  Input,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from "../utils/utils";

export default function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    console.log('login info ->', loginInfo);

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if ( !email || !password) {
            return handleError("Name, email, and password are required");
        }
        try{
            const url = 'http://localhost:8080/auth/login';
            const response = await fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/Json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await  response.json();
            const {success, message, jwtToken, name,  error} = result;
            if(success){
              handleSuccess(message);
              localStorage.setItem('token',jwtToken);
              localStorage.setItem('loggedInUser',name);
              setTimeout(() => {
                navigate('/home')
              }, 1000)
            } else if(error){
              const details = error?.details[0].message;
              handleError(details)
            } else if(!success){
              handleError(message)
            }
            console.log(result)
        }
        catch(err){
            handleChange(err)
        }
    };
    
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <ToastContainer />
      <Card
        shadow={false}
        className="px-8 py-8  border-2 border-gray-200 w-[90vw] sm:w-[75vw] md:w-[55vw] lg:w-[30vw] shadow-lg rounded-xl"
      >
        <CardHeader shadow={false} floated={false} className="flex justify-center items-center flex-col gap-3 text-center">
          <Typography variant="h1" color="blue-gray" className="!text-3xl lg:text-4xl ">
            Login
          </Typography>
        </CardHeader>
        <CardBody>
          <form action="#" className="flex flex-col gap-4 md:mt-12" onSubmit={handleLogin}>


            {/* Email Field */}
            <div>
              <label htmlFor="email">
                <Typography variant="small" color="blue-gray" className="block font-medium mb-2">
                  Email
                </Typography>
              </label>
              <div>
                <Input
                onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  className="!border h-[35px] w-[100%] rounded-lg !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                  value={loginInfo.email}
               />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">
                <Typography variant="small" color="blue-gray" className="block font-medium mb-2">
                  Password
                </Typography>
              </label>
              <div>
                <Input
                onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                  className="!border h-[35px] w-[100%] rounded-lg !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                  value={loginInfo.password}
                />
              </div>
            </div>

            {/* Signup Button */}
            <button type="submit" className="mt-5 bg-black text-white h-[40px] rounded-lg text-[15px]">Login</button>

            {/* Login Link */}
            <div className="flex justify-center text-sm mt-4">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="font-bold text-blue-900 opacity-90">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
