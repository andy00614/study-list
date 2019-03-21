import React from 'react'
import { Input, Button, message, Spin, Icon } from 'antd'
import styles from './index.module.scss'

interface State{
  iptValue:string
  status: string
  password: string
  loadding: boolean
}
const REG_TIPS = 'register now!'
const LOGIN_TIPS = 'login now!'
export default class Log extends React.Component<object,State> {
  tips:string = REG_TIPS
  title:string = '登录系统'
  loadding:boolean = false
  state:State = {
    iptValue:'',
    status: 'login',
    password: '',
    loadding: false
  }
  usernameChange = (e:{target:{value:string}}):void => {
    const { value } = e.target
    this.setState({
      iptValue: value,
    })
  }
  passwordChange = (e:{target:{value:string}}):void => {
    const { value } = e.target
    this.setState({
      password: value,
    })
  }
  submit = () => {
    const username: string = this.state.iptValue
    const password: string = this.state.password
    const w = this.state.status === 'login' ? 'login' : 'reg'
    let params: RequestInit = {
      method: "GET",
      // headers: {'Accept': 'application/json'}
    }
    fetch(`http://localhost:7777/${w}?username=${username}&password=${password}`)
    .then((res:any) => {
      // console.log(res.json()) 这个切记不能有，因为res.json之后res就变了
      return res.json() 
    })
    .then((json:any) => {
      if(json.error === 0) {
        message.success(json.msg)
      } else {
        message.error(json.msg)
        if(json.msg === '该用户名未注册，请注册') {
          this.setState({
            loadding:true
          })
          setTimeout(() => {
            this.tips = LOGIN_TIPS
            this.title = '注册系统'
            this.setState({
              status: 'regist',
              loadding: false,
            })
          }, 2000);
        }
      }
    })
  }
  switchStatus = (e:any) => {
    e.preventDefault() 
    const status = this.state.status === 'login' ? 'regist' : 'login'
    this.tips = status === 'login' ? REG_TIPS : LOGIN_TIPS
    this.title = status === 'login' ? '登录系统' : '注册系统'
    this.setState({
      status
    })
  }
  render() {
    const { iptValue, status, password } = this.state
    return (
      <Spin size="large" spinning={this.state.loadding} tip="跳转注册页面..." >
        <div className={styles.container}>
        <h2>{this.title}</h2>
        <section className={styles.username}>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            value={iptValue}
            onChange={this.usernameChange}
            placeholder="username"
          />
        </section>
        <section className={styles.password}>
          <Input 
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={password}
            onChange={this.passwordChange}
            type="password"
            placeholder="password"
          />
        </section>
        <section className={styles.btnBox}>
          <Button
            onClick={this.submit}
            type="primary"
            className={styles.btn}
          >
            {
              status === 'login' ? 'log in' : 'regist'
            }
          </Button>
        </section>
        <div className={styles.tips}>
          Or
          {
            <a className={styles.tipsa} onClick={this.switchStatus}>{this.tips}</a> 
          }
        </div>
      </div>
      </Spin>
      // dev
    )
  }
}
