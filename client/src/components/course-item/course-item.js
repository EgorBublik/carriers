import './course-item.css'
import { createRoutes, updateRoute } from '../api/api'
import { useForm, useFieldArray } from "react-hook-form";
import {RouteForm} from './RouteForm/RouteForm';
import { observer } from 'mobx-react';
import { useStores } from '../../store/rootstore'; 
import { useParams, useNavigate } from 'react-router-dom';

const CourseItem = observer(() => {
    const navigate = useNavigate()
    const store = useStores()
    const {id} = useParams()
    const routes = store.routeStore.routes
    const initialValue = routes.find(route => route._id === id)

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
        ...initialValue
        }
    });

    const { fields: routeState, append, remove } = useFieldArray({
        control, 
        name: "stop",
        defaultValues: {}
    });

    const saveRoute = async (data) => {
        if (id) {
            await updateRoute(data)
        } else {
            await createRoutes(data)
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
                        return <RouteForm item ={item} register={register} index={index} remove={remove} />
                    })}
                </div>

            </div>
            <div className="course-item-save col-10 ">
                <button type="button"
                        className="btn btn-success btn-block-item" 
                        onClick={handleSubmit(saveRoute)}>
                            Сохранить
                </button>
                    <button type="submit" className="btn btn-secondary btn-block-item" onClick={() => navigate('/route')}>
                        Закрыть
                    </button>
            </div>
        </div>
    )
})

export default CourseItem

