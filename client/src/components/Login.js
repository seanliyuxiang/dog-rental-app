import React, {useState, useEffect} from 'react';

function Login() {
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange (event) {
        setLoginFormData({
            ...loginFormData, [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log('inside handlesubmit function, before fetch post', loginFormData)

        fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        })
        .then(response => response.json())
        .then(data => console.log('response from fetch post', data))
        // we should add action to empty the form 


    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit} className='loginForm'>
                <label>Username</label>
                <input type='text' name="username" value={loginFormData.username} onChange={handleChange} /> <br />
                
                <label>Password</label>
                <input type='password' name='password' value={loginFormData.password} onChange={handleChange}/> <br />

                <input type='submit' />
            </form>
        </div>
    );
}

export default Login;
