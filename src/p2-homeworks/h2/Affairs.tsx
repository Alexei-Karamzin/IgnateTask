import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (el:FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    console.log(props)

    const setAll = (el: FilterType) => {props.setFilter(el)} // need to fix
    const setHigh = (el: FilterType) => {props.setFilter(el)}
    const setMiddle = (el: FilterType) => {props.setFilter(el)}
    const setLow = (el: FilterType) => {props.setFilter(el)}

    return (
        <div>

            {props.data.map((a: AffairType) => {
            return (
                <Affair // should work
                    key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                    affair={a}
                    deleteAffairCallback={props.deleteAffairCallback}
                />
            )})}

            <button onClick={()=>setAll('all')}>All</button>
            <button onClick={()=>setHigh('high')}>High</button>
            <button onClick={()=>setMiddle('middle')}>Middle</button>
            <button onClick={()=>setLow('low')}>Low</button>
        </div>
    )
}

export default Affairs
