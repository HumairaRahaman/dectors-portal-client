import { format } from 'date-fns'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import BookingModal from './BookingModal'
import Service from './Service'

const AvailableAppointments = ({date}) => {
    // const [services,setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date,'PP');

    const {data: services,isLoading, refetch} = useQuery(['available',formattedDate],()=>
    fetch(`https://stormy-gorge-82175.herokuapp.com/available?date=${formattedDate}`)
        .then(res=>res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`https://stormy-gorge-82175.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h2 className=' text-xl text-secondary text-center pb-24'>Available Appointments on {format(date, 'PP')}</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services?.map(service=><Service
                key={service._id} service={service}
                setTreatment = {setTreatment}

                ></Service>)}
            </div>
            {treatment && <BookingModal date={date} refetch={refetch} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
      
    );
};

export default AvailableAppointments;