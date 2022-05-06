import './App.css';
import AppInfo from '../app-info/app-info';
import CarriersList from '../carriers-list/carriers-list';
import CarriersAddForm from '../carriers-add-form/carriers-add-form';
import { useState, useEffect } from 'react';
import {getCarriers, deleteCarrier} from '../api/api';

const App = () => {
  
  const [updateCarriers, setUpdateCarriers] = useState(0)
  const [carriers, setCarriers] = useState([])

  const removeCarrier = async (id) => {
      await deleteCarrier(id).then(() => {
        handleUpdateCarriers()
      })
  }
  
  const handleUpdateCarriers = () => {
    setUpdateCarriers((prevState) => prevState + 1 )
  }
  

  useEffect(() => {
      getCarriers().then(response => setCarriers(response.data))
  }, [updateCarriers])

  return (
    <div>
      <AppInfo/>
      <CarriersAddForm updateCarriers={setUpdateCarriers}/>
      <CarriersList updateCarriers={handleUpdateCarriers} removeCarrier={removeCarrier} carriers={carriers}/>
    </div>    
  );
}

export default App;
