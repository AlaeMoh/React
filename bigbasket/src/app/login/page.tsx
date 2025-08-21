"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Page() {
    const router = useRouter()
     const [message, setMessage] = useState("")
     const [formData, setFormData]= useState({ 
        email: "",
        password: ""
     })
     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
     }
     const handleSubmit= async (e:React.FormEvent)=>{
        e.preventDefault();
         console.log("📌 Form submitted with:", formData);

        try{
            const res = await fetch("http://localhost:3000/api/users");
            const users= await res.json();
            console.log("📌 Parsed JSON:", users);
            const user = users.data.find((u:any)=>u.email === formData.email && u.password === formData.password
           
        ) 
        
            if(user){
            setMessage(`✅ Welcome back, ${user.name}!`);
            setTimeout(()=>{
                router.push("/")
            })
            }else {
        setMessage("❌ Invalid email or password");
      }
        }catch(error){
         setMessage("❌ Error connecting to server");

        }
     }
  return (
     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow-lg rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-success">Login</h2>

        {message && <p className="text-center text-danger">{message}</p>}

        <form onSubmit={handleSubmit}>
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
            🔑 Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <a href="/signup" className="text-decoration-none text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
