import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import AppInfo from '../app-info/app-info';
import CarriersList from '../carriers-list/carriers-list';
import CarriersAddForm from '../carriers-add-form/carriers-add-form';

const HOST = process.env.REACT_APP_API_KEY


const getCarriers = async () => {
  return await axios.get(`${HOST}`)
}

const updateCarrier = async (carrier) => {
  return await axios.put(`${HOST}${carrier._id}`, carrier)
}

const createCarrier = async (carrier) => {
  return await axios.post(`${HOST}`, carrier)
}

const CarrierItem = ({carrier, onClick}) => {
  return (
    <div onClick={() => onClick(carrier)}>
      <div>Имя: {carrier.name}</div>
      <div> phone: {carrier.phone} </div>
      <br />
    </div>
  )
}

const App = () => {

  const [carriers, setCarriers] = useState([])
  const [editCarrier, setEditCarrier] = useState({})
  // console.log(editCarrier);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async data => { 
    await createCarrier(data)
    await getCarriers().then(response => setCarriers(response.data))
   };

  useEffect(() => {
    const response = getCarriers().then(response => setCarriers(response.data))
  }, [])

  return (
    <div>
      <AppInfo/>
      <CarriersAddForm/>
      <CarriersList/>

      { carriers.map((carrier) => <CarrierItem onClick={setEditCarrier}  key={carrier._id} carrier={carrier}/>)}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="name" {...register("example")} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("phone", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.phone && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    </div>

    
  );
}

export default getCarriers; 
