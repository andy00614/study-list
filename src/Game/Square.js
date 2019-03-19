import React from 'react'
import styles from './index.module.scss'

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className={styles.square} onClick={() => this.setState((state) => {
        if(state.value === 'X') {
          return {
            value: null
          }
        }
        return {
          value: 'X'
        }
      })}>
        {this.state.value}
      </button>
      
    )
  }
}
export default Square