import React from 'react'
import styles from './index.module.scss'

/**
 * props:
 *  data: [{title:'xx',key:'xx',children:[{},{}]}] 传进来的树形结构
 *  autoExpand:是否展开
 *  onClick: 每层的点击事件  
 */
class Treeshow extends React.Component {
  renderDom = (data,left=0,top=-10) => {
    if(!data || (data && data.length === 0)) {
      return false
    }
    return data.map(item => {
      if(!item.children || (item.children && item.children.length === 0)) {
        console.log(left)
        return (
          <div onClick={(e) => {e.stopPropagation();this.props.onClick(item,data)}} style={{paddingLeft:left}} key={item.key}>{item.title}</div>
        )
      }
      return (
        <div onClick={(e) => {e.stopPropagation();this.props.onClick(item,data)}} style={{paddingLeft:left}} key={item.key} className={styles.father}>
          {item.title}
          {
            this.renderDom(item.children,left+80)
          }
        </div>
      )
    })
  }
  render() {
    const {data} = this.props
    return (
      this.renderDom(data)
    )
  }
}
export default Treeshow