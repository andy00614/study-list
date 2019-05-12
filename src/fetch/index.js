import React from 'react'

export default class Fetch extends React.Component {
  render() {
    let mapList = {}
    fetch('/mock.json').then(res => {
      // console.log(res)
      return res.json()
    })
    .then(res => {
      console.log(res)
      mapList = res
    }).then(() => {
      console.log(mapList)
    })
    return (
      <div>Fetch</div>
    )
  }
}