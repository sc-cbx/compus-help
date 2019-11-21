import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,withRouter} from 'react-router-dom';


import Personal from './Personal/personal';
import Main from './containers/main/main'



  class IndexPage extends React.Component{
    render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Personal}></Route>
            <Route path="personal" component={Personal}></Route>
            <Route component={Main}/>{/*默认路由*/}
          </Switch>
        </BrowserRouter>
      </div>
    )
    }
  }
  export default withRouter(IndexPage)

  ReactDOM.render(<IndexPage/>,document.getElementById('root'));
