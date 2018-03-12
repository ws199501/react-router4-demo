import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class One extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        ----》One
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
export default connect(mapStateToProps, mapDispatchToProps)(One)
