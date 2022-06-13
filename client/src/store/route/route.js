import { makeAutoObservable } from "mobx"

export class Route {
    constructor() {
        makeAutoObservable(this)
    }
}