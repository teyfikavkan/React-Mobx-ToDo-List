import React, {Component} from 'react';
class PageThree extends Component{
    
    returnToMain = () =>{
        //this.props.MainStore.getPageOneStore().setPageOneIsActive(false);
        this.props.MainStore.getPageThreeStore().setPageThreeIsActive(false);
    }

    render(){
        console.log("PageThree Rendered");
        return(
            <div>
                <h1>PageThree</h1>
                <button onClick={() => this.returnToMain()}>Return To Main</button>
            </div>
        );
    }
}

export default PageThree;