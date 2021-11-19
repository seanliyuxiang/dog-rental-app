import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Login({setCurrentUser}) {
    const history = useHistory();

    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange (event) {
        setLoginFormData({
            ...loginFormData, [event.target.name]: event.target.value
        })
    }

    // sends to sessionscontroller #create method
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
        .then(response => {
            if (response.ok) {
                response.json().then(user => {
                    setCurrentUser(user)
                    console.log('after successful post login', user)
                    // redirect to home page
                    history.push('/dogs_for_rent')
                })
            }
        });
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit} className='login-form'>
                <h3>Woof! Welcome Friend!</h3>
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
