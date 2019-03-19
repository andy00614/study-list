import React from 'react'
import styles from './index.module.scss'
import Board from './Board'

class Game extends React.Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles['game-board']}>
          <Board name={'andy'}/>
        </div>
        <div className={styles['game-info']}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
export default Game