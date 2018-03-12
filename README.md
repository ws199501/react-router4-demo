* react-router 使用

* router是放置的位置即页面显示的位置！
* path="/" 的页面为进入该页面首先显示的页面！

```
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'    //包
import configureStore from './redux/configureStore'

import Main from './containers/main'         //引入页面
import Car from './containers/car'
import Wallet from './containers/wallet'
import User from './containers/user'
const store = configureStore()              //页面store

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //写router
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

```
* main 页面
* router4自己自带history
* push 和 replace 区别，新增 和 替代 当前页面
* 这里的push直接会改变router并且刷新页面。
```

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

```
* user页面
* 这里的push直接会改变router但是不会刷新页面！
* 想要刷新页面做法可以是： history.go()！个人觉得很方便。（其他方式网上一般都是安装其他依赖去解决。）
```
this.props.history.push('/car')
this.props.history.go()
```
