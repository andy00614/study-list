import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lifecycle from './Lifecycle/Lifecycle'
import Clock from './Clock/Clock'
import PureComponentDemo from './Lifecycle/PureComponent'
import MyUpload from './upload/Upload'
import TabSelector from './tab-selector/TabSelector'
import styles from './index.module.scss'

const menuList = [
  {
    name: 'clock',
    path: 'clock',
    component: Clock,
  },{
    name: 'Lifecycle',
    path: 'Lifecycle',
    component: Lifecycle,
  },{
    name: 'PureComponentDemo',
    path: 'PureComponentDemo',
    component: PureComponentDemo,
  },
  {
    name: 'upload-antd',
    path: 'upload',
    component: MyUpload,
  },
  {
    name: 'tab-selector',
    path: 'selector',
    component: TabSelector,
  }
]
class App extends Component {
  renderRoute = () => {
    return menuList.map(item => <Route key={item.path} path={`/${item.path}`} component={item.component} />)
  }
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <aside>
            <h3>Menu</h3>
            <ul>
              {
                menuList.map(item => {
                  return <li key={item.name}>
                    <Link to={`/${item.path}`}>{item.name}</Link>
                  </li>
                })
              }
            </ul>
          </aside>
          <main>
            {this.renderRoute()}
          </main>
        </div>
      </Router>
      
    );
  }
}

export default App;
