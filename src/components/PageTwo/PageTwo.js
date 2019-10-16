import React, {Component} from 'react';
import {action} from "mobx";

class PageTwo extends Component{

    @action
    returnToMain = () =>{
        //this.props.MainStore.getPageOneStore().setPageOneIsActive(false);
        this.props.MainStore.getPageTwoStore().pageTwoIsActive.set(false);
    }

    render(){
        console.log("PageTwo Rendered");
        return(
            <div>
                <h1>PageTwo</h1>
                <button onClick={() => this.returnToMain()}>Return To Main</button>
            </div>
        );
    }
}

export default PageTwo;