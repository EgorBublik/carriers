import { useForm, useFieldArray } from "react-hook-form";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ContactFaceForm.css'

const ContactFaceForm = ({ key, update, index, value, handleClose, handleRemove}) => {
    
    const {control, register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: value
    });

    const { fields: phoneState, append: phoneAppend, remove: phoneRemove } = useFieldArray({
        control, 
        name: `phone`,
        defaultValues: {
            phone: []
        }
    });

    const onSubmit = (data) => {
        handleClose()
        update(index, data);
    }

    return (
        <>
            <Modal.Body>
                <form key={key} className="add-form">
                    <div className="modal-body">
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="Имя"
                            {...register('name', {required: 'Поле обязательное к заполению'})}/>
                            {errors?.name && <p style={{color:'red'}}>{errors.name?.message}</p>}
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
                </form>
            </Modal.Body>

            <Modal.Footer>
                    <Button variant="danger" onClick={() => handleRemove(index)}> Удалить </Button>
                    <Button variant="primary" onClick={handleSubmit((data) => onSubmit(data))}> Сохранить </Button>
            </Modal.Footer>
        </>
   
    )
}

export default ContactFaceForm;

