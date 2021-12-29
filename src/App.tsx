import React from 'react'
import './App.css'
import Offer from './ua/offer/offer'
import StartPage from "./ua/startPage/startPage"
import MainPage from "./ua/manePage/mainPage"
import {Route} from "react-router-dom"


export const PATH = {
    OFFER: "/Offer",
    START: '/startPage',
    MANE: '/mainPage'
}

function App() {
    return (
        <div className="App">
            <Route path={'/'} render={() => <Offer/>}/>
            <Route path={PATH.START} render={() => <StartPage/>}/>
            <Route path={PATH.MANE} render={() => <MainPage/>}/>
        </div>
    );
}

export default App;
