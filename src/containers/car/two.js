import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Two extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        ----》 Two
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Two)
