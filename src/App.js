import React, { Component } from 'react';
import {  HashRouter,Route, Link, Redirect } from "react-router-dom";
import menuList from './routerList'
import { Provider } from 'react-redux'
import styles from './index.module.scss'
import { store } from './redux/index'
// import 'normalize.css'

// const history = createBrowserHistory()

class App extends Component {
  renderRoute = () => {
    return menuList.map(item => <Route key={item.path} path={`/${item.path}`} component={item.component} />)
  }
  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <HashRouter>
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
              {<Redirect to={`/form`} />}
            </main>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
