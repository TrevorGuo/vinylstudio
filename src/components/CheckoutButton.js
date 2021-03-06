import React from "react";
import { Button } from "@mui/material";
import '../App.css';

export default function CheckoutButton() {
    return (
        <div className='button-container'>
            <Button
                variant='contained'
                sx={{
                    backgroundColor: '#f15e35',
                    '&:hover': {
                        backgroundColor: '#e33e10',
                    }
                }}
            >
                Checkout
            </Button>
        </div>
    )
}