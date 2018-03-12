
import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <div>
              <button onClick={() => this.props.history.push('/car')}>car</button>
              <br/>
              <button onClick={() => this.props.history.push('/wallet')}>wallet</button>
              <br/>
              <button onClick={() => this.props.history.push('/user')}>User</button>
              <br/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
