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
    data.forEach(item => {
      if(item.children) {
        newData.push({
          title: item.title,
          key:item.key,
          children: this.addStatus(item.children,[]),
          status:true
        })
      }
      else {
        newData.push({
          title: item.title,
          key: item.key,
          children:null,
          status:true
        })
      }
    })
    return newData
  }
  handleOnClick = (item,originData) => {
    // 这里面存一层展开或者闭合层级的状态标志字典
    console.log(item)
    // 利用了对象的引用特性该item,那么整个originData也会变
    item.status = !item.status
    this.setState({
      data: originData
    })
  }
  render() {
    console.log(this.state.data)
    return (
      <Treeshow 
        data={this.state.treeData}
        onClick={this.handleOnClick}
      />
    )
  }
}