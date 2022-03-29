import React, {useState} from "react";
import TextField from '@mui/material/TextField';

export default function VinylText(props) {
    const { title,
            subtitle,
            third,
            setTitle,
            setSubtitle,
            setThird} = props;

    return(
        <div className='options-subcontainer'>
            <TextField
                required
                label='Title'
                value={title}
                onChange={event => {
                    setTitle(event.target.value);
                }}
                sx={{
                    overflow: 'visible',
                    width: 200,
                }}
            />
            <TextField
                label='Subtitle'
                value={subtitle}
                onChange={event => {
                    setSubtitle(event.target.value);
                }}
                sx={{
                    overflow: 'visible',
                    width: 200,
                }}
            />
            <TextField
                label='Third line'
                value={third}
                onChange={event => {
                    setThird(event.target.value);
                }}
                sx={{
                    overflow: 'visible',
                    width: 200,
                }}
            />
        </div>
    );
}
