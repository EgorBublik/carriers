import { makeAutoObservable, runInAction } from "mobx"
import { getRoutes as getRoutesAPI, deleteRoute as deleteRouteAPI} from "../../components/api/api"

export class RouteStore {
    
    routes = []
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    async getRoutes() {
        this.isLoading = true;
        const result = await getRoutesAPI()
        const routes = result.data
        runInAction(() => {
            this.routes = routes
            this.isLoading = false;
        })
    }

    async removeRoute(id) {
        deleteRouteAPI(id)
    }
    
}

