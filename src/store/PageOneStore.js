import {action,configure , observable } from "mobx";

configure({enforceActions: true})

class PageOneStore{
    pageOneIsActive = observable.box(false);
    @observable name ="None";
    @observable age ="0";
    
    @action setName(name){this.name = name;}
    getName(){return this.name;}

    @action setAge(age){this.age = age;}
    getAge(){return this.age;}

    //@action setPageOneIsActive(isActive){ this.pageOneIsActive = isActive;}
    set pageOneIsActive(isActive){this._pageOneIsActive = isActive;}
    //getPageOneIsActive(){return this.pageOneIsActive}
    get pageOneIsActive(){return this._pageOneIsActive}
};

export default new PageOneStore();