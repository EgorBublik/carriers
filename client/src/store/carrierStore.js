import { makeAutoObservable, runInAction } from "mobx"
import { getCarriers as getCariersAPI, deleteCarrier as deleteCarrierAPI} from "../components/api/api"

export class CarrierStore {
    
    carriers = []
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    async getCarriers() {
        this.isLoading = true;
        const result = await getCariersAPI()
        const carriers = result.data
        
        runInAction(() => {
            this.carriers = carriers
            this.isLoading = false;
        })
    }

    async removeCarrier(id) {
        deleteCarrierAPI(id)
    }
    
}

