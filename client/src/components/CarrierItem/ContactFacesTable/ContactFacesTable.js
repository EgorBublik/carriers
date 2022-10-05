import { useState } from 'react';
import { useFieldArray } from "react-hook-form";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil} from '@fortawesome/free-solid-svg-icons'
import ContactFaceForm from './ContactFaceForm/ContactFaceForm'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ContactFacesTable = ({control}) => {
    
    const [activeContactFormId, setActiveContactFormId] = useState()
    
    const { fields: contactFaceState, append: contactFaceAppend, update: contactFaceUpdate, remove: contactFaceRemove } = useFieldArray({
        control, 
        name: "contactFace",
        defaultValues: {}
    });

    const handleContactAddBtn = () => {
        handleShow()
        contactFaceAppend({})
        setActiveContactFormId(contactFaceState.length)
    }
    
    const handleEditBtn = (index) => {
        setActiveContactFormId(index)
        handleShow()
    }

    const handleRemove = (index) => {
        contactFaceRemove(index)
        handleClose()
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="contact-faces container">
            <div className='contact-faces-header row'>
                <div className="contact-faces-name col-6">
                    <h3>Контактные лица</h3>
                </div>
                <div className="add-btn-modal col-6">
                    <Button variant="primary" onClick={handleContactAddBtn}>
                        Добавить
                    </Button>
                    <Modal show={show}>
                        <Modal.Header>
                            <Modal.Title>Контактное лицо</Modal.Title>
                        </Modal.Header>
                        {contactFaceState.map((field, index) => (
                            <>
                                {activeContactFormId === index &&
                                    <ContactFaceForm
                                        key={field.id}
                                        update={contactFaceUpdate}
                                        index={index}
                                        value={field}
                                        handleRemove={handleRemove}
                                        handleClose={handleClose}
                                    />
                                }                        
                            </>
                        ))}
                    </Modal>
                </div>
            </div>
            <div className='contact-faces-table'>
                {contactFaceState.length !== 0 && 
                    <table className="table">
                        <thead>
                            <tr className=''>
                                <th>Имя</th>
                                <th>Должность</th>
                                <th>E-mail</th>
                                <th>Телефон</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactFaceState.map((item, index) => {
                                return (
                                    item.name &&
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.position}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone?.map((element) => {
                                            return (
                                                <div>{element}</div>
                                            )
                                        })}</td>
                                        <td className='col-2'>
                                            <FontAwesomeIcon data-bs-toggle="modal" data-bs-target="#addContactFaceModal" onClick={() => handleEditBtn(index)} className='fa-pencil' icon={faPencil}/>                                    
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => contactFaceRemove(index)} icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
        
    )
}

export default ContactFacesTable