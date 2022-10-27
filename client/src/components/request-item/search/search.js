import { useState, useEffect } from "react"
import { postPhone } from "../../api/api"

const Search = ({carriers}) => {

    const [carriersCheckboxState, setCarriersCheckboxState] = useState([])

    useEffect(() => {
        setCarriersCheckboxState(carriers)
    }, [])

    const postPhonesState = (e) => {
        e.preventDefault()
        const phoneState = []
        carriersCheckboxState.map((item) => {
            if (item?.isChecked) {
                item.contactFace.map((contactItem) => {
                    contactItem.phone.map((phoneItem) => {
                        phoneState.push({phone: phoneItem.replace(/[^0-9\.]+/g, "", '')})
                    })
                })
            }
        })
        console.log(phoneState)
        postPhone(phoneState)
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

    return <div>
        <div className='request-search'>
            <form >
                <button type='submit' onClick={postPhonesState}>testBtn</button>
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
                            <th>Название компании</th>
                            <th>Тип А/М</th>
                            <th>Менеджер</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carriersCheckboxState.map((item) => {
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