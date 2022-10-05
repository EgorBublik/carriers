import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RouteForm = ({ key, value, index, update, handleRemove, typeRouteClass, handleClose  }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    const [typeRoute, setTypeRoute] = useState('Экспорт')

    const handleOnChangeTypeRoute = (e) => {
        setTypeRoute(e.target.value)        
    }
    
    
    const onSubmit = (data) => {
        handleClose()
        update(index, data);
    }
    
    return (
        <>
            <form key={key} className="add-form1">
                <Modal.Body>
                    <div className="type-route-select">
                        <select 
                            onChange={handleOnChangeTypeRoute}
                            className="form-select mb-3"
                            {...register('typeRoute')}
                            value={typeRouteClass}>
                            
                                <option value="Экспорт">Экспорт</option>
                                <option value="Импорт">Импорт</option>
                                <option value="РБ">РБ</option>
                        </select>
                    </div>

                    {
                        typeRoute !== 'РБ' && 
                            <>
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
                            </>
                    }
                {
                    typeRoute === 'РБ' && 
                    <>
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
                    </>
                }
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="danger" onClick={() => handleRemove(index)}> Удалить </Button>
                    <Button variant="primary" onClick={handleSubmit((data) => onSubmit(data))}> Сохранить </Button>
                    {/* <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button onClick={handleSubmit((data) => update(index, {...data, typeRoute}))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button> */}
                </Modal.Footer>
            </form>

            
        </>
    )
}

export default RouteForm