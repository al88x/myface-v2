import React, {useState} from 'react';
import useForm from "react-hook-form";
import "../style/CreatePost.scss"


export function CreateUser() {

    const {handleSubmit, register, errors} = useForm();
    const validUsername =  !(/^$|\s+/);
    const validUrlPattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    const emailPattern = /[^@]+@[^\.]+\..+/;

    function onSubmit(data) {
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("profileImage", data.profileImage);
        formData.append("bannerImage", data.bannerImage);
        fetch("http://localhost:8080/api/users/create", {
            method: 'POST',
            body: formData
        })
            .then(response => console.log(response))
            // .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create new user</h1>
            <hr/>
            <label>First name:</label>
            <input name="firstName" ref={register({required: true})}/>
            {errors.firstName && <p>This field is required</p>}

            <label>Last name:</label>
            <input name="lastName" ref={register({required: true})}/>
            {errors.lastName && <p>This field is required</p>}

            <label>Username:</label>
            <input name="username" ref={register({required: true, pattern: validUsername})}/>
            {errors.username && <p>No spaces allowed</p>}

            <label>Email:</label>
            <input name="email" ref={register({required: true, pattern: emailPattern})}/>
            {errors.email && <p>Enter a valid email</p>}

            <label>Profile image url:</label>
            <input name="profileImage" ref={register({required: true, pattern: validUrlPattern})}/>
            {errors.profileImage && <p>Enter a valid url</p>}

            <label>Banner image url:</label>
            <input name="bannerImage" ref={register({required: true, pattern: validUrlPattern})}/>
            {errors.bannerImage && <p>Enter a valid url</p>}



            <input className="submitButton" type="submit"/>
        </form>
    );
}