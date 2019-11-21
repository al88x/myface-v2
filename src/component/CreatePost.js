import React, {useState} from 'react';
import useForm from "react-hook-form";
import "../style/CreatePost.scss"


export function CreatePost() {

    const {handleSubmit, register, errors} = useForm();
    const validUrlPattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

    function onSubmit(data) {
        const formData = new FormData();
        formData.append("senderId", data.senderId);
        formData.append("receiverId", data.receiverId);
        formData.append("image", data.image);
        formData.append("message", data.message);
        fetch("http://localhost:8080/api/posts/create", {
            method: 'POST',
            body: formData
        })
            .then(response => console.log(response))
            // .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create new post</h1>
            <hr/>
            <label>Sender:</label>
            <input name="senderId" ref={register({required: true})}/>
            {errors.senderId && <p>This field is required</p>}

            <label>Receiver:</label>
            <input name="receiverId" ref={register({required: true})}/>
            {errors.receiverId && <p>This field is required</p>}

            <label>Image Url:</label>
            <input name="image" ref={register({required: true, pattern: validUrlPattern})}/>
            {errors.image && <p>Please enter a valid url</p>}

            <label>Message:</label>
            <textarea name="message" ref={register({required: true})}/>
            {errors.message && <p>This field is required</p>}

            <input className="submitButton" type="submit"/>
        </form>
    );
}