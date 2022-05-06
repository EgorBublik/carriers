import './carriers-list-item.css';
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { updateCarrier } from '../api/api';

import 'bootstrap/dist/css/bootstrap.min.css';

const EditCarrierIcon = ({carrier, updateCarriers}) => {
  const [show, setShow] = useState(false);
  
  const {register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: carrier})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async carrier => { 
    await updateCarrier(carrier).then(() => {
      updateCarriers()
      handleClose()
    })
  }

  return (
    <>
      <FontAwesomeIcon onClick={handleShow} className='fa-pencil' icon={faPencil} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Carrier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" 
                  className="form-control new-post-label"
                  placeholder="name"
                  {...register('name')}/>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="phone" 
                  {...register("phone", { required: true })}/>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="route" 
                  {...register("route", { required: true })}/>    
                  {errors.phone && <span>This field is required</span>}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const CarriersListItem = ({carrier, removeCarrier, updateCarriers}) => {
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
                    <EditCarrierIcon updateCarriers={updateCarriers} carrier={carrier}/>    
                </div>
            </div>
        </li>
    )
}

export default CarriersListItem;