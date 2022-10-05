import './request-item.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useStores } from '../../store/rootstore'; 
import { createRequest, updateRequest } from '../api/api';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Request from './request/request'
import Search from './search/search';

const RequestItem = observer(() => {
    const store = useStores()

    const carriers = store.carrierStore.carriers
    const requests = store.requestStore.requests
    
    const [updatesRequest, setUpdatesRequest] = useState(0)
    const [isActiveSearch, setIsActiveSearch] = useState()
    const [filterCarriers, setFilterCarriers] = useState([])

    const navigate = useNavigate()
    const {itemIndex} = useParams()

     

    useEffect(() => {
        setIsActiveSearch('new-request')
        if (itemIndex) {
            setIsActiveSearch('edit-request')
        }
    }, [updatesRequest])
    
    useEffect(() => {
        if (itemIndex) {
            const types = requests[itemIndex].type  
            const countryDeparture = requests[itemIndex].countryDeparture
            const countryArrival = requests[itemIndex].countryArrival
            if ( countryArrival == 'РБ' && countryDeparture == 'РБ') {
                setFilterCarriers(carriers
                    .filter((item) => item.type.some((type) => types.includes(type)))
                    .filter((item) => item.route.some((routeItem) => countryDeparture.includes(routeItem.typeRoute)))
                )    
            } else {
                setFilterCarriers(carriers
                    .filter((item) => item.type.some((type) => types.includes(type)))
                    .filter((item) => item.route.some((routeItem) => countryDeparture.includes(routeItem.countryDeparture)))
                    .filter((item) => item.route.some((routeItem) => countryArrival.includes(routeItem.countryRoute)))
                )
            }
        }
    }, [carriers])

    useEffect(() => {
        if (isActiveSearch) store.carrierStore.getCarriers()
    }, [isActiveSearch])

    const { register, handleSubmit } = useForm({
        defaultValues: {
        ...requests[itemIndex]
        }
    });
   
    const saveRequest = async (data) => {
        if (itemIndex) {
            await updateRequest(data)
        } else {
            await createRequest(data)
        }
        navigate("/request")
    }

    return (
        <div className="container">
            <div className="request-header">
                { itemIndex && 
                    <>
                        <span className={classNames('request-header-active', { 'request-active': (isActiveSearch === 'edit-request') })} onClick={() => setIsActiveSearch('edit-request')}>Заявка</span>
                        <span>/</span>
                        <span className={classNames('request-header-active', { 'request-active': (isActiveSearch === 'edit-search') })} onClick={() => setIsActiveSearch('edit-search')}>Поиск подрядчика</span>
                    </>
                }
                { !itemIndex && 
                    <h3>Заявка</h3>
                }
            </div>
            {(isActiveSearch === 'edit-request') && <Request register={register} handleSubmit={handleSubmit} saveRequest={saveRequest} navigate={navigate}/>}
            {(isActiveSearch === 'new-request') && <Request register={register} handleSubmit={handleSubmit} saveRequest={saveRequest} navigate={navigate}/>}
            {(isActiveSearch === 'edit-search') && <Search carriers={filterCarriers}/>}
        </div>
    )

    
})


export default RequestItem


