import {action, observable } from "mobx";

class PageThreeStore{
    @observable pageTwoIsActive = false;

    @action setPageTwoIsActive(isActive){ this.pageTwoIsActive = isActive;}
    @action getPageTwoIsActive(){return this.pageTwoIsActive;}
};
export default new PageThreeStore();