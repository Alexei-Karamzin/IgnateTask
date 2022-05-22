import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import classes from './HW10.module.css'
import store from "./bll/store";

function HW10() {
    let loading = useSelector(state => store.getState().loading.isLoading)
    console.log(loading)
    const dispatch = useDispatch()
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loadingAC())
        /*setTimeout(dispatch(loadingAC()), 1000)*/
        setTimeout(()=>dispatch(loadingAC()), 1000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={classes.ldsEllipsis}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
