import './request-list.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react'
import { useStores } from '../../store/rootstore'
import { useEffect, useState } from 'react'
import Fuse from 'fuse.js'

const RequestList = observer(() => {
    
    const [updateRequests, setUpdateRequests] = useState(0)

    const handleUpdateRequests = () => {
        setUpdateRequests((prevState) => prevState + 1)
    }
    const store = useStores()
    const requests = store.requestStore.requests

    const fuse = new Fuse(requests, {
        keys: [
            'departure_city',
            'arrival_city'
            

        ],    
        threshold: 0.3
    })

    const [filterRequestsState, setFilterRequestsState] = useState([])

    const handleSearch = (e) => {
        if (e.target.value !== '') {
            setFilterRequestsState(fuse.search(e.target.value).map(result => result.item))
        } else {
            setFilterRequestsState(requests)
        }
    }

    useEffect(() => {
        store.requestStore.getRequests()
    }, [updateRequests])

    useEffect(() => {
        setFilterRequestsState(requests)
    }, [requests])

    const onClickRemove = (id) => {
        store.requestStore.removeRequest(id);
        handleUpdateRequests();
    }

    return (
        <div className="container">
            <div className="request-header"> 
                <div className="row">
                    <div className="col-9">
                        <h3>Заявки</h3>
                    </div>  
                    <div className="col-3 add-request-btn">
                        <NavLink type='button' className="btn btn-primary" to="/request/new-request">
                            Новая заявка
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="request-list">
                <div className="search">
                    <input className="search-input form-control" onChange={handleSearch} type="search" placeholder="Поиск" aria-label="Search"/>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
                <div className="request-table">
                    <table className=" table table-hover">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Город загрузки</th>
                                <th>Город выгрузки</th>
                                <th>Наименование груза</th>
                                <th>Вес / Объём</th>
                                <th>Типы А/М</th>
                                <th>Сумма фрахта</th>
                                <th>Особые условия</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterRequestsState.map((request, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{request.departure_date} - {request.arrival_date}</td>
                                        <td>{request.departure_city}</td>
                                        <td>{request.arrival_city}</td>
                                        <td>{request.name_cargo}</td>
                                        <td>{request.weight_cargo} / {request.size_cargo}</td>
                                        <td>{request.type.map((item) => {
                                            return (
                                                <div>{item}</div>
                                                
                                            )
                                        }
                                        )}</td>
                                        <td>{request.freight} {request.currency}</td>
                                        <td>{request.comment}</td>
                                        <td>
                                            <NavLink to={`/request/edit-request/${index}`} >
                                                <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>   
                                            </NavLink>
                                            <FontAwesomeIcon className='fa-trash-can' onClick={() => onClickRemove(request._id)} icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                )                                
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
})

export default RequestList