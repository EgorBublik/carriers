const Request = ({register, handleSubmit, saveRequest, navigate}) => {
    return <div className="request-form">
        <div className='row'>
            <div className="date-request row">
                <div className="col-5">
                    <label className="form-label h6">Первая дата:</label>
                    <input
                        {...register(`departure_date`)}
                        type="text"
                        className="form-control" />
                </div>
                <div className="col-5">
                    <label className="form-label h6">Вторая дата:</label>
                    <input
                        {...register(`arrival_date`)}
                        type="text"
                        className="form-control" />
                </div>
            </div>
            <div className="city-request row">
                <div className="col-5">
                    <label className="form-label h6">Город загрузки:</label>
                    <input
                        {...register(`departure_city`)}
                        type="text"
                        className="form-control" />
                </div>
                <div className="col-5">
                    <label className="form-label h6">Город выгрузки:</label>
                    <input
                        {...register(`arrival_city`)}
                        type="text"
                        className="form-control" />
                </div>
            </div>
            <div className='name-request request-form-item col-10'>
                <label className="form-label h6">Наименование груза:</label>
                <input
                    {...register(`name_cargo`)}
                    type="text"
                    className="form-control" />
            </div>
            <div className="weight-size-request row">
                <div className="col-5">
                    <label className="form-label h6">Вес груза:</label>
                    <input
                        {...register(`weight_cargo`)}
                        type="text"
                        className="form-control" />
                </div>
                <div className="col-5">
                    <label className="form-label h6">Объем груза:</label>
                    <input
                        {...register(`size_cargo`)}
                        type="text"
                        className="form-control" />
                </div>
            </div>
            <div className='checkbox-request request-form-item'>
                <label className="form-label h6">Типы А/M:</label> <br />
                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className="form-check-input"
                            {...register("type")}
                            type="checkbox"
                            value="Тип1" />
                        Тип1
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className="form-check-input"
                            {...register("type")}
                            type="checkbox"
                            value="Тип2" />
                        Тип2
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className="form-check-input"
                            {...register("type")}
                            type="checkbox"
                            value="Тип3" />
                        Тип3
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className="form-check-input"
                            {...register("type")}
                            type="checkbox"
                            value="Тип4" />
                        Тип4
                    </label>
                </div>
            </div>
            <div className="price-request row">
                <label className="form-label h6">Сумма фрахта:</label>
                <div className="col-1">
                    <select
                        {...register('currency')}
                        className="form-select mb-3">
                        <option value="$">$</option>
                        <option value="€">€</option>
                        <option value="₽">₽</option>
                    </select>
                </div>
                <div className="col-4">
                    <input
                        {...register(`freight`)}
                        type="text"
                        className="form-control" />
                </div>
            </div>
            <div className="comment-request request-form-item col-10">
                <label className="form-label h6">Особые условия(комментарий):</label>
                <input
                    {...register(`comment`)}
                    type="text"
                    className="form-control" />
            </div>
            <div className="btn-block row">
                <div className="col-5">
                    <button type="submit" className="btn btn-success btn-block-item" onClick={handleSubmit(saveRequest)}>
                        Сохранить
                    </button>
                </div>
                <div className="col-5">
                    <button type="submit" className="btn btn-secondary btn-block-item" onClick={() => navigate('/request')}>
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>;
}

export default Request