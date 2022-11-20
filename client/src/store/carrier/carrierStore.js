import { makeAutoObservable, runInAction } from "mobx"
import { getCarriers as getCariersAPI, deleteCarrier as deleteCarrierAPI} from "../../components/api/api"

export class CarrierStore {
    
    carriers = []
    isLoading = true

    constructor() {
        makeAutoObservable(this)
    }

    setCarriers(carriers) {
        this.carriers = carriers
        console.log(this)
    }

    setLoading(isLoading) {
        this.isLoading = isLoading
    }

    async getCarriers() {
        
        this.setLoading(true)
        const result = await getCariersAPI()
        const carriers = result.data
        
        // runInAction(() => {
            this.setCarriers(carriers)
            this.setLoading(false);

        // })
    }

    async removeCarrier(id) {
        deleteCarrierAPI(id)
    }

    allCarriers() {
        return this.carriers
    console.log()
    } 
}

