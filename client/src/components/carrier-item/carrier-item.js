import './carrier-item.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil} from '@fortawesome/free-solid-svg-icons'
import { } from 'bootstrap'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { createCarrier } from '../api/api'
import { NavLink } from 'react-router-dom'

const CarrierItem = () => {
    const [inputItem, setInputItem] = useState({})
    const [contactItem, setContactItem] = useState([])
    const [routeItem, setRouteItem] = useState([])
    const [checkboxItem, setCheckboxItem] = useState([])
    const radioResult = {
        contract: ''
    }

    const { register: register1, handleSubmit: handleSubmit1 } = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();

    const saveContact = data => {
        handleAddItem('contact', data)
    }

    const saveRoute = data => {
        handleAddItem('route', data)
    }
    
    const handleAddItem = (func, data) => {
        switch (func) {
            case 'contact': 
                const newItemContact = {
                    id: Math.random(),
                    ...data
                }
                setContactItem([...contactItem, newItemContact])
                break;
            case 'route':
                const newItemRoute = {
                    id: Math.random(),
                    ...data
                }
                setRouteItem([...routeItem, newItemRoute])
                break;
        }    
    }    

    
    const removeItem = (func, id) => {
        switch (func) {
            case 'contact':
                setContactItem([...contactItem.filter((item) => item.id !== id)])
                break;
            case 'route':
                setRouteItem([...routeItem.filter((item) => item.id !== id)]) 
                break;
        }
    }
   
    const handleCheckbox = e => {
        if (e.target.checked) {
            const newChecked = {
                type: e.target.value
            }
            setCheckboxItem([...checkboxItem, newChecked])
        }
        else {
            setCheckboxItem([...checkboxItem.filter((item) => item.type !== e.target.value)])
        }
    }

    const onInputChange = (e) => {
        setInputItem((prev) => ({...prev, [e.target.name]: e.target.value}))
    }


    const saveResult = async () => {
        const result = {
            name: inputItem.name,
            type: checkboxItem,
            contract: radioResult.contract,
            contactFaces: contactItem,
            route: routeItem,
            description: ''
        }

        await createCarrier(result).then(() => console.log('succses'))
    }


    return(
        <div className="container">
            <div className="carrier-info-top row">
                <div className="carrier-left col-4">
                    <div className="carrier-name">
                        <label className="form-label h5">Название</label>
                        <input type="text" onChange={onInputChange} name='name' value={inputItem.name} className="form-control"/>
                    </div>
                    <br />
                    <div className="carrier-type">
                        <h6>Типы А/М</h6>
                        <div className="form-check">
                            <div className="">
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="checkbox" value='тип1' onChange={handleCheckbox}/>
                                    <label className="form-check-label">Тип 1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value='тип2' onChange={handleCheckbox}/>
                                    <label className="form-check-label">Тип 2</label>
                                </div>
                            </div>
                            <div className="">
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="checkbox" value='тип3' onChange={handleCheckbox}/>
                                    <label className="form-check-label">Тип 3</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value='тип4' onChange={handleCheckbox}/>
                                    <label className="form-check-label">Тип 4</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="form-check form-check-inline">
                        <h6 className="">Договор</h6>
                        <input className="form-check-input" 
                               type="radio" 
                               name="flexRadioDefault" 
                               value='С договором' 
                               id="flexRadioDefault1" 
                               onClick={e => {
                                   radioResult.contract = e.target.value
                               }}/>
                        <label className="form-check-label">
                            Да
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                               type="radio" 
                               name="flexRadioDefault" 
                               value='Без договора' 
                               id="flexRadioDefault2" 
                               onClick={e => {
                                   radioResult.contract = e.target.value
                                   }}/>
                        <label className="form-check-label">
                            Нет
                        </label>
                    </div>
                </div>
                <div className="comment col-7">
                    <label className="form-label h5">Комментарии</label>
                    <textarea className="form-control" rows="9"></textarea>
                </div>
            </div>
            <div className="carrier-info">
                <div className="contact-faces">
                    <div className="contact-faces-header row">
                        <div className="col-6">
                            <h3>Контактные лица</h3>
                        </div>
                        <div className="add-btn col-6">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContactFaceModal">Добавить</button>
                            <div className="modal fade" id="addContactFaceModal" tabIndex="-1" aria-labelledby="addContactFaceModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addContactFaceModalLabel">Добавить контактное лицо</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <form className="add-form" onSubmit={handleSubmit1(saveContact)}>
                                        <div className="modal-body">
                                            <input type="text" 
                                                className="form-control new-post-label"
                                                placeholder="Имя"
                                                {...register1('firstname')}/>
                                            <input type="text" 
                                                className="form-control new-post-label"
                                                placeholder="Фамилия"
                                                {...register1('lastname')}/>
                                            <input type="text"
                                                className="form-control new-post-label"
                                                placeholder="Должность" 
                                                {...register1("position")}/>
                                            <input type="text"
                                                className="form-control new-post-label"
                                                placeholder="E-mail" 
                                                {...register1("email")}/>
                                            <input type="text"
                                                className="form-control new-post-label"
                                                placeholder="Телефон" 
                                                {...register1("phone")}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
                                        </div>
                                    </form>

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
                            {contactItem.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.position}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>                                    
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => removeItem('contact', item.id)} icon={faTrashCan}/>
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
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRouteModal">Добавить</button>
                        <div className="modal fade" id="addRouteModal" tabIndex="-1" aria-labelledby="addRouteModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addRouteModalLabel">Добавить направление</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form className="add-form1" onSubmit={handleSubmit2(saveRoute)}>
                                        <div className="modal-body">
                                            <input type="text" 
                                                className="form-control new-post-label"
                                                placeholder="Имя"
                                                {...register2('departure')}/>
                                            <input type="text" 
                                                className="form-control new-post-label"
                                                placeholder="Направление"
                                                {...register2('route')}/>
                                            <input type="text" 
                                                className="form-control new-post-label"
                                                placeholder="Стоимость"
                                                {...register2('price')}/>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
                                        </div>
                                    </form>
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
                        {routeItem.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.departure}</td>
                                    <td>{item.route}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>                                    
                                        <FontAwesomeIcon className='fa-trash-can' onClick={() => removeItem('face', item.id)} icon={faTrashCan}/>
                                    </td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
            </div>

            <div className="btn-block">
                <NavLink type="submit" className="btn btn-success btn-block-item" onClick={()=> saveResult()} to="/carriers">
                    Success
                </NavLink>
                <NavLink type="submit" className="btn btn-danger btn-block-item" to="/carriers">
                    close
                </NavLink>
            </div>

        </div>
    )
}

export default CarrierItem