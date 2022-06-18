import './course-list.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../store/rootstore'; 
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js'

const CourseList = observer(() => {
    
    const [updateRoutes, setUpdateRoutes] = useState(0)

    const handleUpdateRoutes = () => {
        setUpdateRoutes((prevState) => prevState + 1)
    }
    
    const store = useStores()
    const routes = store.routeStore.routes

    const fuse = new Fuse(routes, {
        keys: [
            'departure',
            'destination',
            'stop.destination'

        ],    
        threshold: 0.3
    })
    const [filterRoutesState, setFilterRoutesState] = useState([])

    const handleSearch = (e) => {
        if (e.target.value !== '') {
            setFilterRoutesState(fuse.search(e.target.value).map(result => result.item))
        } else {
            setFilterRoutesState(routes)
        }
    }   

    useEffect(() => {
        store.routeStore.getRoutes()
    }, [updateRoutes])

    useEffect(() => {
        setFilterRoutesState(routes)
    }, [routes])

    const onClickRemove = (id) => {
        store.routeStore.removeRoute(id);
        handleUpdateRoutes();
    }
    return (
        <div className="container">
            <div className="course-header"> 
                <div className="row">
                    <div className="col-9">
                        <h3>Направления</h3>
                    </div>
                    <div className="col-3 add-route-btn">
                    <NavLink to="/route/new-route">
                        <button type="button" className="btn btn-primary">Новое направление</button>
                    </NavLink>
                    </div>
                </div>
            </div>
            <div className="routes-list">
                <div className="search">
                    <input className="search-input form-control" onChange={handleSearch} type="search" placeholder="Поиск" aria-label="Search"/>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
                <div className="routes-table">
                    <table className=" table table-hover">
                        <thead>
                            <tr>
                                <th>Город отправления</th>
                                <th>Пункт назначения</th>
                                <th>Остановки</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterRoutesState.map((route, index) => {
                                return (
                                    <tr>
                                        <td>{route.departure}</td>
                                        <td>{route.destination}</td>
                                        <td>{route.stop.map((item, index) => {
                                                if (route.stop.length - 1 === index) {
                                                    return (
                                                        item.destination
                                                    )
                                                } else {
                                                    return (
                                                        `${item.destination}, `
                                                    )
                                                }
                                            })}</td>
                                        <td>
                                            <NavLink to={`/route/edit-route/${index}`}>
                                                <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>   
                                            </NavLink>
                                            <FontAwesomeIcon onClick={() => onClickRemove(route._id)} className='fa-trash-can' icon={faTrashCan}/>
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

export default CourseList