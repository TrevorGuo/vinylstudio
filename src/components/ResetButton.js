import React from "react";
import { Button } from "@mui/material";
import '../App.css';

export default function ResetButton(props) {
    const {handleReset} = props;

    return (
        <div className='button-container'>
            <Button
                onClick={handleReset}
                variant='contained'
                sx={{
                    backgroundColor: '#f15e35',
                    '&:hover': {
                        backgroundColor: '#e33e10',
                    }
                }}
            >
                Reset
            </Button>
        </div>
    )
}