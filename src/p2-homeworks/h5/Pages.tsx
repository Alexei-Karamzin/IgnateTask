import React from 'react'
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/Junior+";
import Junior from './pages/Junior';
import Error404 from "./pages/Error404";
import {Navigate, Route, Routes } from 'react-router-dom';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+'
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}


            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}

            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={'/'} element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>


                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={'/'} element={() => <Navigate to={PATH.JUNIOR}/>}/>



                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'/'} element={() => <Navigate to={PATH.JUNIOR_PLUS}/>}/>
                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>


        </div>
    )
}

export default Pages
