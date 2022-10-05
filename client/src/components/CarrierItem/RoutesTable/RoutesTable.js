import { useState, useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil} from '@fortawesome/free-solid-svg-icons'
import { useFieldArray } from "react-hook-form";
import RouteForm from './RouteForm/RouteForm'
import Fuse from 'fuse.js'
// import { filter } from 'rxjs';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RoutesTable = ({control}) => {

    const [activeRouteFormId, setActiveRouteFormId] = useState()
    const [filterCheckboxState, setfilterCheckboxState] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { fields: routeState, append: routeAppend, update: routeUpdate, remove: routeRemove } = useFieldArray({
        control, 
        name: "route",
        defaultValues: {}
    });

    useEffect(() => {
        setfilterCheckboxState(routeState)
    }, [routeState])
    
    const fuse = new Fuse(routeState, {
        keys: [
            'typeRoute'          
        ],    
        threshold: 0.3
    })
    
    
    const handleFilter = (e) => {
        if (e.target.value === 'Все') {
            setfilterCheckboxState(routeState)
        } else {
            setfilterCheckboxState(fuse.search(e.target.value).map(result => result.item))
        }
    }

    const handleRouteAddBtn = () => {
        handleShow()
        routeAppend({})
        setActiveRouteFormId(routeState.length)
    }
    
    const handleEditBtn = (index) => {
        setActiveRouteFormId(index)
        handleShow()
    }
    
    const handleRemove = (index) => {
        routeRemove(index)
        handleClose()
    }
    

    const checkShowTable = () => {
        if (filterCheckboxState.length == 0 && routeState.length == 0) {
            return false
        } else {
            return true
        }
    }
    
    return (
        <div className="routes">
            <div className="route-header row">
                <div className="routes-name col-6">
                    <h3>Направления</h3>
                </div>
                <div className="add-btn-modal col-6">
                    <Button variant="primary" onClick={handleRouteAddBtn}>
                        Добавить
                    </Button>
                    <Modal show={show}>
                        <Modal.Header>
                            <Modal.Title>Направление</Modal.Title>
                        </Modal.Header>
                        {routeState.map((field, index) => (
                            <>
                                {activeRouteFormId === index &&
                                    <RouteForm
                                        key={field.id}
                                        update={routeUpdate}
                                        index={index}
                                        value={field}
                                        typeRouteClass={field.typeRoute} 
                                        handleRemove={handleRemove}
                                        handleClose={handleClose}
                                    />
                                }                        
                            </>
                        ))}
                    </Modal>
                </div>
            </div>
            
            <div className='routes-table'>
                {checkShowTable() && 
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="col-9">
                                        <select className="form-select" onChange={handleFilter}>
                                            <option value="Все">Все</option>
                                            <option value="Экспорт">Экспорт</option>
                                            <option value="Импорт">Импорт</option>
                                            <option value="РБ">РБ</option>
                                        </select>
                                    </div>
                                </th>
                                <th scope="col">Город выезда</th>
                                <th scope="col">Направление</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterCheckboxState.map((item, index) => {
                                return (
                                    item.typeRoute &&
                                    <tr key={item.id}>
                                        <td className='col-2'>{item.typeRoute}</td>
                                        <td className='col-4'>
                                            {item.countryDeparture}
                                            {(item.regionDeparture !== '' && item.countryDeparture !== '') ? `, ${item.regionDeparture}` : item.regionDeparture}
                                            {(item.cityDeparture !== '' && (item.regionDeparture !== '' || item.countryDeparture !== '')) ? `, ${item.cityDeparture}` : item.cityDeparture}
                                        </td>
                                        <td className='col-4'>
                                            {item.countryRoute}
                                            {(item.regionRoute !== '' && item.countryRoute) ? `, ${item.regionRoute}` : item.regionRoute}
                                            {(item.cityRoute !== '' && (item.regionRoute !== '' || item.countryRoute)) ? `, ${item.cityRoute}` : item.cityRoute}
                                        </td>
                                        <td className='col-2'>
                                            <FontAwesomeIcon data-bs-toggle="modal" data-bs-target="#addRouteModal" onClick={() => handleEditBtn(index)} className='fa-pencil' icon={faPencil} />
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => routeRemove(index)} icon={faTrashCan} />
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

export default RoutesTable