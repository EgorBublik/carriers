import { useForm } from "react-hook-form";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

const RouteForm = ({ key, update, index, value, remove }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    return (
        <form key={key} className="add-form1">
            <div className="row">
                <div className="col-5">
                    <label className="form-label">Город отправки:</label>
                    <input 
                        {...register('departure')} 
                        type="text" 
                        name='name' 
                        className="form-control"/>
                </div>
                <div className="col-5">
                    <label className="form-label">Пункт Назначения:</label>
                    <input 
                        {...register('destination')} 
                        type="text" 
                        name='name' 
                        onChange={handleSubmit}
                        className="form-control"/>
                </div>
                <div className="col-1 course-item-delete">
                    <FontAwesomeIcon className='course-item-delete-icon' onClick={() => remove(index)} icon={faX} />
                </div>
            </div>
        </form>
    )
}

export default RouteForm