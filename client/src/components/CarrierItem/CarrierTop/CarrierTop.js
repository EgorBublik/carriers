
const CarrierTop = ({register, errors}) => {
    return ( 
        <div className="carrier-info-top row">
            <div className="carrier-left col-5">
                <div className="carrier-name">
                    <label className="form-label h5">Название</label>
                    <input
                        {...register('name', { required: 'Поле обязательно к заполнению' })}
                        type="text"
                        name='name'
                        className="form-control" />
                    {errors?.name && <p style={{ color: '#ff0000' }}>{errors.name.message}</p>}
                </div>
                <br />
                <div className="carrier-type">
                    <h6>Типы А/М</h6>
                    <div className="form-check">
                        <div className="">
                            <div className="form-check-inline">
                                <label>
                                    <input
                                        className="form-check-input"
                                        {...register("type")}
                                        type="checkbox"
                                        value="Мал" />
                                    Мал
                                </label>
                            </div>
                            <div className="form-check form-check-inline">

                                <label>
                                    <input
                                        className="form-check-input"
                                        {...register("type")}
                                        type="checkbox"
                                        value="Сцепка" />
                                    Сцепка
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <div className="form-check-inline">
                                <label>
                                    <input
                                        className="form-check-input"
                                        {...register("type")}
                                        type="checkbox"
                                        value="Реф" />
                                    Реф
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label>
                                    <input
                                        className="form-check-input"
                                        {...register("type")}
                                        type="checkbox"
                                        value="Контейнеры" />
                                    Контейнеры
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <div className="form-check-inline">
                                <label>
                                    <input
                                        className="form-check-input"
                                        {...register("type")}
                                        type="checkbox"
                                        value="Тент" />
                                    Тент
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="carrier-contract">
                    <h6 className="">Договор</h6>

                    <label>
                        <input
                            {...register("contract")}
                            className="form-check-input"
                            type="radio"
                            name="contract"
                            value="С договором"
                            id="radioContract" />
                        Да
                    </label>

                    <label>
                        <input
                            {...register("contract")}
                            className="form-check-input"
                            type="radio"
                            name="contract"
                            value="Без договора"
                            id="radioContract" />
                        Нет
                    </label>
                </div>
            </div>
            <div className="comment col-7">
                <label className="form-label h5">Комментарии</label>
                <textarea
                    {...register('description')}
                    className="form-control"
                    rows="9"></textarea>
            </div>
        </div>
    )
}

export default CarrierTop