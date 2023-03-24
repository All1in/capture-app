import React from 'react';
import ImageForInstagram from "@/components/ImageForInstagram/ImageForInstagram";
import { IntagramImages } from './IntagramImages'

const Instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold'>Follow on Instagram</p>
            <p className='pb-4'> Photo app </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                {IntagramImages.map((social) => (
                    <ImageForInstagram
                        key={social.image}
                        socialImg={social.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Instagram
