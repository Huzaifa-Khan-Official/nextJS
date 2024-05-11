import React from 'react'

export default function page() {

    return (
        <div>
            <h1>LOGIN FORM</h1>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}