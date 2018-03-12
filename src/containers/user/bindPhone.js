import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.less'

class BindPhone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gotCaptcha: false,
      num: 60,
      captcha: 0,
      phone: 0,
      password: '',
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeer)
  }

  handlergetCaptcha() {
    this.setState({gotCaptcha: true})
    this.timeer = setInterval(() => {
      if(this.state.num < 1) {
        this.setState({gotCaptcha: false, num: 60})
        clearInterval(this.timeer)
      }
      this.setState({num: this.state.num - 1})
    }, 1000)
  }


  handlerCheck() {
    this.props.history.push('/car')
    this.props.history.go()
  }

  render() {
    return (
      <div className="bindPhone">
        <div className="title">请绑定您的手机号码：</div>
        <div className="phone">
          <span className="head">手机号码：</span>
          <input
            type="number"
            placeholder="请输入手机号码"
            onChange={e => this.setState({phone: e.target.value})}
          />
        </div>
        <div className="sent">
          <div className="captcha">
            <span className="head">验证码：</span>
            <input
              className="input"
              type="number"
              placeholder="请输入验证码"
              onChange={e => this.setState({captcha: e.target.value})}
            />
          </div>
          <div className="buttonBox">
            {
              this.state.gotCaptcha ?
                <button
                  className="setbutton"
                  disabled
                >{`${this.state.num}秒`}</button>
              :
                <button
                  className="setbutton"
                  onClick={() => this.handlergetCaptcha()}
                >获取验证码</button>
            }
          </div>
        </div>
        <div className="phone">
          <span className="head">密码：</span>
          <input
            placeholder="请输入密码"
          />
        </div>
        <div className="nextbutton">
          <div className="link" onClick={() => this.handlerCheck()}>下一步</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BindPhone)
