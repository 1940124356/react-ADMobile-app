import React from 'react';
import '@/assets/css/app.css';
import 'antd-mobile/dist/antd-mobile.css'
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS

import routes from '@/routes/'
import { HashRouter,Route,Redirect,Switch } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from '@/store/'

class App extends React.Component {

  // 创建route
  createRoutes(){
    let res=[]
    routes.map(ele=>{
      res.push(
        <Route key={ele.id} path={ele.path} component={ele.component}/>
      )
      return null
    })
    return res
  }
  render(){
    return (
      <HashRouter>
        <Provider store={store}>
        <Switch>
          {this.createRoutes()}
          <Redirect from="/*" to="/home"></Redirect>
        </Switch>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
