import React, {useEffect, useState} from 'react'
import cl from './mainPage.module.css'
import left from './../../assets/Left.png'
import footLeft from './../../assets/foot-left.png'
import footLProgress from './../../assets/footL_progrees.png'
import right from './../../assets/Right.png'
import sova from './../../assets/sova.png'
import sovaBack from './../../assets/sova-back.png'
import footRight from './../../assets/foot-right.png'
import footRProgress from './../../assets/footR_progress.png'

type propsType={
    progress: boolean
    time: number
}
const ProgressBar = ({progress,time}:propsType) => {

    let [progressBar, setProgressBar] = useState<number>(0);
    console.log('ProgressBar',progressBar);
    const progressStyle = {
        height: progressBar * 10 + 'px',
        background: "yellow",
    };
    useEffect(() => {
        if(time<30 && progress){
            setProgressBar(progressBar + 1)
        }
    }, [])
    const progressBarHandler = (progress: boolean, time: number) => {
        // if(time<30 && progress){
        //
        // }
    }

    return (
        <div className={cl.progressBarWrap}>
            <div style={progressStyle} className={cl.innerProgress}>&#128099;</div>
        </div>
    );
};

export default ProgressBar;
