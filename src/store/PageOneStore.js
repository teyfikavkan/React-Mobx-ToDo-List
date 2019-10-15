import {action,configure , observable } from "mobx";

configure({enforceActions: true})

class PageOneStore{
    pageOneIsActive = observable.box(false);

    //@action setPageOneIsActive(isActive){ this.pageOneIsActive = isActive;}
    set pageOneIsActive(isActive){this._pageOneIsActive = isActive;}
    //getPageOneIsActive(){return this.pageOneIsActive}
    get pageOneIsActive(){return this._pageOneIsActive}
};

export default new PageOneStore();