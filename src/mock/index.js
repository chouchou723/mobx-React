import {observable,computed,action} from 'mobx';

class VM{
    @observable firstName = '12';
    @observable lastName = '34';
    
    @computed get fullName(){
        const {firstName,lastName} = this;
        if(!firstName && !lastName){
            return 'plz input ur name';
        }else{
            return firstName + ' ' + lastName
        }
    }
    @action.bound
    setValue(key,event){
        console.log(key,event)
        this[key] = event
    }
    @action.bound
    doReset() {
        this.firstName = "";
        this.lastName = "";
  }


}


const vm = new VM();
export default vm;