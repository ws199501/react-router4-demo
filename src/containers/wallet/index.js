import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Pass from './setPassword'

export default class Wallet extends Component {
    render() {
        return (
          <BrowserRouter basename="wallet">
            <div>
              <Switch>
                <Route path="/" component={Pass}/>
              </Switch>
            </div>
          </BrowserRouter>
        )
    }
}
