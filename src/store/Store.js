import {observable, configure, computed, action } from "mobx";
import PageOneStore from './PageOneStore'
import PageTwoStore from './PageTwoStore'
import PageThreeStore from './PageThreeStore'

//configure({enforceActions: true})

class MainStore {

    @observable pageOneStore = PageOneStore;
    @observable pageTwoStore = PageTwoStore;
    @observable pageThreeStore = PageThreeStore;
    
    getPageOneStore(){return this.pageOneStore;}
    getPageTwoStore(){return this.pageTwoStore;}
    getPageThreeStore(){return this.pageThreeStore;}
}

const store = new MainStore();
export default store;