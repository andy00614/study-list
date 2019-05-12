import React from 'react'
import Refresh from './Refresh'
import { Button } from 'antd'

export default class RefreshF extends React.Component {
  state = {
    status:{
      a:1
    }
  }
  btnClick = () => {
    this.forceUpdate()
  }
  render() {
    console.log(this.state.status)
    return (
      <div>
        <Refresh 
          status={this.state.status}
        />
        <Button onClick={this.btnClick}>刷新</Button>
      </div>
    )
  }
}