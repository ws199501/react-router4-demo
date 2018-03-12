import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  Route, BrowserRouter, Switch, Link } from 'react-router-dom'

import One from './one'
import Two from './two'

class Car extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <BrowserRouter basename="/car">
        <div>
          <div>
            <Link to="one">to="one" </Link><br />
            <Link to="/two"> to="/two" </Link>
          </div>
          <Switch>
            <Route path="/one" component={One}/>
            <Route path="/two" component={Two}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Car)
