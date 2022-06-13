import { useForm } from "react-hook-form";

const RouteForm = ({ key, update, index, value, remove }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    return (
        <form key={key} className="add-form1">
            <div className="modal-body">
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Имя"
                    {...register('departure')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Направление"
                    {...register('route')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Стоимость"
                    {...register('price')}/>

            </div>
            <div className="modal-footer">
            <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button onClick={handleSubmit((data) => update(index, data))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
            </div>
        </form>
    )
}

export default RouteForm