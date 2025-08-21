"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


export default function Page() {
 const router = useRouter()   
 const [message, setMessage] = useState("")
 const [formData, setFormData]= useState({
    name: "",
    email: "",
    password: ""
 })
 const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData, [e.target.name]:e.target.value})

 }
 const handleSubmit= async (e: React.FormEvent)=>{
    e.preventDefault();
    
    try{
        const res = await fetch("/api/users",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });
        const result = await res.json()
        if(result.success){
            setMessage("✅ Account created successfully!");
            setFormData({ name: "", email: "", password: "" });
            setTimeout(()=>{
                router.push("/")
            },3000)
        }else{
            setMessage("❌ Failed to register user")
        }
       
    } catch(error){
       setMessage("❌ Error connecting to server");

    }

    if(!formData.name || !formData.email || !formData.password){
        setMessage("⚠️ Please fill in all fields");
        return
    }
       console.log("User signed up:", formData);
    
    
 }

  return (
      <div className="min-h-screen d-flex align-items-center justify-content-center bg-light pb-5 pt-5">
      <div className="card p-4 shadow-lg rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-success ">Sign Up</h2>

        {message && <p className="text-center text-danger">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control rounded-pill"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control rounded-pill"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill mt-3"
          >
            🚀 Sign Up
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none text-success">
            Log In
          </a>
        </p>
      </div>
    </div>
  )
}
