import { useForm } from "react-hook-form";
import { createCarrier } from "../api/api";

import './carriers-add-form.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarriersAddForm = ({updateCarriers}) => {
    
    const {register, reset, handleSubmit, formState: {errors} } = useForm()
    
    
    const onSubmit = async data => { 
        await createCarrier(data).then(() => {
            updateCarriers((prevState) => prevState + 1 )
            reset()
        })
        
    }

    return (
        <div className='container'>
            <div className="app-add-form">
                <h3>Добавьте нового перевозчика</h3>
               
                <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="name"
                        {...register('name')}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="phone" 
                        {...register("phone", { required: true })}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="route" 
                        {...register("route", { required: true })}/>    
                        {errors.phone && <span>This field is required</span>}
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            
                
            </div>
        </div>
    );
}

export default CarriersAddForm;