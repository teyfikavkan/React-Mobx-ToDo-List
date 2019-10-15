import {action, observable } from "mobx";

class PageThreeStore{
    @observable pageThreeIsActive = false;

    @action setPageThreeIsActive(isActive){ this.pageThreeIsActive = isActive;}
    getPageThreeIsActive(){return this.pageThreeIsActive};
};
export default new PageThreeStore();