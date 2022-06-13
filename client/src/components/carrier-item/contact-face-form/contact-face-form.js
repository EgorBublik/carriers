import { useForm } from "react-hook-form";

const ContactFaceForm = ({ key, update, index, value, remove, control }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    return (
        <form key={key} className="add-form">
            <div className="modal-body">
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Имя"
                    {...register('firstname')}/>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="Фамилия"
                    {...register('lastname')}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Должность" 
                    {...register("position")}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="E-mail" 
                    {...register("email")}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Телефон" 
                    {...register("phone")}/>
            </div>
            <div className="modal-footer">
                <button onClick={() => remove(index)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button onClick={handleSubmit((data) => update(index, data))} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
            </div>
        </form>
    )
}

export default ContactFaceForm;

