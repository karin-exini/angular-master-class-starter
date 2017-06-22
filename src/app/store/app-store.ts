
import {Store, createStore, combineReducers} from "redux"
import {voteReducer} from "./votes/vote-reducer"
import {InjectionToken} from "@angular/core"
import {ROOT_REDUCER, ApplicationState} from "./root-reducer"

export const APP_STORE = new InjectionToken('app-store')

export function createAppStore() {
  return createStore(combineReducers(ROOT_REDUCER))
}

export interface AppStore {

}
