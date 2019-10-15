import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import {action} from "mobx";

@inject('MainStore')
@observer
class PageOne extends Component{

    @action
    returnToMain = () =>{
        //this.props.MainStore.getPageOneStore().setPageOneIsActive(false);
        this.props.MainStore.getPageOneStore().pageOneIsActive.set(false);
    }

    render(){
        console.log("PageOne Rendered");
        return(
            <div>
                <h1>PageOne</h1>
                <button onClick={() => this.returnToMain()}>Return To Main</button>
            </div>
        );
    }
}

export default PageOne;