import React from 'react'
import _ from 'lodash'

export default class LoadshDemo extends React.PureComponent {
  componentDidMount() {
    const arr = ['a','b','c','d']
    const result = _.chunk(['a','b','c','d'],2)
    console.log(result)
  }
  render() {
    return (
      <h2>LodashDemo(see console)</h2>
    )
  }
}