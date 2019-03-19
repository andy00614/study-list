import React from 'react'
import { Input, Button, message } from 'antd'

class Checkout extends React.Component {
  state = {
    iptValue: ''
  }
  handleOnChange = (e) => {
    const value = e.target.value
    this.setState( {
      iptValue: value
    })
  }
  check = () => {
    const { iptValue } = this.state
    const reg = /^[2-9]\d{4,11}$/g
    const isQQ = reg.test(iptValue)
    if(isQQ) {
      message.success('校验正确')
    } else {
      message.error('校验错误')
    }
  }
  render() {
    return (
      <div>
        <Input 
          style={{width:'20vw'}}
          value={this.state.iptValue}
          onChange={this.handleOnChange}
          placeholder="请输入正确的QQ号码"
        />
        <Button
          type="primary"
          onClick={this.check}
        >校验</Button>
      </div>
    )
  }
}
export default Checkout