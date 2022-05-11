import React from 'react'

const InfoCart = ({img,cartTitle,cartDes,bgClass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
  <figure className=' pl-5 pt-5'><img src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{cartTitle}</h2>
    <p className=' text-white'>{cartDes}</p>
   
  </div>
</div>
    );
};

export default InfoCart;