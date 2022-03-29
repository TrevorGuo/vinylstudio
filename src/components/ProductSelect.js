import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductSelect(props) {
    const {setHasFrame, setHasJacket} = props;
    const [product, setProduct] = useState('');

    const handleChange = event => {
        setProduct(event.target.value);
        switch(event.target.value) {
            case 'framed':
                setHasFrame(true);
                setHasJacket(false);
                break;
            case 'jacket':
                setHasFrame(false);
                setHasJacket(true);
                break;
            case 'framedjacket':
                setHasFrame(true);
                setHasJacket(true);
                break;
            default:
                setHasFrame(false);
                setHasJacket(false);
                break;
        }
    }

    return (
        <FormControl sx={{
                width: 200,
                overflow: 'visible',
            }}
        >
            <InputLabel>Product</InputLabel>
            <Select
                value={product}
                label='Color'
                onChange={handleChange}
            >
                <MenuItem value='framed'>Framed</MenuItem>
                <MenuItem value='jacket'>Custom Jacket</MenuItem>
                <MenuItem value='framedjacket'>Custom Jacket and Frame</MenuItem>
            </Select>
        </FormControl>
    );
}