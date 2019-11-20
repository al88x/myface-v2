import React from "react";

export default function User(props){
    const displayName = props.children.firstName + " " + props.children.lastName;

    return (
        <div>
        <img src={props.children.bannerImage} alt="banner"/>
        <img src={props.children.profileImage} alt="profile"/>
        <p>{displayName}</p>
            <p>{props.children.username}</p>
            <p>{props.children.email}</p>
        </div>);
}