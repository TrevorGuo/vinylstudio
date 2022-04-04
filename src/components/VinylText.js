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
            <span>Custom Title For Top Of Record Center Label <span style={{color: 'red'}}>*</span></span>
            <TextField
                required
                value={title}
                placeholder="ex: She's Feeling 22"
                onChange={event => {
                    setTitle(event.target.value);
                }}
                sx={{
                    overflow: 'visible',
                    width: 275,
                }}
            />
            Custom Subtitle for Top of Record Center Label (Optional)
            <TextField
                value={subtitle}
                placeholder="ex: Happy birthday, best friend!"
                onChange={event => {
                    setSubtitle(event.target.value);
                }}
                sx={{
                    overflow: 'visible',
                    width: 275,
                }}
            />
            URL of Playlist from Spotify, Apple Music, YouTube Music (Optional)
            <TextField
                value={third}
                placeholder="ex: https://open.spotify.com/playlist/"
                onChange={event => {
                    setThird(event.target.value);
                }}
                sx={{
                    overflow: 'visible',
                    width: 275,
                }}
            />
        </div>
    );
}
