import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    /*    const stringTime = date.getHours() // fix with date
        const stringM = date.getMinutes()
        const stringS = date.getSeconds()*/
    const stringT = date?.toLocaleTimeString() || <br/>

    const stringD = date?.toLocaleDateString() || <br/>
    /*    const stringDate = date.getFullYear()
        const stringDateDay = date.getDay()
        const stringDateMonth = date.getMonth()*/

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringT}
                {/*{stringTime}:{stringM}:{stringS}*/}
            </div>

            {show ? (
                <div>
                    {stringD}
                    {/*{stringDateDay}.{stringDateMonth}.{stringDate}*/}
                </div>
            ) : (
                <br/>
                )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
