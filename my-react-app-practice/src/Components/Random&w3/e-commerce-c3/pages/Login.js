import React from 'react'

export default function Login() {


    const submit = (e) => {
        e.preventDefault();
        console.log("form")
    }


    return (
        <div>
                <form onSubmit={submit}>
                    <label>Email:
                        <input type="email" name='email' autoComplete='on' placeholder='email...' required />
                    </label>
                    <br/><br/>
                    <label>Password:
                        <input type='password' name='password' placeholder='password...' autoComplete='on' required />
                    </label>
                    <br/><br/>
                    <input type='submit' />
                </form>
        </div>
    )
}
