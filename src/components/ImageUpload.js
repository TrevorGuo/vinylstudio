import React from "react";
import ImageUploading from 'react-images-uploading';
import { Button } from "@mui/material";

export default function ImageUpload(props) {
    const { hasJacket, imageList, setImage } = props;

    const onChange = (image) => {
        setImage(image);
    }

    return(
        hasJacket ? 
        <div className='options-subcontainer'>
            <ImageUploading
                value={imageList}
                onChange={onChange}
                dataURLKey='data_url'
            >
            {({
            imageList,
            onImageUpload,
            }) => (
                <div>
                    <Button
                        onClick={onImageUpload}
                        variant='filled'
                        sx={{
                            color: '#f15e35'
                        }}
                    >
                        Upload Image
                    </Button>
                </div>
            )}

            </ImageUploading>
        </div>
        :
        <div>
            
        </div>
    );
}