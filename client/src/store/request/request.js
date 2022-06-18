import { makeAutoObservable } from "mobx"

export class Request {
    constructor() {
        makeAutoObservable(this)
    }
}