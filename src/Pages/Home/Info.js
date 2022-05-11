import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCart from './InfoCart'

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart bgClass='bg-gradient-to-r from-secondary to-primary' cartDes='Lorem Ipsum is simply dummy text of the pri' cartTitle="Opening Hours" img={clock}></InfoCart>
            <InfoCart bgClass='bg-[#3a4256]' cartDes='Brooklyn, NY 10036, United States' cartTitle="Visit our location" img={marker}></InfoCart>
            <InfoCart bgClass='bg-gradient-to-r from-secondary to-primary' cartDes='+000 123 456789' cartTitle="Contact us now" img={phone}></InfoCart>
        </div>
    );
};

export default Info;