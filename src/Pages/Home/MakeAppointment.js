import React from "react"
import doctor from "../../assets/images/doctor.png"
import PrimaryButton from "../Shared/PrimaryButton"

const MakeAppointment = () => {
  return (
    <section className=" bg-background-Appointment justify-center items-center flex">
      <div className=" flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="doctor" />
      </div>
      <div className=" flex-1 px-5 p-5 lg:p-0 ">
        <h3 className=" text-xl text-primary font-bold">Appointment</h3>
        <h2 className=" text-3xl text-white py-5">Make an appointment Today</h2>
        <p className=" text-white pb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem ipsus's that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
