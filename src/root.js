import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import configureStore from './redux/configureStore'


import Main from './containers/main'
import Car from './containers/car'
import Wallet from './containers/wallet'
import User from './containers/user'
const store = configureStore()

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/wallet" component={Wallet}/>
              <Route path="/car" component={Car}/>
              <Route path="/user" component={User}/>
            </Switch>
          </BrowserRouter>
        </Provider>
      )
  }
}
