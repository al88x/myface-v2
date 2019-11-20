import React from "react";
import '../style/Post.scss';
import moment from "moment";

export default function Post(props) {

    const senderName = props.children.sender.firstName + " " + props.children.sender.lastName;


    const postedDateTime = () => {


        let timePosted = moment(props.children.postedAt);
        let timeNow = moment.now();
        if (timePosted.diff(timeNow, "days") < 1) {
            if (timePosted.fromNow() === "a day ago") {
                return "Yesterday";
            }
            return timePosted.fromNow();
        }
        return timePosted.format('ll');
    };


    return (
        <div className="post">
            <img className="post-image" src={props.children.image} alt="post"/>
            <div className="metadata">

                <div className="user">
                    <img className="profile-image" src={props.children.sender.profileImage} alt="profile"/>
                    <div className="name-date">
                        <p className="sender-name">{senderName}</p>
                        <p className="posted-at">{postedDateTime()}</p>
                    </div>
                </div>
                <p className="message">{props.children.message}</p>
            </div>
        </div>);
}