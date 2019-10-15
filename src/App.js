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
      console.log("App Rendered");
      if(this.props.MainStore.getPageOneStore().pageOneIsActive.get()){
        return(
          <PageOne/>
        );
      }
      else if(this.props.MainStore.getPageTwoStore().pageTwoIsActive.get()){
        return(
          <PageTwo MainStore={this.props.MainStore}/>
        );
      }
      else if(this.props.MainStore.getPageThreeStore().getPageThreeIsActive()){
        return(
          <PageThree MainStore={this.props.MainStore}/>
        );
      }
      else{
        return(
          <PageManager MainStore={this.props.MainStore}/>
          );
      }
  }
}

export default App;
