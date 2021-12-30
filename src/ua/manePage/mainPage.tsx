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
import cross from './../../assets/cross.png'



const MainPage = () => {
    let speed = 4000
    console.log('MainPage');
    let [startTime, setStartTime] = useState(30);
    let [sovaFront, setSovaFront] = useState(false);
    let [foot, setFoot] = useState<number>(-1);
    let [progressBar, setProgressBar] = useState<number>(0);
    let [usersLegs, setUsersLegs] = useState(-1);
    const progressStyle = {
        height: progressBar * 10+'px',
        background: progressBar<25 ? 'yellow' : 'red',
    };
    useEffect(() => {
        setTimeout(()=>{
            timer()
            changeFoot()
            changeSovaFront()
            // changeUsersLegs()
        }, 3000)
    }, [])

    const timer = () => {
        if (startTime > 0) {
            setFoot(-1)
            setUsersLegs(-1)
            setStartTime(startTime -= 1)
            setTimeout(timer, speed);
        }
    };
    const changeFoot = () => {
        if(startTime > 0){
            let res = Math.floor(Math.random()*2)
            setFoot(res)
            setUsersLegs(res)
            if(sovaFront && foot===usersLegs){setProgressBar(progressBar += 1)}
            else if (!sovaFront && usersLegs ===-1){setProgressBar(progressBar += 1)}
            else if (!sovaFront && usersLegs !==-1){setStartTime(0)}
            setTimeout(changeFoot,3500)
        }
    }
    const changeSovaFront = ()=>{
        if(startTime > 0){
            let res = Math.floor(Math.random()*2)
            setSovaFront(!!res)
            setTimeout(changeSovaFront,9000)
        }
    }
    // const changeUsersLegs = ()=>{
    //     if(startTime > 0){
    //         // setUsersLegs(res)
    //         // if(foot===res){
    //             setProgressBar(progressBar+1)
    //         setTimeout(changeUsersLegs,6000)
    //     }
    // }

    return (
        <div className={cl.bg}>
            <div className={cl.header}>
                <div className={cl.startTime}>0:{startTime}</div>
                <div className={cl.text}>goal</div>
            </div>
            <div className={cl.offer}>
                <div className={cl.sovaWrap}>
                    {sovaFront ?
                        <img src={sova} alt="sova" className={cl.sova}/> :
                        <img src={sovaBack} alt="sovaBack" className={cl.sova}/>
                    }
                    {startTime===30? <h2>get ready!</h2>: ''}
                    {startTime===0? <h2>finish!</h2>: ''}
                </div>
                <div className={cl.progressBarWrap}>
                    <div style={progressStyle} className={cl.innerProgress}>
                        <span style={{fontSize:'27px',marginTop: '-14px',marginLeft: '-10px',display: 'block'}}>&#128099;</span>
                    </div>
                </div>
            </div>
            <div className={cl.footer}>
                <img src={left} alt="left" className={cl.arrow} style={{borderColor: usersLegs===0 ? '#000': 'transparent' }}/>
                {foot===0 ?
                    <img src={footLProgress} alt="footLProgress" className={cl.foot}/>:
                    <img src={footLeft} alt="footLeft" className={cl.foot}/>
                    }
                {startTime===0 ?  <img src={cross} alt="cross" className={cl.finish}/> : ''}
                {foot===1 ? <img src={footRProgress} alt="footRProgress" className={cl.foot}/>:
                    <img src={footRight} alt="footRight" className={cl.foot}/>}
                <img src={right} alt="right" className={cl.arrow } style={{borderColor: usersLegs===1 ? '#000': 'transparent' }}/>
            </div>
        </div>
    );
};

export default MainPage;
