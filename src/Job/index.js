import React from 'react';
import styles from './index.module.scss';
import Bar from './Bar'
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class Job extends React.Component {
  render() { 
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          共计<span className={styles.count}>{'*api'}</span>起(处理<span className={styles.count}>{'*api'}</span>起)
        </div>
        <div className={styles.bar}>
          <Bar />
        </div>
        <div className={styles.br} />
        <div className={styles.tagCloud}>
          <TagCloud 
            style={{
              fontFamily: 'sans-serif',
              fontSize: 30,
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: () => randomColor(),
              padding: 5,
              width: '100%',
              height: '100%'
            }}>
              <div >react</div>
              <div >tag</div>
              <div>cloud</div>
          </TagCloud>
        </div>
      </div>
    )
  }
} 

export default Job