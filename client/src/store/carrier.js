import { makeAutoObservable } from "mobx"

export class Carrier {
    name
    _id
    phone

    constructor() {
        makeAutoObservable(this)
    }
}