import './carriers-list.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarriersListItem from '../carriers-list-item/carriers-list-item';

const CarriersList = ({carriers, removeCarrier, updateCarriers}) => {
   
    return (
        <div className='container'>
            <ul className="app-list list-group">
                {carriers.map(carrier => <CarriersListItem updateCarriers={updateCarriers} key={carrier._id} removeCarrier={removeCarrier} carrier={carrier}/>)}
            </ul>
        </div>
        
    );
    
}

export default CarriersList;