import './carriers-list-item.css';
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'bootstrap/dist/css/bootstrap.min.css';

const CarriersListItem = ({carrier, removeCarrier}) => {
    
    const handleRemoveCarrier = () => {
        removeCarrier(carrier._id)
    }


    return( 
        <li className='list-group-item'>
            <div className="row list-group-item-label">
                <div className="col-2"> Name:<br/> {carrier.name}</div>
                <div className="col-2"> Phone:<br/> {carrier.phone}</div>
                <div className="col-2"> Route:<br/> {carrier.route}</div>
                <div className="col-3"></div>
                <div className="col-3">
                    <FontAwesomeIcon onClick={handleRemoveCarrier} className='fa-trash-can' icon={faTrashCan} />
                    <FontAwesomeIcon  className='fa-pencil' icon={faPencil} />
                </div>
            </div>
        </li>
    )
}


export default CarriersListItem;