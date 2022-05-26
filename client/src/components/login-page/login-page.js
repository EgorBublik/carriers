import './login-page.css'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Authorization from '../authorization/authorization'
import Registration from '../registration/registration'

const LoginPage = () => {
    return (
        <div className = "login-page">
            <div className="centr container">
                <div className="header row">
                    <div className="col-6">
                        <NavLink  className={({ isActive }) => (isActive ? 'header-btn active' : 'header-btn')} to="/authorization">Пользователи</NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink  className={({ isActive }) => (isActive ? 'header-btn active' : 'header-btn')} to="/registration">Пользователи</NavLink>
                    </div>
                    <div className="">
                    <Routes>
                        <Route path="authorization" element={<Authorization />} />
                        <Route path="registration" element={<Registration />} />
                    </Routes>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default LoginPage

