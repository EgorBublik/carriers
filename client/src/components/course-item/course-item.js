import './course-item.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const CourseItem = () => {

    const [addSynonym, setAddSynonym] = useState([])

    const removeItem = (id) => {
        setAddSynonym([...addSynonym.filter((item) => item.id !== id)])
    }

    const handleAddSynonym = () => {
        const newItem = {
            id: Math.random(),
        }
        setAddSynonym([...addSynonym, newItem])
    }

    return (
        <div className="container">
            <div className="main-stream">
                <h2>Основное направление:</h2>
                <div className="row">
                    <div className="col-5">
                        <label className="form-label">Город отправки:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"/>
                    </div>
                    <div className="col-5">
                        <label className="form-label">Пункт Назначения:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2"/>
                    </div>
                </div>
            </div>
            <div className="secondary-stream">
                <div className="row">
                    <div className="col-6">
                        <h2>Синоним:</h2>
                    </div>
                    <div className="add-course-btn col-4">
                        <button type="button" onClick={() => handleAddSynonym()} className="btn btn-primary">Новое направление</button>
                    </div>   
                </div>
                
                <div className="synonym-group">
                    {addSynonym.map((item) => {
                        return (
                            <div className="row" key={item.id}>
                                <div className="col-5">
                                    <label className="form-label">Город отправки:</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput"/>
                                </div>
                                <div className="col-5">
                                    <label className="form-label">Пункт Назначения:</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2"/>
                                </div>
                                <div className="col-1 course-item-delete">
                                    <FontAwesomeIcon className='course-item-delete-icon' onClick={() => removeItem(item.id)} icon={faX} />
                                </div>
                            </div>
                        )
                    })}
                </div>

               
                
            </div>
            <div className="course-item-save col-10">
                <button type="button" className="btn btn-success">Сохранить</button>
            </div>
        </div>
    )
}

export default CourseItem