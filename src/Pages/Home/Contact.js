import React from "react"
import PrimaryButton from "../Shared/PrimaryButton"

const Contact = () => {
  return (
    <div className="bg-background-Appointment p-16  ">
      <div className="space-y-4">
        <div>
          <h2 className=" text-secondary text-center font-semibold">Contact Us</h2>
          <h4 className=" text-white text-3xl text-center ">Stay connected with us</h4>
        </div>
       <div className="text-center space-y-3">
       <form className=" flex space-y-3  items-center flex-col">
        <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs" />
        <textarea class="textarea w-full max-w-xs textarea-bordered" placeholder="Your message"></textarea>
        
        </form>
        <PrimaryButton>Submit</PrimaryButton>
       </div>
      </div>
    </div>
  );
};

export default Contact;
