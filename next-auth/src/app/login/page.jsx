import LoginButton from '@/_Components/LoginButton/LoginButton'
import React from 'react'

export default function page() {

    return (
        <div className='px-4 py-5'>
            <h1 className='text-center underline font-bold text-2xl'>LOGIN FORM</h1>
            <form>
                <div className='flex flex-col gap-4 mt-4'>
                    <input className='border px-3 py-1 rounded ' type="email" placeholder="email" />
                    <input className='border px-3 py-1 rounded ' type="password" placeholder="password" />
                    <div className='flex justify-center'>
                        <LoginButton />
                    </div>
                </div>
            </form>
        </div>
    )
}