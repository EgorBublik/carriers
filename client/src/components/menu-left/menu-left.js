import "./menu-left.css"
import { NavLink } from "react-router-dom";
import logo from "./radianceLogo.png"
import { logOut } from "../api/api";

const MenuLeft = () => {

    const user = localStorage.getItem("user")

    return (
        <div className="menu container">
            <div className="logo">
                <img src={logo}></img>
                <h2>Radiance</h2>
            </div>
            <div className="user row">
                <span className="username col-10">{user}</span>
                <button type="button" onClick={logOut} className="btn btn-outline-danger col-2" title="Выйти">X</button>
            </div>
            <div className="menu-list"> 
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/users">Пользователи</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/carriers">Перевозчики</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/route">Направления</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/request">Заявки</NavLink>
            </div>
        </div>
    )
}

export default MenuLeft