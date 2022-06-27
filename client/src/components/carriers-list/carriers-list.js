import './carriers-list.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import { useStores } from '../../store/rootstore'; 
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Fuse from 'fuse.js'

const CarriersList = observer(() => {
    
    const [filterKeys, setFilterKeys ] = useState(['name'])
    const [updateCarriers, setUpdateCarriers] = useState(0)
    const store = useStores()
    const carriers = store.carrierStore.carriers
    
    const fuse = new Fuse(carriers, {
        keys: filterKeys,    
        threshold: 0.3
    })
    const [filterCarriersState, setFilterCarriersState] = useState([])
    
    const handleSearch = (e) => {
        if (e.target.value !== '') {
            setFilterCarriersState(fuse.search(e.target.value).map(result => result.item))
        } else {
            setFilterCarriersState(carriers)
        }
    }   

    useEffect(() => {
        store.carrierStore.getCarriers()
    }, [updateCarriers])
    
    useEffect(() => {
        setFilterCarriersState(carriers)
    }, [carriers])

    const handleUpdateCarriers = () => { 
        setUpdateCarriers((prevState) => prevState + 1)
    }
    
    const onClickRemove = (id) => {
        console.log(id)
        store.carrierStore.removeCarrier(id);
        handleUpdateCarriers();
    }

  
    return (
        <div className="container">
            <div className="carriers-header"> 
                <div className="row">
                    <div className="col-9">
                        <h3>Перевозчики</h3>
                    </div>
                    <div className="col-3 add-carrier-btn">
                        <NavLink to="/carriers/new-carrier">
                            <button type="button" className="btn btn-primary">
                                Новый перевозчик
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="carriers-list">
                <div className="search">
                    <input className="search-input form-control" onChange={handleSearch} type="search" placeholder="Поиск" aria-label="Search"/>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
                <div className="carriers-table">
                    <table className=" table table-hover">
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Типы АМ</th>
                                <th>Направления</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterCarriersState.map((carrier, index) => {
                                
                                return (
                                    <tr key={carrier._id}>
                                        <td>{carrier.name}</td>
                                        <td>{carrier.type.map((item) => {
                                            return ( 
                                                <div key={item}> {item} </div>   
                                            )})}
                                        </td>
                                        <td>{carrier.route.map((item, index) => {
                                            return (
                                                <div key={index}>{item.departure} — {item.route}</div>
                                            )
                                        })}</td>
                                        <td>
                                            <NavLink to={`/carriers/edit-carrier/${index}`} >
                                                <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>   
                                            </NavLink>
                                            <FontAwesomeIcon onClick={() => onClickRemove(carrier._id)} className='fa-trash-can' icon={faTrashCan}/>
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

export default CarriersList