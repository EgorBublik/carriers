import { useForm, useFieldArray } from "react-hook-form";

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import './contact-face-form.css'

const ContactFaceForm = ({ key, update, index, value, remove}) => {
    const {control, register, handleSubmit } = useForm({
        defaultValues: value
    });

    const { fields: phoneState, append: phoneAppend, update: phoneUpdate, remove: phoneRemove } = useFieldArray({
        control, 
        name: `phone`,
        defaultValues: {
            phone: []
        }
    });

    return (
        <form key={key} className="add-form">
            <div className="modal-body">
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Имя"
                    {...register('name')}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Должность" 
                    {...register("position")}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="E-mail" 
                    {...register("email")}/>
                <button type="button" onClick={() => phoneAppend('')} className="btn btn-primary">Добавить телефон</button>
                
                {phoneState.map((item, index) => (
                    <div className="row">
                        <div className="phone-group col-11">
                            <input
                            {...register(`phone.${index}`)}
                            type="text"
                            className="form-control" />
                        </div>
                        <div className="col-1 phone-item-delete">
                            <FontAwesomeIcon className='phone-item-delete-icon' onClick={() => phoneRemove(index)} icon={faX} />
                        </div>
                    </div>
                ))}

            </div>
            <div className="modal-footer">
                <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button onClick={handleSubmit((data) => update(index, data))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
            </div>
        </form>
    )
}

export default ContactFaceForm;

