import React, { useState, useEffect} from 'react'
import Stadium from './stadium'

function StadiumTimer(){
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
                <Stadium status={1}/>
                <h1>{sec}</h1>
            </div>
    
        )

    }else if (sec <= 0){
        return(
                <Stadium status={0} />
        )

    }   

    }
        

export default StadiumTimer;