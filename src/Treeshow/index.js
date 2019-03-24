import React from 'react'
import Treeshow from './Treeshow'

const data = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0', children:null },
      { title: '0-0-0-1', key: '0-0-0-1', children:null },
      { title: '0-0-0-2', key: '0-0-0-2', children:null },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0', children:null },
      { title: '0-0-1-1', key: '0-0-1-1', children:null },
      { title: '0-0-1-2', key: '0-0-1-2', children:null },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
    children: null
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0', children:null },
    { title: '0-1-0-1', key: '0-1-0-1', children:null },
    { title: '0-1-0-2', key: '0-1-0-2', children:null },
  ],
}, {
  title: '0-2',
  key: '0-2',
  children: null
}];
export default class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.addStatus(data,[]))
    this.state = {
      treeData: this.addStatus(data,[])
    }
  }
  addStatus = (data, newData) => {
    // let newData = []
    // function copyData (data,newData=[]) {
      data.forEach(item => {
        // console.log(item.children)
        if(item.children) {
          newData.push({
            title: item.title,
            key:item.key,
            children: this.addStatus(item.children,[])
          })
        }
        else {
          newData.push({
            title: item.title,
            key: item.key,
            children:null
          })
        }
      })
    // }
    // copyData(data,newData)
    return newData
  }
  handleOnClick = (item,originData) => {
    // 这里面存一层展开或者闭合层级的状态标志字典
    console.log(item)
    if(!item.status)
    item.status = false
    console.log(originData)
    const { treeData } = this.state
  }
  handleTreeData = (oriData,target) => {
    
  }
  render() {
    console.log(this.state.treeData)
    const a = []
    console.log(this.addStatus(data,a))
    return (
      <Treeshow 
        data={this.state.treeData}
        onClick={this.handleOnClick}
      />
    )
  }
}