import { useForm } from "react-hook-form";

const RouteForm = ({ key, update, index, value, remove }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    return (
        <form key={key} className="add-form1">
            <div className="modal-body">
                <div className="">
                    <select
                        {...register('typeRoute')}
                        className="form-select mb-3">
                        <option value="Экспорт">Экспорт</option>
                        <option value="Импорт">Импорт</option>
                    </select>
                </div>
                <br/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Страна выезда"
                    {...register('countryDeparture')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Область выезда"
                    {...register('regionDeparture')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Город выезда"
                    {...register('cityDeparture')}/>
                <br/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Страна прибытия"
                    {...register('countryRoute')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Область прибытия"
                    {...register('regionRoute')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Город прибытия"
                    {...register('cityRoute')}/>
            </div>
            <div className="modal-footer">
            <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button onClick={handleSubmit((data) => update(index, data))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
            </div>
        </form>
    )
}

export default RouteForm