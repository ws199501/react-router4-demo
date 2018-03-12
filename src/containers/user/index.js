import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BindPhone from './bindPhone'

import './style.less'

export default class Wallet extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/user" component={BindPhone}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
