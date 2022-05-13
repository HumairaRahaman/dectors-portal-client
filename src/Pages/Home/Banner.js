import React from "react"
import chair from "../../assets/images/chair.png"
import PrimaryButton from "../Shared/PrimaryButton"
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-background-img pt-20 pb-40 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex justify-end w-1/2">
        <img
          alt="chair"
          src={chair}
          className="max-w-md  rounded-lg shadow-2xl"
        />
        </div>
       
        <div className=" w-1/2">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
         <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
