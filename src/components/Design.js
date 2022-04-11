import React, {useState} from "react";
import ColorSelect from "./ColorSelect";
import ImageUpload from "./ImageUpload";
import Preview from "./Preview";
import ProductSelect from "./ProductSelect";
import ResetButton from "./ResetButton";
import VinylText from "./VinylText";

export default function Design() {
    const [hasFrame, setHasFrame] = useState(false);
    const [hasJacket, setHasJacket] = useState(false);
    const [product, setProduct] = useState('');
    const [imageList, setImage] = useState([]);
    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [third, setThird] = useState('');
    const [titleFontSize, setTitleFontSize] = useState(10);

    const handleReset = () => {
        setHasFrame(false);
        setHasJacket(false);
        setProduct('');
        setImage([]);
        setColor('');
        setTitle('');
        setSubtitle('');
        setThird('');
    }

    return(
        <div className='design-container'>
            <div className='title-container'>
                <div className='title'>
                    <a href='https://www.goldrushvinyl.com/dream-vinyl' target='_blank'><img src="/images/goldrushlogo.png" className='social-icon'/></a>
                    <div>DESIGNYL</div>
                </div>
                <div className='social-media'>
                    <a href='https://www.instagram.com/goldrushvinyl/' target='_blank'><img src="/images/instagram.png" className='social-icon'/></a>
                    <a href='https://www.facebook.com/goldrushvinyl/'target='_blank'><img src='/images/facebook.png' className='social-icon'/></a>
                    <a href='https://twitter.com/goldrushvinyl' target='_blank'><img src='/images/twitter.png' className='social-icon'/></a>
                </div>
            </div>
            <div className='preview-container'>
                <Preview 
                    hasFrame={hasFrame}
                    hasJacket={hasJacket}
                    imageList={imageList}
                    color={color}
                    title={title}
                    subtitle={subtitle}
                    third={third}
                    titleFontSize={titleFontSize}
                />
            </div>
            <div className='options-container'>
                <div className='options-subcontainer'>
                    <ProductSelect 
                        product={product}
                        setProduct={setProduct}
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
                    titleFontSize={titleFontSize}
                    setTitle={setTitle}
                    setSubtitle={setSubtitle}
                    setThird={setThird}   
                    setTitleFontSize={setTitleFontSize} 
                />
                <div className='options-subcontainer'>
                    <ImageUpload 
                        hasJacket={hasJacket}
                        imageList={imageList} 
                        setImage={setImage}
                    />
                    <ResetButton
                        handleReset={handleReset}
                    />
                </div>
            </div>
        </div>
    );
}