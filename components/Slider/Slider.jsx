import React from 'react';
import Image from "next/image";

const Slider = ({ slides }) => {
    return (
        <div id='gallery'>
            <h1> Gallery </h1>
            <div>
                {slides.map((slide, index) => {
                    return (
                        <Image
                           key={index}
                           src={slide.image}
                           alt='image'
                           width='1440px'
                           height='600px'
                           objectFit='cover'
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Slider;
