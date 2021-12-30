import React from 'react'
import './App.css'
import Offer from './ua/offer/offer'
import StartPage from "./ua/startPage/startPage"
import MainPage from "./ua/manePage/mainPage"
import {Redirect, Route, Switch} from "react-router-dom"


export const PATH = {
    OFFER: '/offer',
    START: '/startPage',
    MAIN: '/mainPage'
}

function App() {
    return (
        <div className="App" style={{width: '510px',height: '100vh'}}>
            {/*<Offer/>*/}
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.OFFER}/>}/>
                <Route path={PATH.OFFER} render={() => <Offer/>}/>
                <Route path={PATH.START} render={() => <StartPage/>}/>
                <Route path={PATH.MAIN} render={() => <MainPage/>}/>
            </Switch>
        </div>
    );
}

export default App;
