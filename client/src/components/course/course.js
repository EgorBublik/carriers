import './course.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPencil, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";


const Course = () => {
    return (
        <div className="container">
            <div className="course-header"> 
                <div className="row">
                    <div className="col-9">
                        <h3>Направления</h3>
                    </div>
                    <div className="col-3 add-carrier-btn">
                        <button type="button" className="btn btn-primary">Новое направление</button>
                    </div>
                </div>
            </div>
            <div className="carriers-list">
                <div className="search">
                    <input className="search-input form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
                <div className="carriers-table">
                    <table className=" table table-hover">
                        <thead>
                            <tr>
                                <th>Перевозчик</th>
                                <th>Город отправления</th>
                                <th>Пункт назначения</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>
                                    <NavLink to="/route/edit-route">
                                        <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>   
                                    </NavLink>
                                    <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>
                                    <NavLink to="/route/edit-route">
                                        <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>   
                                    </NavLink>                                      
                                    <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>
                                    <NavLink to="/route/edit-route">
                                        <FontAwesomeIcon className='fa-pencil' icon={faPencil}/>   
                                    </NavLink>
                                    <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Course