import { observer } from 'mobx-react'
import { useStores } from '../../store/rootstore'; 
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { createCarrier, updateCarrier } from '../api/api'
import CarrierTop from './CarrierTop/CarrierTop'
import ContactFacesTable from './ContactFacesTable/ContactFacesTable'
import RoutesTable from './RoutesTable/RoutesTable'
import './carrier-item.css'
import { } from 'bootstrap'



const CarrierItem = observer(() => {
    const {itemIndex} = useParams()   
    const store = useStores()
    const carriers = store.carrierStore.carriers
    const navigate = useNavigate()
    
    
    
    const { control, register, handleSubmit, formState: {errors} } = useForm( {
        defaultValues: {
            ...carriers[itemIndex]
        }
    });

    const saveResult = async (data) => {
        // console.log('save', data)
        if (itemIndex) {
            await updateCarrier(data)
        } else {
            await createCarrier(data)
        }
        navigate('/carriers')
    }

    return(
        <div className="container">
            <form>

                <CarrierTop
                    register={register}
                    errors={errors}
                />
                <ContactFacesTable
                    control={control}
                />
                
                <RoutesTable
                    control={control}
                />

                <div className="btn-block row">
                    <div className="col-5">
                        <button type="submit" className="btn btn-success btn-block-item" onClick={handleSubmit(saveResult)}>
                            Сохранить
                        </button>
                    </div>
                    <div className="col-5">
                        <button type='submit' className='btn btn-secondary btn-block-item' onClick={() => navigate('/carriers')}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
})

export default CarrierItem