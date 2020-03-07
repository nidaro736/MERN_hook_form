import React, { useState } from 'react';

const Form = props => 
{
    const [formState, setFormState] = useState
    ({
        fName: "",
        lName: "",
        email: "",
        password: "",
        corfirmPassword: ""
    });

    const onChangeHandler = event =>
    {
        setFormState
        ({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitHandler = event =>
    {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type= "text" name= "fName" onChange= {onChangeHandler}/>
                <br/>
                <label>Last Name</label>
                <input type=  "text" name= "lName" onChange= {onChangeHandler}/>
                <br/>
                <label>Email</label>
                <input type= "email" name= "email" onChange= {onChangeHandler}/>
                <br/>
                <label>Password</label>
                <input type= "password" name= "password" onChange= {onChangeHandler}/>
                <br/>
                <label>Confirm Password</label>
                <input type= "password" name= "confirmPassword" onChange= {onChangeHandler}/>
                <br/>
                <input type= "submit"/>
            </form>

            <h1>Your Form Data</h1>
            <p>First Name: {formState.fName}</p>
            <p>Last Name: {formState.lName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    );
}

export default Form;