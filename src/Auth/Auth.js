import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated:false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb,100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb,100)
  }
}
class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render() {
    let { from } = this.props.location.state || { from: {pathname:'/'} }
    let { redirectToReferrer } = this.state
    if(redirectToReferrer) return <Redirect to={from} />
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}
const AuthButton = withRouter(({history})=> {
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"))
        }}
      >sign out</button>
    </p>
  ) : (
    <p>You are not login</p>
  )
})
function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/auth/public">Public Page</Link>
          </li>
          <li>
            <Link to="/auth/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/auth/public" component={Public} />
        <Route path="/auth/login" component={Login} />
        <PrivateRoute path="/auth/protected" component={Protected} />
      </div>
    </Router>
  )
}
function PrivateRoute({ component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{pathname:'/auth/login', state:{from:props.location}}}
        />
      ) }
    />
  )
}
function Public() {
  return <h3>Public</h3>;
}
function Protected() {
  return <h3>Protected</h3>;
}
export default AuthExample