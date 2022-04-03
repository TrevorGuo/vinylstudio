import React from "react";
import Box from '@mui/material/Box'

export default function Preview(props) {
    const { hasFrame,
            hasJacket,
            imageList,
            color,
            title,
            subtitle,
            third,
            } = props;

    const colors = {
        green: '#1f954f',
        blue: '#0030ad',
        red: '#d10d25',
        pink: '#f34784',
        orange: '#eba000',
        black: '#2e2e2e',

    }

    return(
        <Box 
            className='twotoone-box'
            sx={hasFrame && {border: '15px black solid'}}
        >
            <div className='vinyl'
                style={{backgroundColor: colors[color]}}/>
            {color !== '' && 
                <div className='center'>
                    <div className='text'>
                        {title}<br/>
                        <br/>
                        {subtitle}<br/>
                        {third}<br/>
                    </div>
                </div>
            }

            {(imageList.length === 1 && hasJacket) && 
            <div className='image-box'>
                <img 
                src={imageList[0]['data_url']} 
                alt='Your Jacket Cover'
                object-fit='cover'
                z-index='10'/>
            </div>}
            {/* Make a vinyl component that takes in the text as props */}
        </Box>
    );
}