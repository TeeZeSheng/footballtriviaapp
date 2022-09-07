import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Game from './game'
import Stadium from './stadium'
import {useState, useEffect} from "react"
import Stack from "@mui/material/Stack";

function Home(){
    const [page, setPage] = useState(0);

    if(page === 0){
        return(
            <div>
                <h1>Football Trivia</h1>
                <Accordion sx={{width: 900, ml: 40}} >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Rules</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        1.You will given 60 seconds to guess as much 
                        players or stadiums as you can. 
                        <br></br>
                        2.You will get one point for every correct answer 
                        <br></br>
                        3.No points will be given to wrong answer
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <h1>CHOOSE A CATEGORY</h1>
                <h1 className='category'>Players Stadiums</h1>
                <Stack direction='row' spacing={2} justifyContent='center' alignItem='center'>  
                    <button onClick={() => setPage(1)} className="players"></button>
                    <button onClick={() => setPage(2)} className = "clubs"></button>
                </Stack>
            </div>   
        )

    }else if(page === 1){
        return(
            <div>
                <Game />
            </div>
        )
    }else if(page === 2){
        return(
            <span>
                <Stadium />
            </span>
        )
    }
    
}

export default Home;