import {action, observable } from "mobx";

class PageTwoStore{
    pageTwoIsActive = observable.box(false);

    @action setPageTwoIsActive(isActive){ this.pageTwoIsActive = isActive;}
    getPageTwoIsActive(){return this.pageTwoIsActive;}
};
export default new PageTwoStore();