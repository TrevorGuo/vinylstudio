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

    return(
        <Box 
            className='twotoone-box'
            sx={hasFrame && {border: '15px black solid'}}
        >
            {(imageList.length === 1 && hasJacket) && 
            <div className='image-box' background-image="imageList[0]['data_url']">
                <img 
                src={imageList[0]['data_url']} 
                alt='Your Jacket Cover'
                object-fit='cover'
                z-index='10'/>
            </div>}
            <div className='vinyl'
                style={{backgroundColor: color}}/>
            {color !== '' && <div className='center'/>}
            <div className='text'>
                {title}<br/>
                {subtitle}<br/>
                {third}<br/>
            </div>
            {/* Make a vinyl component that takes in the text as props */}
        </Box>
    );
}