import * as React from 'react';
import TextField from '@mui/material/TextField';
import stars from './lights.js'

export default function MainPage() {
    // function stars(){
    //     const cnt = 150;
    //     const section = document.querySelector('section');
    //     const i = 0;

    //     while(i < cnt){
    //         const star = document.createElement('i');
    //         const x = Math.floor(Math.random()*window.innerWidth);
    //         const y = Math.floor(Math.random()*window.innerHeight);

    //         const size = Math.random() * 4;
    //         star.style.left = x+'px';
    //         star.style.top = y+'px';
    //         star.style.width = 1+size+'px';
    //         star.style.height = 1+size+'px';

    //         section.appendChild(stars);
    //         i++;
    //     }
    // }

    return (
        <div className='container'>
            <div className='card' >
                Explore Mental WellBeing with us
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </div>
        </div>
    );
}