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
    },
})

function Game(){
    const [country, setCountry] = useState("");
    const [age, setAge] = useState(0);
    const [team, setTeam] = useState("")
    const [playerFN, setPlayerFN] = useState("")
    const [playerLN, setPlayerLN] = useState("")
    const [userFN, setUserFN] = useState("")
    const [userLN, setUserLN] = useState("")
    const [score, setScore] = useState(0)
    const [sec, setSec] = useState(60);
    useEffect(() => {
        getPlayers();
    }, [])

    function getPlayers(){
        axios({
            method: "GET",
            url: "https://playfootballtrivia.herokuapp.com//game/"
        }).then((response) => {
            setCountry(response.data[0].country)
            setAge(response.data[0].age)
            setTeam(response.data[0].team)
            setPlayerFN(response.data[0].first_name)
            setPlayerLN(response.data[0].last_name)
            
        })

    }

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

    function handleCheck(e){
        if(playerFN.toLowerCase() === userFN.toLowerCase() && playerLN.toLowerCase() === userLN.toLowerCase()){
            setScore(score + 1)
        }
        getPlayers()
        setUserFN("")
        setUserLN("")

        e.preventDefault()

    }

    function handleChangeFN(e){
        setUserFN(e.target.value)

    }

    function handleChangeLN(e){
        setUserLN(e.target.value)

    }
    if (sec !== 0 && sec > 0){
        return(
            <div>
                <h1>THE CLOCK IS TICKING!!</h1>
                <h1>Score: {score}</h1>
                <h1>Time: {sec}</h1>
                <Stack justifyContent='center' alignItem='center' direction='row' sx={{mb: 5}}>
                    <Box sx={{borderRadius:20, width: 1200, border: 10}}>
                        <h1>Country: {country}</h1>
                        <br></br>
                        <h1>Team: {team}</h1>
                        <br></br>
                        <h1>Age: {age}</h1>
                        <br></br>
                    </Box>
                </Stack>
                <form>
                    <h1 className="label">First Name:</h1>
                    <input onChange={handleChangeFN} value={userFN} className='answerform'></input>
                    <h1 className="label">Last Name:</h1>
                    <input onChange={handleChangeLN} value={userLN} className='answerform' autoComplete="off" onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            e.preventDefault();
                            handleCheck()
                        }
                    }}></input>
                </form>
                <ThemeProvider theme={custTheme}>
                    <Button onClick={handleCheck} variant='contained' sx={{mt: -15, ml: 50}} endIcon={<DoneIcon />}>
                        Enter
                    </Button>
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
                    }} variant='contained' endIcon = {<ReplayIcon />}>Play Again</Button>
                </ThemeProvider>
            </div>
        )
    }

}

export default Game;