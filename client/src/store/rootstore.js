import { CarrierStore } from "./carrier/carrierStore"
import { RouteStore } from "./route/routeStore";
import { useContext, createContext } from "react";

export class RootStore {
    
    constructor() {    
        this.carrierStore = new CarrierStore(this)
        this.routeStore = new RouteStore(this)
    }
}

const RootStoreContext = createContext({});
export const RootStoreProvider = RootStoreContext.Provider;
export const useStores = () => useContext(RootStoreContext);