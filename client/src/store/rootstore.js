import { CarrierStore } from "./carrierStore"
import { useContext, createContext } from "react";

export class RootStore {
    
    constructor() {    
        this.carrierStore = new CarrierStore(this)
    }
}

const RootStoreContext = createContext({});
export const RootStoreProvider = RootStoreContext.Provider;
export const useStores = () => useContext(RootStoreContext);