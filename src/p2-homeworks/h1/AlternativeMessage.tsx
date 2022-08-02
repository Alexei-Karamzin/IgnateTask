import React from 'react'
import classes from "./AlternativeMessage.module.css";

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function AlternativeMessage(props: MessageType) {
    return (
            <div className={classes.main}>
                <div className={classes.avatarContainer}>
                    <img className={classes.avatar} src={props.avatar} alt="Avatar"/>
                </div>
                <div className={classes.title}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.message}>{props.message}</div>
                </div>
                <div className={classes.timeContainer}>
                    <div className={classes.time}>{props.time}</div>
                </div>

            </div>
    )
}

export default AlternativeMessage
