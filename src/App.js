import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import PageManager from './components/PageManager'


@inject('MainStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      console.log("here");
      if(this.props.MainStore.isPageChange()){
        if(this.props.MainStore.getPageOneStore().getPageOneIsActive()){
          return(
            <PageOne/>
          );
        }
        else if(this.props.MainStore.getPageTwoStore().getPageTwoIsActive()){
          return(
            <PageTwo/>
          );
        }
        else if(this.props.MainStore.getPageThreeStore().getPageThreeIsActive()){
          return(
            <PageThree/>
          );
        }
      }
      else{
        return(
          <PageManager MainStore={this.props.MainStore}/>
          );
      }
  }
}

export default App;
