import React, {useState} from "react";
import ColorSelect from "./ColorSelect";
import ImageUpload from "./ImageUpload";
import Preview from "./Preview";
import ProductSelect from "./ProductSelect";
import VinylText from "./VinylText";

export default function Design() {
    const [hasFrame, setHasFrame] = useState(false);
    const [hasJacket, setHasJacket] = useState(false);
    const [imageList, setImage] = useState([]);
    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [third, setThird] = useState('');

    return(
        <div className='design-container'>
            <div className='preview-container'>
                <Preview 
                    hasFrame={hasFrame}
                    hasJacket={hasJacket}
                    imageList={imageList}
                    color={color}
                    title={title}
                    subtitle={subtitle}
                    third={third}
                />
            </div>
            <div className='options-container'>
                <div className='options-subcontainer'>
                    <ProductSelect 
                        setHasFrame={setHasFrame}
                        setHasJacket={setHasJacket}
                    />
                    <ColorSelect 
                        color={color}
                        setColor={setColor}
                    />
                </div>
                <VinylText 
                    title={title} 
                    subtitle={subtitle} 
                    third={third} 
                    setTitle={setTitle}
                    setSubtitle={setSubtitle}
                    setThird={setThird}    
                />
                <div className='options-subcontainer'>
                    <ImageUpload 
                        hasJacket={hasJacket}
                        imageList={imageList} 
                        setImage={setImage}
                    />
                </div>
            </div>
        </div>
    );
}