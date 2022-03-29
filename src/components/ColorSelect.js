import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ColorSelect(props) {
    const {color, setColor} = props;

    const colors = ['green', 'blue', 'red', 'pink', 'orange', 'black'];

    const handleChange = event => {
        setColor(event.target.value);
    }

    return (
        <FormControl sx={{
                width: 200,
                overflow: "visible",
            }}
        >
            <InputLabel>Color</InputLabel>
            <Select
                value={color}
                label='Color'
                onChange={handleChange}
            >
            {colors.map((col) => {
                return <MenuItem value={col}>{col}</MenuItem>
            })}
            </Select>
        </FormControl>
    );
}