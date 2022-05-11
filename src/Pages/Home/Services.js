import React from "react"
import cavity from "../../assets/images/cavity.png"
import fluoride from "../../assets/images/fluoride.png"
import whitening from "../../assets/images/whitening.png"
import Service from "./Service"

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className=" text-center ">
        <h3 className=" text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className=" text-4xl">Services We Provide</h2>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {services.map((service) => (
          <Service key={service._id}
          service={service}
          
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
