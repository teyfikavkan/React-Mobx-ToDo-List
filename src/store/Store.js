import {observable, computed, action } from "mobx";
import PageOneStore from './PageOneStore'
import PageTwoStore from './PageTwoStore'
import PageThreeStore from './PageThreeStore'

class MainStore {

    @observable pageOneStore = PageOneStore;
    @observable pageTwoStore = PageTwoStore;
    @observable pageThreeStore = PageThreeStore;
    @observable isPageChanged = false;
    
    @action setIsPageChanged(isPageChanged){this.isPageChanged = isPageChanged;}
    @action isPageChange(){return this.isPageChanged;}
    @action getPageOneStore(){return this.pageOneStore;}
    @action getPageTwoStore(){return this.pageTwoStore;}
    @action getPageThreeStore(){return this.pageThreeStore;}
}

const store = new MainStore();
export default store;