import React from 'react'
import Hello from './Hello'
import StateInTs from './TsInState'

class HelloIndex extends React.Component {
  render() {
    return (
      <div>
        {/* 如果这个文件不是ts并且传入的参数不符合ts定义的接口形式，它并不会报错 */}
        <Hello name="andy" enthusiasmLevel={7}/>
        <hr/>
        <StateInTs name="state"/>
      </div>
    )
  }
}

// class HelloIndexTs extends React.Component<Props,object> {
// }

export default HelloIndex