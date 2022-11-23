import { observer } from 'mobx-react-lite';
import { useStores } from '../../store/rootstore'; 
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Fuse from 'fuse.js'
import './CarriersList.css'

const CarriersList = observer(() => {
    
    const [currentPage, setCurrentPage] = useState(1)
    const [carriersPerPage] = useState(7)
    const [filterKeys] = useState(['name'])
    const [updateCarriers, setUpdateCarriers] = useState(0)
    const [filterCarriersState, setFilterCarriersState] = useState([])
    
    const store = useStores()
    const carriers = store.carrierStore.carriers
    
    useEffect(() => {
        store.carrierStore.getCarriers()
    }, [updateCarriers])
    
    useEffect(() => {
        setFilterCarriersState(carriers)
    }, [carriers.length])

    const fuse = new Fuse(carriers, {
        keys: filterKeys,    
        threshold: 0.3
    })
    
    const handleSearch = (e) => {
        if (currentPage !== 1) {
            setCurrentPage(1)
        }
        if (e.target.value !== '') {
            setFilterCarriersState(fuse.search(e.target.value).map(result => result.item))
        } else {
            setFilterCarriersState(carriers)
        }
    } 
    
    const handleUpdateCarriers = () => { 
        setUpdateCarriers((prevState) => prevState + 1)
    }
    
    const onClickRemove = (id) => {
        store.carrierStore.removeCarrier(id);
        handleUpdateCarriers();
    }

    const lastCarriersIndex = currentPage * carriersPerPage
    const firstCarriersIndex = lastCarriersIndex - carriersPerPage
    const currentCarriers = filterCarriersState.slice(firstCarriersIndex, lastCarriersIndex)
    const pageNumbers = []
       
    for (let i = 1; i<= Math.ceil(filterCarriersState.length / carriersPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const nextPage = () => {
        if (currentPage !== pageNumbers.length) {
            setCurrentPage(prev => prev + 1)
        }
    }
    
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(prev => prev - 1)
        }
    }

    if (store.carrierStore.isLoading) {
        return <h1>LOADING...</h1>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCarriers.map((carrier, index) => {
                                return (
                                    <tr key={carrier._id}>
                                        <td>{carrier.name}</td>
                                        <td>{carrier.type.map((item) => {
                                            return ( 
                                                <div key={item}> {item} </div>   
                                            )})}
                                        </td>
                                        <td>
                                            <NavLink to={`/carriers/edit-carrier/${carrier._id}`} >
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
            <div className='carriers-pagination'>
                <ul className='pagination'>
                    <li className={currentPage !== 1 ? 'page-item' : 'page-item disabled'}>
                        <a className="page-link" onClick={prevPage}>Prev</a>
                    </li>
                    {
                        pageNumbers.map(number => {
                            if (currentPage === number)
                            {
                                return (
                                    <li className='page-item active' key={number} onClick={() => paginate(number)}>
                                        <a className='page-link' onClick={() => paginate(number)}>
                                            {number}
                                        </a>
                                    </li>
                                )
                                
                            } else {
                                return (
                                    <li className='page-item' key={number} onClick={() => paginate(number)}>
                                        <a className='page-link' onClick={() => paginate(number)}>
                                            {number}
                                        </a>
                                    </li>
                                )
                            }
                            
                        })
                    }
                    <li className={currentPage !== pageNumbers.length  ? 'page-item' : 'page-item disabled'}>
                        <a className="page-link" onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
})

export default CarriersList