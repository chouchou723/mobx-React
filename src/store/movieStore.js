import {observable, action, computed, runInAction} from 'mobx';
export class movieStore {
    @observable movieList = ['pending'];
    @action.bound
    setValue(key, event) {
        this[key] = event;
      }
    
}