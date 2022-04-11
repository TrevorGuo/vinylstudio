import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

export default function VinylText(props) {
    const { title,
            subtitle,
            third,
            titleFontSize,
            setTitle,
            setSubtitle,
            setThird,
            setTitleFontSize} = props;

    const fontSizes = [8,10,12,14,16,20,24];

    const handleChange = (event) => {
        setTitleFontSize(event.target.value);
    }

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
                className='text-field'
            />
                {/* <FormControl fullWidth sx={{overflow: 'visible'}}>
                    <InputLabel sx={{marginLeft: '1vw', overflow: 'visible'}}>Size</InputLabel>
                    <Select
                        value={titleFontSize}
                        label="Size"
                        className='font-size-select'
                        onChange={handleChange}
                    >
                        {fontSizes.map(fontSize => {
                            return(
                                <MenuItem value={fontSize}>{fontSize}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl> */}
            Custom Subtitle for Top of Record Center Label (Optional)
            <TextField
                value={subtitle}
                placeholder="ex: Happy birthday, best friend!"
                onChange={event => {
                    setSubtitle(event.target.value);
                }}
                className='text-field'
            />
            URL of Playlist from Spotify, Apple Music, YouTube Music (Optional)
            <TextField
                value={third}
                placeholder="ex: https://open.spotify.com/playlist/"
                onChange={event => {
                    setThird(event.target.value);
                }}
                className='text-field'
            />
        </div>
    );
}
