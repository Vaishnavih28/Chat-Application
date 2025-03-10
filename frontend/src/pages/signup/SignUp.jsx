import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"

import useSignup from "../../Hooks/useSignup.js"



const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName : '',
        password : '',
        confirmPassword : '',
        gender : ''
    })

    const {loading, signup} = useSignup();
    



    

    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs,gender})
    }

    const handleSubmit = async  (e)=>{
        e.preventDefault();
        await signup(inputs)
        
        
       
    }
    

    


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
            Sign Up
            <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
                <span className="text-base text-white label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" 
            value={inputs.fullName}
            onChange={(e)=>{
                setInputs({...inputs, fullName : e.target.value})
            }}
            ></input>
        </div>
        <div>
        <label className="label p-2">
                <span className="text-base text-white label-text">Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10"
            value={inputs.userName}
            onChange={(e)=>{
                setInputs({...inputs, userName : e.target.value})
            }}
            ></input>
        </div>
        <div>
        <label className="label p-2">
                <span className="text-base text-white label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
            value={inputs.password}
            onChange={(e)=>{
                setInputs({...inputs, password:e.target.value})
            }}
            ></input>
        </div>
        <div>
        <label className="label p-2">
                <span className="text-base text-white label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e)=>{
                setInputs({...inputs, confirmPassword:e.target.value})
            }}

            ></input>
        </div>
        {/*Gender*/}
        <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />


        <Link to='/login' className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account? 
        </Link>
        <div >
            <button  className="btn btn-block btn-sm mt-2  text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 "
            disabled = {loading}>{ loading ?  <span className="loading loading-spinner"></span> : "Sign Up"}</button> 
        </div>

            
        </form>







        </div>

    </div>
  )
}

export default SignUp