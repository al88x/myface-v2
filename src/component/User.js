import React,{useState} from "react";
import '../style/User.scss';
import defaultBannerImage from "./images/default-banner-image.jpg"
import defaultProfileImage from "./images/default-profile-image.jpg"

export default function User(props) {
    const displayName = props.children.firstName + " " + props.children.lastName;
    const[profileImageUrl, setProfileImageUrl] = useState(props.children.profileImage);
    const[bannerImageUrl, setBannerImageUrl] = useState(props.children.bannerImage);


    return (
        <div className="user-container">

                <img className="banner-image" src={
                    bannerImageUrl}
                     onError={() => setBannerImageUrl(defaultBannerImage)}
                     alt="banner"/>



                <img className="user-profile-image"
                     src={profileImageUrl}
                     onError={() => setProfileImageUrl(defaultProfileImage)}
                     alt="profile"/>

            <div className="user-info">
                <p className="user-display-name">{displayName}</p>
                <p className="user-details">{props.children.username}</p>
                <p className="user-details">{props.children.email}</p>
            </div>
        </div>);
}