import "./menu-left.css"
import { NavLink } from "react-router-dom";


const MenuLeft = () => {
    return (
        <>
        <div className="menu container">
            <div className="logo">
                LOGO
            </div>
            <div className="username">
                Пользователь
            </div>
            <div className="menu-list"> 
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/users">Пользователи</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/carriers">Перевозчики</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/route">Направления</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'menu-list-item active' : 'menu-list-item')} to="/request">Заявки</NavLink>
            </div>
        </div>
            
        </>
    )
}

export default MenuLeft