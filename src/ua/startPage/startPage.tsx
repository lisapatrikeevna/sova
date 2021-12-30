import React, {useState} from 'react'
import cl from './startPage.module.css'
import sova from './../../assets/sova.png'
import {Redirect} from "react-router-dom"
import {PATH} from "../../App"


const StartPage = () => {
        let [counter, setCounter] = useState(3)
        const timer = setInterval(() => {
            if (counter >= 1) {
                setCounter(counter - 1)
                if (counter === 1) {
                    clearInterval(timer)
                }
            }
        }, 3000)
        if (counter === 0) {
            return <Redirect to={PATH.MAIN}/>
        }

        return (
            <div className={cl.bg}>
                <img src={sova} alt="sova" className={cl.sova}/>
                <div className={cl.counter}>
                    {counter}
                </div>
                <p>some text</p>
            </div>
        )
    }
;

export default StartPage;
