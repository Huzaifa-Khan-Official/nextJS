"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const router = useRouter()
    const [data, setData] = useState({});

    const hangleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })

    }
    const handleClick = async (e) => {
        try {
            e.preventDefault()
            
            const res = await signIn('credentials', {
                username: data.username,
                password: data.password,
                redirect: false,
            })

            if (res.status === 200) {
                alert("Login successful")

                // router.replace("/")
                // return
            }

            alert("Invalid credentials")

        } catch (error) {
            console.error("error ==>", error)
        }

    }

    return (
        <div className='px-4 py-5'>
            <h1 className='text-center underline font-bold text-2xl'>LOGIN FORM</h1>
            <form onSubmit={handleClick}>
                <div className='flex flex-col gap-4 mt-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="username"
                        >Name:</label>
                        <input className='border px-3 py-1 rounded ' type="email" placeholder="email" onChange={hangleChange} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="password"
                        >Password:</label>
                        <input className='border px-3 py-1 rounded ' type="password" placeholder="password" onChange={hangleChange} />
                    </div>
                    <div className='flex justify-center'>
                        <button className='rounded-full bg-cyan-400 text-white py-2 px-5 w-fit' onClick={handleClick}>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}