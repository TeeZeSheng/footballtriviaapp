import React, { useState, useEffect} from 'react'
import Game from './game'

function Timer(){
    const [sec, setSec] = useState(60);

    useEffect(() => {
       const interval = setInterval(() => {
            updateTimer()
        }, 1000);
        return () => clearInterval(interval)
        }
    , [sec]);
     

    function updateTimer(){
        setSec(sec - 1);


    }
    if(sec !== 0 && sec > 0){
        return(
            <div>
                <Game status={1}/>
                <h1>{sec}</h1>
            </div>
    
        )

    }else if (sec <= 0){
        return(
                <Game status={0} />
        )

    }   

    }
        

export default Timer;