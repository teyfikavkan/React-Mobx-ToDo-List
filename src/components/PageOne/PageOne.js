import React, {Component} from 'react';
import PageOneChildOne from './PageOneChildOne'
import PageOneChildTwo from './PageOneChildTwo'
import PageOneChildThree from './PageOneChildThree'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
//import Splitter from 'm-react-splitters';
//import 'm-react-splitters/lib/splitters.css';

class PageOne extends Component{

    render(){
        console.log("PageOne Rendered");
        return(
            <SplitterLayout vertical={true} percentage={true} secondaryMinSize={93} primaryMinSize={7} primaryIndex={0}>
                <div style={{maxHeight:"200px",marginTop:"-25px"}}><PageOneChildOne/></div>
                <div>
                    <SplitterLayout>
                        <div><PageOneChildTwo/></div>
                        <div><PageOneChildThree/></div>
                    </SplitterLayout>
                </div>
            </SplitterLayout>
        );
    }
}

export default PageOne;