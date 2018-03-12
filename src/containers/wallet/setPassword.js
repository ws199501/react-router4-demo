import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  keyboardSubmit(key) {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div>
          <div onClick={() => this.keyboardSubmit()}>go back</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Password)
