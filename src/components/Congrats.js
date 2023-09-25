import React from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './Congrats.css';


function Congrats() {
    const navigate = useNavigate();
    const { width, height } = useWindowSize()

    return(
        <div className='congrats'>
            <Confetti width={width} height={height}/>
            <h1>✨ CONGRATS YOU HAVE COMPLETED THE QUIZ ✨</h1>
            <button onClick={() => navigate('/')}>Do Another One!</button>
        </div>        
    )
}

export default Congrats;
