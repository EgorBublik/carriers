import { makeAutoObservable, runInAction } from "mobx"
import { getRequests as getRequestsAPI, deleteRequest as deleteRequestAPI} from "../../components/api/api"

export class RequestStore {
    
    requests = []
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    async getRequests() {
        this.isLoading = true;
        const result = await getRequestsAPI()
        const requests = result.data
        runInAction(() => {
            this.requests = requests
            this.isLoading = false;
        })
    }

    async removeRequest(id) {
        deleteRequestAPI(id)
    }
    
}

