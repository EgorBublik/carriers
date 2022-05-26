import './registration.css'

const Registration = () => {
    return ( 
        <form>
            <div className="mb-3">
                <label className="form-label">Email адрес</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label className="form-label">телефон</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
        </form>
    )
}

export default Registration