import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import menuList from './routerList'

import { Provider } from 'react-redux'
import styles from './index.module.scss'
import { store } from './redux/index'
class App extends Component {
  renderRoute = () => {
    return menuList.map(item => <Route key={item.path} path={`/${item.path}`} component={item.component} />)
  }
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
