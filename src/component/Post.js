import React, {useState, useRef} from "react";
import '../style/Post.scss';
import moment from "moment";
import {Link} from 'react-router-dom';

export default function Post(props) {
    const messageBox = useRef(null);
    const contentBox = useRef(null);
    const senderName = props.children.sender.firstName + " " + props.children.sender.lastName;
    const [contentHeight, setContentHeight] = useState({height: "574px"});

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

    function changeContentHeight() {
        const messageHeight = messageBox.current.clientHeight;
        let currentContentHeight = contentBox.current.clientHeight;

        if (messageHeight > 100) {
            currentContentHeight += messageHeight - 85;
        }
        setContentHeight({height: `${currentContentHeight-10}px`});
    }

    function defaultContentHeight(){
        setContentHeight({height: "574px"});
    }


    return (
        <div className="post" onMouseEnter={changeContentHeight} onMouseLeave={defaultContentHeight}>
            <div className="content" ref={contentBox} style={contentHeight} >
                <img className="post-image" src={props.children.image} alt="post"/>
                <div className="metadata">

                    <div className="user">
                        <img className="profile-image" src={props.children.sender.profileImage} alt="profile"/>
                        <div className="name-date">
                            <Link to={`/users/${props.children.sender.id}`} className="sender-name">{senderName}</Link>
                            <p className="posted-at">{postedDateTime()}</p>
                        </div>
                    </div>
                    <p className="message" ref={messageBox}>{props.children.message}</p>
                </div>
            </div>
        </div>);
}