import './user-list.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const UserList = () => {
    return (
        <div className="container">
            <div className="user-header"> 
                <div className="row">
                    <div className="col-9">
                        <h3>User</h3>
                    </div>
                    <div className="col-3 add-user-btn">
                        <button type="button" className="btn btn-primary">New User</button>
                    </div>
                </div>
            </div>
            <div className="user-list">
                <div className="search">
                    <input className="search-input form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
                <div className="user-table">
                    <table className=" table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList