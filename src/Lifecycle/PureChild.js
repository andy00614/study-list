import React from 'react'
export default class PureChild extends React.PureComponent {
  render() {
    console.log('PureChild-render')
    return (
      <div>
        {this.props.inputValue}
      </div>
    )
  }
}
