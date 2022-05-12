import { format } from "date-fns"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"

const BookingModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
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
            htmlFor="booking-modal"
           className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent mb-12">{name}</h3>
          <form onSubmit={handelBooking} className=" grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
             className="input input-bordered w-full max-w-lg"
            />
            <select name='slot'className="select-bordered select w-full max-w-lg">
             {
                 slots.map((slot,index) =><option key={index} value={slot}>{slot}</option>)
             }
             
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || " "}
             className="input input-bordered w-full max-w-lg"
            />
            
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || " "}
             className="input input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
             className="input input-bordered w-full max-w-lg"
            />
            <input
              type="submit"
              placeholder="Submit"
             className="btn btn-accent text-white w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
