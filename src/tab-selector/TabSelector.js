import React from 'react'
import styles from './index.module.scss'

export default class TabSelector extends React.Component {
  state = {
    targetName: ''
  }
  handleClick = (name) => {
    this.setState({
      targetName: name
    })
  }
  render() {
    
    const option = [{
      name:'Red'
    },{
      name:'Blue'
    },{
      name:'Orange'
    }]
    return (
      <div>
        <h2>Selector color</h2>
        <div className={styles.selectorBox}>
          {
            option.map(item => {
              return <div key={item.name} onClick={() => this.handleClick(item.name)} className={`${styles.item} ${item.name===this.state.targetName && styles.target}`}>{item.name}</div>
            })
          }
          <div className={`${styles.color} ${styles[this.state.targetName]}`}></div>
        </div>
        
      </div>
    )
  }
}