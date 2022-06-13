import './carrier-item.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil} from '@fortawesome/free-solid-svg-icons'
import { } from 'bootstrap'
import { useState} from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import { createCarrier, updateCarrier } from '../api/api'
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import ContactFaceForm from './contact-face-form/contact-face-form'
import RouteForm from './route-form/route-form'
import { observer } from 'mobx-react'
import { useStores } from '../../store/rootstore'; 

const CarrierItem = observer(() => {
    const {itemIndex} = useParams()   
    const store = useStores()
    const [activeContactFormId, setActiveContactFormId] = useState()
    const [activeRouteFormId, setActiveRouteFormId] = useState()
    const carriers = store.carrierStore.carriers
    const navigate = useNavigate()

    
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
                                                value="Тип1" />
                                            Тип1
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Тип2" />
                                            Тип2
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
                                                value="Тип3" />
                                            Тип3
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label>
                                            <input 
                                                className="form-check-input"
                                                {...register("type")} 
                                                type="checkbox" 
                                                value="Тип4" />
                                            Тип4
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
                <div className="carrier-info">
                    <div className="contact-faces">
                        <div className="contact-faces-header row">
                            <div className="col-6">
                                <h3>Контактные лица</h3>
                            </div>
                            <div className="add-btn col-6">
                            <button type="button" onClick={handleContactAddBtn} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContactFaceModal">Добавить</button>
                                <div className="modal fade" id="addContactFaceModal" tabIndex="-1" aria-labelledby="addContactFaceModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="addContactFaceModalLabel">Добавить контактное лицо</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                <th scope="col">Фамилия</th>
                                <th scope="col">Должность</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Телефон</th>
                                <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Иван</td>
                                    <td>Петров</td>
                                    <td>Директор</td>
                                    <td>petrov@mail.com</td>
                                    <td>+375291111111</td>
                                    <td>
                                        <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>                                    
                                        <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Григорий</td>
                                    <td>Сидоров</td>
                                    <td>Менеджер</td>
                                    <td>sidorov@mail.com</td>
                                    <td>+375292222222</td>
                                    <td>
                                        <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>                                    
                                        <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                    </td>
                                </tr>
                                {contactFaceState.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.position}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
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
                </div>
                <div className="route">
                    <div className="route-header row">
                        <div className="col-6">
                            <h3>Направления</h3>
                        </div>
                        <div className="add-btn col-6">
                            <button type="button" onClick={handleRouteAddBtn} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRouteModal">Добавить</button>
                            <div className="modal fade" id="addRouteModal" tabIndex="-1" aria-labelledby="addRouteModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="addRouteModalLabel">Добавить направление</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                                />}
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
                                <th scope="col">Город выезда</th>
                                <th scope="col">Направление</th>
                                <th scope="col">Стоимость, р.</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Москва</td>
                                <td>Воронеж</td>
                                <td>50</td>
                                <td>
                                    <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>                                    
                                    <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Санкт-Петербург</td>
                                <td>Магадан</td>
                                <td>70</td>
                                <td>
                                    <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>                                    
                                    <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                </td>
                            </tr>
                            {routeState.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.departure}</td>
                                        <td>{item.route}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <FontAwesomeIcon  data-bs-toggle="modal" data-bs-target="#addRouteModal" onClick={() => handleEditBtn('route', index)} className='fa-pencil' icon={faPencil}/>
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => routeRemove(index)} icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                )
                            })}
                        
                        </tbody>
                    </table>
                </div>

                <div className="btn-block">
                    <button type="submit" className="btn btn-success btn-block-item" onClick={handleSubmit(saveResult)} to="/carriers">
                        Сохранить
                    </button>
                    <NavLink type="submit" className="btn btn-secondary btn-block-item" to="/carriers">
                        Закрыть
                    </NavLink>
                </div>
            </form>
        </div>
    )
})

export default CarrierItem