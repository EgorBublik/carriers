import './course-item.css'
import { createRoutes, updateRoute } from '../api/api'
import { useForm, useFieldArray } from "react-hook-form";
import RouteForm from './route-form/route-form';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react';
import { useStores } from '../../store/rootstore'; 
import { useParams, useNavigate, NavLink } from 'react-router-dom';


const CourseItem = observer(() => {
    const navigate = useNavigate()
    const store = useStores()
    const {itemIndex} = useParams()
    const routes = store.routeStore.routes
    
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
        ...routes[itemIndex]
        }
    });

    const { fields: routeState, append, remove } = useFieldArray({
        control, 
        name: "stop",
        defaultValues: {
            departure: "Bill", destination: "destination" 
        }
    });
    

    const saveRoute = async (data) => {
        if (itemIndex) {
            await updateRoute(data)
            console.log(data)
        } else {
            await createRoutes(data).then(() => console.log('succses'))
        }
        navigate("/route")
    }

    return (
        <div className="container">
            <div className="main-stream">
                <h2>Основное направление:</h2>
                <div className="row">
                    <div className="col-5">
                        <label className="form-label">Город отправки:</label>
                        <input 
                            {...register(`departure`)} 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="col-5">
                        <label className="form-label">Пункт Назначения:</label>
                        <input 
                            {...register(`destination`)} 
                            type="text" 
                            className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="secondary-stream">
                <div className="row">
                    <div className="col-6">
                        <h2>Синоним:</h2>
                    </div>
                    <div className="add-course-btn col-4">
                        <button type="button" onClick={() => append({})} className="btn btn-primary">Новое направление</button>
                    </div>   
                </div>
                
                <div className="synonym-group">
                    {routeState.map((item, index) => {
                        return (
                                <div key={item.id} className="row">
                                    <div className="col-5">
                                        <label className="form-label">Город отправки:</label>
                                        <input 
                                            {...register(`stop.${index}.departure`)} 
                                            type="text" 
                                            className="form-control"/>
                                    </div>
                                    <div className="col-5">
                                        <label className="form-label">Пункт Назначения:</label>
                                        <input 
                                            {...register(`stop.${index}.destination`)} 
                                            type="text" 
                                            className="form-control"/>
                                    </div>
                                    <div className="col-1 course-item-delete">
                                        <FontAwesomeIcon className='course-item-delete-icon' onClick={() => remove(index)} icon={faX} />
                                    </div>
                                </div>
                        )
                    })}
                </div>

            </div>
            <div className="course-item-save col-10">
                <button type="button"
                        className="btn btn-success" 
                        onClick={handleSubmit(saveRoute)}>
                            Сохранить
                </button>
                <NavLink type="submit" className="btn btn-secondary btn-block-item" to="/route">
                    Закрыть
                </NavLink>
            </div>
        </div>
    )
})

export default CourseItem