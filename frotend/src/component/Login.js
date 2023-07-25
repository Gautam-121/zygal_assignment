import { useState } from "react"
import {validation} from "../utils/validation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Login = ()=>{

    const [user , setUser] = useState({
        email : "",
        password  : ""
    })

    const [error , setError] = useState({})
    const navigate =  useNavigate()


    const submitHandler = (e)=>{
        e.preventDefault()
        setError(validation(user))
    }

    async function getResData(){

        const data = await fetch(`http://localhost:4000/api/v1/login`, {
        method:  "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    
    const response = await data.json()

        if(response.success){

            toast.success("Login Successully")
            setTimeout(()=>{
                navigate("/info")
                },1500)
            return
        }

        setError({message : data.message})
    }

    if(error.email === "" && error.password === ""){
        getResData()
    }

    return(
        <div className="flex justify-center" onSubmit={submitHandler}>
            <div className="shadow-lg mt-64 p-10 rounded-3xl">
                <form action="">
                    <div className=" items-center">
                        <label htmlFor="" className="font-semibold">Email :</label>
                        <input 
                        type="email" 
                        placeholder="Enter Email"
                        className=" border border-black rounded-md pl-3 w-64 ml-8 outline-none shadow-lg"
                        name="email"
                        onChange={(e)=>setUser({...user , [e.target.name] : e.target.value})}
                        />
                        <br />
                    {error.email && <p className="text-red-400 text-center">*{error.email}</p>}
                    </div>
                    <div className="mt-5 items-center">
                        <label htmlFor="" className="font-semibold">Password : </label>
                        <input 
                        type="password" 
                        placeholder="Enter Password"
                        name="password"
                        className=" border border-black rounded-md pl-3 w-64 ml-2 outline-none shadow-lg"
                        onChange={(e)=>setUser({...user , [e.target.name] : e.target.value})}
                        />
                        <br />
                        {error.password && <p className="text-red-400 text-center ml-14">*{error.password}</p>}
                    </div>
                    <button className="mt-5 border p-2 rounded-lg bg-blue-300 text-white hover:bg-green-300" type="submit">Login</button>
                    {error.message && <p className="text-red-800 text-center">*{error.message}</p>}
                </form>
                <ToastContainer
                    hideProgressBar
                />
            </div>
        </div>
    )
}


export default Login