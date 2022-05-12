import React from "react"

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl py-5">
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold text-secondary">
          {name}
        </h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className=" text-red-600">Try Another Day!</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn-sm btn bg-gradient-to-r from-secondary to-primary text-white border-0"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
