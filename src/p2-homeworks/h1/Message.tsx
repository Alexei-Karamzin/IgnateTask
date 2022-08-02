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
        <div className={classes.main}>
            <div className={classes.avatarContainer}>
                <img className={classes.avatar} src={props.avatar} alt="Avatar"/>
            </div>
            <div className={classes.imessage}>
                {/*<div className={classes.name}>{props.name}</div>*/}
                <p className={classes.fromMe}>{props.message}
                    <div className={classes.time}>{props.time}</div>
                </p>
            </div>
        </div>

    )
}

export default Message
