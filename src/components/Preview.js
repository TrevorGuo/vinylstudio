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

    const grooveWidths = [20,25,30,35,40];

    return(
        hasJacket ? 
        <Box 
            className='twotoone-box'
            sx={hasFrame && {border: '15px black solid'}}
        >
            <div className='vinyl'
                style={{backgroundColor: colors[color]}}/>

            {grooveWidths.map(width => {
                console.log(`${width}%`);
                return (
                    <div    className='vinyl-groove' 
                            style={{width: `${width}%`, height: `${2 * width}%`}} />
                );
            })}
            
            {color !== '' && 
                <div className='center'>
                    <div className='text-wrapper'>
                        <div className='text'>
                            <p>
                                {title === "" ? <br/> : title}<br/>
                                <br/>
                                {subtitle}<br/>
                                {third}<br/>
                            </p>
                        </div>
                    </div>
                </div>
            }

            {(imageList.length === 1 && hasJacket) && 
            <div className='image-box'>
                <img 
                    src={imageList[0]['data_url']} 
                    alt='Your Jacket Cover'
                    className='image'
                />
            </div>}
            {/* Make a vinyl component that takes in the text as props */}
        </Box>
        :
        <Box
            className='onetoone-box'
            sx={hasFrame && {border: '15px black solid'}}
        >
            <div className='vinyl-square'
                style={{backgroundColor: colors[color]}}/>

            {color !== '' &&
                grooveWidths.map(width => {
                    console.log(`${width}%`);
                    return (
                        <div className='vinyl-square-groove' style={{width: `${2 * width}%`, height: `${2 * width}%`}} />
                    );
                })
            }

            {color !== '' && 
                <div className='center-square'>
                    <div className='text-wrapper'>
                        <div className='text'>
                            <p>
                                {title === "" ? <br/> : title}<br/>
                                <br/>
                                {subtitle}<br/>
                                {third}<br/>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </Box>
    );
}