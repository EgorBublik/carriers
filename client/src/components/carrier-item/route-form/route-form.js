import { useState } from "react";
import { useForm } from "react-hook-form";

const RouteForm = ({ key, update, index, value, remove, typeRouteClass }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    const [typeRoute, setTypeRoute] = useState('Экспорт')

    const handleOnChangeTypeRoute = (e) => {
        setTypeRoute(e.target.value)        
    }

    console.log(typeRoute)
    
    return (
        <>
            <div className="type-route-select">
                <select 
                    onChange={handleOnChangeTypeRoute}
                    className="form-select mb-3"
                    value={typeRouteClass}>
                    
                        <option value="Экспорт">Экспорт</option>
                        <option value="Импорт">Импорт</option>
                        <option value="РБ">РБ</option>
                </select>
            </div>
            
            {
                typeRoute !== 'РБ' && 
                <form key={key} className="add-form1">
                    <div className="modal-body">
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Страна выезда"
                            {...register('countryDeparture')}/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Область выезда"
                            {...register('regionDeparture')}/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Город выезда"
                            {...register('cityDeparture')}/>
                        <br/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Страна прибытия"
                            {...register('countryRoute')}/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Область прибытия"
                            {...register('regionRoute')}/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Город прибытия"
                            {...register('cityRoute')}/>
                    </div>
                    <div className="modal-footer">
                    <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button onClick={handleSubmit((data) => update(index, {...data, typeRoute}))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
                    </div>
                </form>
            }
            {
                typeRoute === 'РБ' && 
                <form key={key} className="add-form1">
                    <div className="modal-body">
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Область выезда"
                            {...register('regionDeparture')}/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Город выезда"
                            {...register('cityDeparture')}/>
                        <br/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Область прибытия"
                            {...register('regionRoute')}/>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Город прибытия"
                            {...register('cityRoute')}/>
                    </div>
                    <div className="modal-footer">
                    <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button onClick={handleSubmit((data) => update(index, {...data, typeRoute}))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
                    </div>
                </form>
            }

            
        </>
    )
}

export default RouteForm