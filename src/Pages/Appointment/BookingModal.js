import { format } from "date-fns"
import React from "react"

const BookingModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment;
  const handelBooking = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id,name,slot);
      setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent mb-12">{name}</h3>
          <form onSubmit={handelBooking} className=" grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-lg"
            />
            <select name='slot' class="select-bordered select w-full max-w-lg">
             {
                 slots.map(slot =><option value={slot}>{slot}</option>)
             }
             
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-lg"
            />
            <input
              type="submit"
              placeholder="Submit"
              class="btn btn-accent text-white w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
