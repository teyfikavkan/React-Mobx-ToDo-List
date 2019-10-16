import React,{Component} from 'react';

class PageOneChildTwo extends Component{
    addUser = event =>{
        console.log(event);
    }
    render(){
       console.log('%c PageOneChildTwo Rendered', 'background: #FF0800; color: #FFFFFF');
       return(
                <div>
                    <h5>PageOneChildTwo</h5>
                    <form>
                        First Name <input type="text" name="firstname"/>
                        <br/>
                        Last Name<input type="text" name="lastname"/>
                    </form>
                    <button onClick={() => this.addUser(event)}>Add User</button>
                </div>
       ); 
    }
}

export default PageOneChildTwo;