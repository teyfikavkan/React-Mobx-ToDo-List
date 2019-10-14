import {action, observable } from "mobx";

class PageThreeStore{
    @observable pageOneIsActive = false;

    @action setPageOneIsActive(isActive){ this.pageOneIsActive = isActive;}
    @action getPageOneIsActive(){return this.pageOneIsActive}
};

export default new PageThreeStore();