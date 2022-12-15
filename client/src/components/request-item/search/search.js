import { useState, useEffect } from "react"
import { postPhone } from "../../api/api"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";

const Search = ({carriers}) => {

    const [carriersCheckboxState, setCarriersCheckboxState] = useState([])

    const { register, handleSubmit } = useForm( {
    });
    const [errors, setErrors] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setErrors('')
        setShow(false)
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCarriersCheckboxState(carriers)
    }, [])

    const postPhonesState = async (data) => {
        const phoneState = []
        carriersCheckboxState.map((item) => {
            if (item?.isChecked) {
                item.contactFace.map((contactItem) => {
                    contactItem.phone.map((phoneItem) => {
                        phoneState.push({phone: phoneItem.replace(/[^0-9\.]+/g, "", '')}) // Оставляет только цифры
                    })
                })
            }
        })
        try {
            await postPhone(phoneState, data.textViber)
            handleClose()
        } catch (e) {
            setErrors('Что-то пошло не так. Сообщение не доставлено')
        }
    }

    const handleChange = (e) => {
        
        const { name, checked } = e.target
        
        if (name === "allSelect") {
            
            let tempCarriers = carriersCheckboxState.map((item) => {
                return { ...item, isChecked: checked }
            })

            setCarriersCheckboxState(tempCarriers)
        
        } else {

            let tempCarriers = 
                carriersCheckboxState.map((item) =>
                    item.name === name ? { ...item, isChecked: checked } : item
                )
            setCarriersCheckboxState(tempCarriers)
        }
    }

    const checkboxTrueCount = () => {
        let count = 0
        carriersCheckboxState.map((item) => {
            if (item.isChecked) count++
        })
        return count
    }

    return <div>
        <div className='request-search'>
            <form >
                <Button variant="primary" onClick={handleShow}>
                    Текст рассылки Viber
                </Button>

                <Modal show={show} onHide={handleClose}>
                    
                    
                    <Modal.Body>
                    <div class="form-group">
                        <textarea 
                            class="form-control" 
                            {...register("textViber")}
                            id="exampleFormControlTextarea1" 
                            rows="4" 
                            placeholder="Введите текст рассылки"></textarea>
                    </div>
                    {errors && <p style={{color:'red'}}>{errors}</p>}   
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={handleSubmit(postPhonesState)}>
                            Отправить рассылку Viber
                        </Button>
                    </Modal.Footer>
                </Modal>
                <table className=" table table-hover">
                    <thead>
                        <tr>
                            <td className='request-checkbox'>
                                <input 
                                    type="checkbox" 
                                    className='form-check-input'
                                    name="allSelect"
                                    checked={!carriersCheckboxState.some((item) => item?.isChecked !== true)}
                                    onChange={handleChange}
                                />
                            </td>
                            <th>{checkboxTrueCount()}</th>
                            <th>Название компании</th>
                            <th>Тип А/М</th>
                            <th>Менеджер</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carriersCheckboxState.map((item, index) => {
                            return (
                                <tr>
                                    <td className='request-checkbox'>                                        
                                        <input type="checkbox"
                                            className='form-check-input'
                                            name={item.name}
                                            checked={item?.isChecked || false}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.type.map(element => `${element} `)}</td>
                                    <td>{item.contactFace.map(element => {
                                        return (
                                            <>
                                                {`${element.name}`} <br/>  
                                            </>
                                            
                                        )
                                        
                                    })}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
        
    </div>
}

export default Search