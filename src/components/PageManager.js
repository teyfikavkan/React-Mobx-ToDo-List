import React,{Component} from 'react';

class PageManager extends Component{
    changePageOneIsActive = isActive =>{
        //console.log(this.props.MainStore.getPageOneStore().getPageOneIsActive());
        this.props.MainStore.getPageOneStore().setPageOneIsActive(isActive);
        this.props.MainStore.setIsPageChanged(true);
    }

    changePageTwoIsActive = isActive =>{
        //console.log(this.props.MainStore.getPageTwoStore().getPageTwoIsActive());
        this.props.MainStore.getPageTwoStore().setPageTwoIsActive(isActive);
        this.props.MainStore.setIsPageChanged(true);
    }

    changePageThreeIsActive = isActive =>{
        //console.log(this.props.MainStore.getPageThreeStore().getPageThreeIsActive());
        this.props.MainStore.getPageThreeStore().setPageThreeIsActive(isActive);
        this.props.MainStore.setIsPageChanged(true);
    }

    render(){
        return(
            <div>
                <button onClick={() => this.changePageOneIsActive(true)}>PageOneSetActive</button>
                <button onClick={() => this.changePageTwoIsActive(true)}>PageTwoSetActive</button>
                <button onClick={() => this.changePageThreeIsActive(true)}>PageThreeSetActive</button>
            </div>
        );
    }


}

export default PageManager;