import React,{Component} from 'react';
import {action} from "mobx";
import { inject, observer } from 'mobx-react';

@inject('MainStore')
@observer
class PageOneChildOne extends Component{

    @action
    returnToMain = () =>{
        //this.props.MainStore.getPageOneStore().setPageOneIsActive(false);
        this.props.MainStore.getPageOneStore().pageOneIsActive.set(false);
    }

    render(){
       console.log('%c PageOneChildOne Rendered', 'background: #0012E7; color: #FFF700');
       return(
                <div>
                    <h5>PageOneChildOne</h5>
                    <button onClick={() => this.returnToMain()}>Return To Main</button>
                </div>
       ); 
    }
}

export default PageOneChildOne;