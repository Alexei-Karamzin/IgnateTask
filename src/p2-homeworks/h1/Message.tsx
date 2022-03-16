import React from 'react'
import classes from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={classes.allTitle}>
            <img className={classes.avatar} src={props.avatar} alt="Avatar"/>
            <div className={classes.title}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>

    )
}

export default Message
