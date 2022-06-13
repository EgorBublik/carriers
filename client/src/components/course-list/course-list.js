import './course-list.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../store/rootstore'; 
import { useEffect, useState } from 'react';

const CourseList = observer(() => {

    const [updateRoutes, setUpdateRoutes] = useState(0)

    const handleUpdateRoutes = () => {
        setUpdateRoutes((prevState) => prevState + 1)
    }
    const store = useStores()
    const routes = store.routeStore.routes

    useEffect(() => {
        store.routeStore.getRoutes()
    }, [updateRoutes])

    const onClickRemove = (id) => {
        console.log(id)
        store.routeStore.removeRoute(id);
        handleUpdateRoutes();
    }
    // console.log(routes)
    return (
        <div className="container">
            <div className="course-header"> 
                <div className="row">
                    <div className="col-9">
                        <h3>Направления</h3>
                    </div>
                    <div className="col-3 add-carrier-btn">
                    <NavLink to="/route/new-route">
                        <button type="button" className="btn btn-primary">Новое направление</button>
                    </NavLink>
                    </div>
                </div>
            </div>
            <div className="carriers-list">
                <div className="search">
                    <input className="search-input form-control" type="search" placeholder="Поиск" aria-label="Search"/>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
                <div className="carriers-table">
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
                            {routes.map((route, index) => {
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