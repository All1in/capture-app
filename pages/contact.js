import React from 'react'
import Hero from "@/components/Hero/Hero";
import ContactComponent from "@/components/ContactComponent/Contact";


const contact = () => {
    return (
        <div>
            <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
            <ContactComponent />
        </div>
    )
}

export default contact
