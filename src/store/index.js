
import {configure, observable, computed} from 'mobx';
import {movieStore} from './movieStore';
 
configure({enforceActions: 'observed'});
 
export default class store {
    @observable movieStore;
 
    constructor() {
        this.movieStore = new movieStore(this);
    }
}
