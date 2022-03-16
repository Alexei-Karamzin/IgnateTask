import React, {ChangeEvent, ChangeEventHandler, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (a:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: (e:string)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass// need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={(event)=>setNameCallback(event)}
                   className={inputClass}
            />
            <button disabled={name.length===0} onClick={()=>addUser(name)}>add</button>
            <span> {totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
