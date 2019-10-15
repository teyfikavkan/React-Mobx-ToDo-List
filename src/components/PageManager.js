import React,{Component} from 'react';
import {action} from "mobx";

class PageManager extends Component{
    @action
    changePageOneIsActive = isActive =>{
        //console.log(this.props.MainStore.getPageOneStore().getPageOneIsActive());
        //this.props.MainStore.getPageOneStore().setPageOneIsActive(isActive);
        this.props.MainStore.getPageOneStore().pageOneIsActive.set(isActive);
    }

    @action
    changePageTwoIsActive = isActive =>{
        //console.log(this.props.MainStore.getPageTwoStore().getPageTwoIsActive());
        this.props.MainStore.getPageTwoStore().pageTwoIsActive.set(isActive);
    }

    changePageThreeIsActive = isActive =>{
        //console.log(this.props.MainStore.getPageThreeStore().getPageThreeIsActive());
        this.props.MainStore.getPageThreeStore().setPageThreeIsActive(isActive);
    }
   
        
    
    render(){
        return(
            <div >
                <div><button onClick={() => this.changePageOneIsActive(true)}>PageOneSetActive</button></div>
                <div><button onClick={() => this.changePageTwoIsActive(true)}>PageTwoSetActive</button></div>
                <div><button onClick={() => this.changePageThreeIsActive(true)}>PageThreeSetActive</button></div>
            </div>
        );
    }


}

export default PageManager;