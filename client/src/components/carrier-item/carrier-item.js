import './carrier-item.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil} from '@fortawesome/free-solid-svg-icons'
import { } from 'bootstrap'
import { useState, useEffect } from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import { createCarrier, updateCarrier } from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'
import ContactFaceForm from './contact-face-form/contact-face-form'
import RouteForm from './route-form/route-form'
import { observer } from 'mobx-react'
import { useStores } from '../../store/rootstore'; 

import Fuse from 'fuse.js'

const CarrierItem = observer(() => {
    const {itemIndex} = useParams()   
    const store = useStores()
    const [activeContactFormId, setActiveContactFormId] = useState()
    const [activeRouteFormId, setActiveRouteFormId] = useState()
    const carriers = store.carrierStore.carriers
    const navigate = useNavigate()
    const [filterCheckboxState, setfilterCheckboxState] = useState([])
    
    const { control, register, handleSubmit } = useForm( {
        defaultValues: {
            ...carriers[itemIndex]
        }
    });
    
    const { fields: contactFaceState, append: contactFaceAppend, update: contactFaceUpdate, remove: contactFaceRemove } = useFieldArray({
        control, 
        name: "contactFace",
        defaultValues: {}
    });
    
    const { fields: routeState, append: routeAppend, update: routeUpdate, remove: routeRemove } = useFieldArray({
        control, 
        name: "route",
        defaultValues: {}
    });
    
    const fuse = new Fuse(routeState, {
        keys: [
            'typeRoute'          
        ],    
        threshold: 0.3
    })

    useEffect(() => {
        setfilterCheckboxState(routeState)
    }, [routeState])

    const handleFilter = (e) => {
        if (e.target.value === 'Все') {
            setfilterCheckboxState(routeState)
        } else {
            setfilterCheckboxState(fuse.search(e.target.value).map(result => result.item))
        }
    }
    
    const handleEditBtn = (func, index) => {
        switch (func) {
            case 'contact':
                setActiveContactFormId(index)   
                break
            case 'route':
                setActiveRouteFormId(index)
                break
            default: return
        }
    }
    
    const handleContactAddBtn = () => {
        contactFaceAppend({})
        setActiveContactFormId(contactFaceState.length)
    }

    const handleRouteAddBtn = () => {
        routeAppend({})
        setActiveRouteFormId(routeState.length)
    }

    const saveResult = async (data) => {
        if (itemIndex) {
            await updateCarrier(data)
        } else {
            await createCarrier(data)
        }
        navigate('/carriers')
    }

    return(
        <div className="container">
            <form>
                <div className="carrier-info-top row">
                    <div className="carrier-left col-4">
                        <div className="carrier-name">
                            <label className="form-label h5">Название</label>
                            <input 
                                {...register('name')} 
                                type="text" 
                                name='name' 
                                className="form-control"/>
                        </div>
                        <br />
                        <div className="carrier-type">
                            <h6>Типы А/М</h6>
                            <div className="form-check">
                                <div className="">
                                    <div className="form-check-inline">
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Мал" />
                                            Мал
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Сцепка" />
                                            Сцепка
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-check-inline">
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Реф" />
                                            Реф
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Контейнеры" />
                                            Контейнеры
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-check-inline">
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Тент" />
                                            Тент
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="carrier-contract">
                            <h6 className="">Договор</h6>
                            
                            <label>
                                <input
                                    {...register("contract")}
                                    className="form-check-input"
                                    type="radio"
                                    name="contract"
                                    value="С договором"
                                    id="radioContract"
                                />
                                Да
                            </label>

                            <label>
                                <input
                                    {...register("contract")}
                                    className="form-check-input"
                                    type="radio"
                                    name="contract"
                                    value="Без договора"
                                    id="radioContract"
                                />
                                Нет
                            </label>
                        </div>
                    </div>
                    <div className="comment col-7">
                        <label className="form-label h5">Комментарии</label>
                        <textarea 
                            {...register('description')}
                            className="form-control" 
                            rows="9"></textarea>
                    </div>
                </div>
    
                <div className="carrier-info contact-faces">
                    <div className="contact-faces-header row">
                        <div className="col-6">
                            <h3>Контактные лица</h3>
                        </div>
                        <div className="add-btn col-6">
                        <button type="button" onClick={handleContactAddBtn} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContactFaceModal">Добавить</button>
                            <div className="modal fade" id="addContactFaceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addContactFaceModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addContactFaceModalLabel">Добавить контактное лицо</h5>
                                    </div>
                                    
                                    {contactFaceState.map((field, index) => (
                                        <>
                                            {activeContactFormId === index   &&
                                                <ContactFaceForm
                                                    key={field.id}
                                                    control={control}
                                                    update={contactFaceUpdate}
                                                    remove={contactFaceRemove}
                                                    index={index}
                                                    value={field}
                                                />
                                            }
                                        </>
                                    ))}


                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Должность</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactFaceState.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.firstname}</td>
                                        <td>{item.position}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone?.map((element) => {
                                            return (
                                                <div>{element}</div>
                                            )
                                        })}</td>


                                        <td>
                                            <FontAwesomeIcon  data-bs-toggle="modal" data-bs-target="#addContactFaceModal" onClick={() => handleEditBtn('contact', index)} className='fa-pencil' icon={faPencil}/>                                    
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => contactFaceRemove(index)} icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
    
                <div className="route">
                    <div className="route-header row">
                        <div className="col-6">
                            <h3>Направления</h3>
                        </div>
                        <div className="add-btn col-6">
                            <button type="button" onClick={handleRouteAddBtn} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRouteModal">Добавить</button>
                            <div className="modal fade" id="addRouteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addRouteModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="addRouteModalLabel">Добавить направление</h5>
                                        </div>
                                        {routeState.map((field, index) => (
                                        <>
                                            {activeRouteFormId === index   &&
                                                <RouteForm
                                                    key={field.id}
                                                    control={control}
                                                    update={routeUpdate}
                                                    remove={routeRemove}
                                                    index={index}
                                                    value={field}
                                                    typeRouteClass={field.typeRoute}
                                                />
                                            }
                                        </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="col-9">
                                        <select className="form-select" onChange={handleFilter}>
                                            <option value="Все">Все</option>
                                            <option value="Экспорт">Экспорт</option>
                                            <option value="Импорт">Импорт</option>
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
                                    <tr key={item.id}>
                                        <td className='col-2'>{item.typeRoute}</td>
                                        <td className='col-4'>
                                            {item.countryDeparture} 
                                            {(item.regionDeparture !== '' && item.countryDeparture !== '') ? `, ${item.regionDeparture}` : item.regionDeparture}
                                            {(item.cityDeparture !== '' && (item.regionDeparture !== '' || item.countryDeparture !=='')) ? `, ${item.cityDeparture}` : item.cityDeparture}
                                        </td>  
                                        <td className='col-4'>
                                            {item.countryRoute} 
                                            {(item.regionRoute !== '' && item.countryRoute) ? `, ${item.regionRoute}` : item.regionRoute} 
                                            {(item.cityRoute !== '' && (item.regionRoute !== '' || item.countryRoute)) ? `, ${item.cityRoute}` : item.cityRoute}
                                        </td>
                                        <td className='col-2'>
                                            <FontAwesomeIcon  data-bs-toggle="modal" data-bs-target="#addRouteModal" onClick={() => handleEditBtn('route', index)} className='fa-pencil' icon={faPencil}/>
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => routeRemove(index)} icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                )
                            })}
                        
                        </tbody>
                    </table>
                </div>

                <div className="btn-block row">
                    <div className="col-5">
                        <button type="submit" className="btn btn-success btn-block-item" onClick={handleSubmit(saveResult)}>
                            Сохранить
                        </button>
                    </div>
                    <div className="col-5">
                            <button type='submit' className='btn btn-secondary btn-block-item' onClick={() => navigate('/carriers')}>
                                Закрыть
                            </button>
                    </div>
                </div>
            </form>
        </div>
    )
})

export default CarrierItem