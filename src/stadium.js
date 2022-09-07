import {useState, useEffect} from "react"
import axios from "axios"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import ReplayIcon from '@mui/icons-material/Replay';

const custTheme = createTheme({
    palette: {
        primary:{
            main: '#11cb5f'
        }
    }
})

function Stadium(){
    const [stadium, setStadium] = useState('')
    const [club, setClub] = useState('')
    const [userStadium, setUserStadium] = useState('')
    const [score, setScore] = useState(0)
    const [sec, setSec] = useState(60);

    useEffect(() => {
        getStadium()
    }, [])

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

    function getStadium(){
        axios({
            method:'GET',
            url: '/stadium/'
        }).then((response) => {
            const clubInfo = response.data[0]
            setStadium(clubInfo.stadium)
            setClub(clubInfo.club)
        }
        )
        
    }

    function handleStadium(e){
        setUserStadium(e.target.value)
    }

    function handleCheck(e){
        if(stadium.toUpperCase() === userStadium.toUpperCase()){
            setScore(score+1)

        }
        getStadium()
        setUserStadium('')
        e.preventDefault()
    }

    if (sec !== 0 && sec > 0){
        return(
            <div>
                <h1>THE CLOCK IS TICKING!!</h1>
                <h1>Score: {score}</h1>
                <h1>Time: {sec}</h1>
                <Stack justifyContent='center' alignItem='center' direction='row' sx={{mb: 10}}>
                    <Box sx={{borderRadius:20, width: 1200, border: 10}}>
                        <h1>Club: {club}</h1>
                        <br></br>
                    </Box>
                </Stack>
                <form>
                    <h1>Stadium:</h1>
                    <input onChange={handleStadium} value={userStadium} className='answerform' autoComplete="off" onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            e.preventDefault();
                            handleCheck()
                        }
                    }}></input>
                </form>
                <ThemeProvider theme={custTheme}>
                    <Button onClick={handleCheck} variant='contained' sx={{my: 2}} endIcon={<DoneIcon />}>Enter</Button>
                </ThemeProvider>
            </div>
        )
    }else if (sec <= 0){
        return(
            <div>
                <h1>Your final score is {score}</h1>
                <ThemeProvider theme={custTheme}>
                    <Button onClick={() => {
                        const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(
                        <React.StrictMode>
                            <App />
                        </React.StrictMode>
                        );
                    }} variant='contained' endIcon={<ReplayIcon />}>Play Again</Button>
                </ThemeProvider>
            </div>
        )
    }
    
}

export default Stadium;