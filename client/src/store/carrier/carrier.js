import { makeAutoObservable } from "mobx"

export class Carrier {
    constructor() {
        makeAutoObservable(this)
    }
}