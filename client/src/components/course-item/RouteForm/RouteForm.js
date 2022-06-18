import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

export const RouteForm = ({item, register, index, remove}) => {

    return (
        <div key={item.id} className="row">
            
            <div className="col-5">
                <label className="form-label">Город отправки:</label>
                <input
                    {...register(`stop.${index}.departure`)}
                    type="text"
                    className="form-control" />
            </div>
            <div className="col-5">
                <label className="form-label">Пункт Назначения:</label>
                <input
                    {...register(`stop.${index}.destination`)}
                    type="text"
                    className="form-control" />
            </div>
            <div className="col-1 course-item-delete">
                <FontAwesomeIcon className='course-item-delete-icon' onClick={() => remove(index)} icon={faX} />
            </div>
        </div>
    )
}