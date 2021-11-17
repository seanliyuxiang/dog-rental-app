import React, {useState} from 'react'

function Signup() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        location: "",
        phone_number: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    function handleChange (event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log('inside handlesubmit, prior to actually fetch posting', formData);

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log('data response after fetch post!', data));

        // we should add action to empty the form 
    }

    return (
        <div>
            <form className="signupForm" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="first_name" onChange={handleChange} value={formData.first_name} /> <br/>

                <label>Last Name</label>
                <input type="text" name="last_name" onChange={handleChange} value={formData.last_name} /> <br/>

                <label>Location (City, State, Zip)</label>
                <input type="text" name="location" onChange={handleChange} value={formData.location} /> <br/>

                <label>Phone Number</label>
                <input type="text" name="phone_number" onChange={handleChange} value={formData.phone_number} /> <br/>

                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} value={formData.username} /> <br/>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} value={formData.password} /> <br/>

                <label>Please type your password again</label>
                <input type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} /> <br/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Signup;
