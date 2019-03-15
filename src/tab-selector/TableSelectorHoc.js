import React from 'react'
import styles from './index.module.scss'

const selectColor = [{
  name: 'Blue'
},{
  name: 'Yellow'
},{
  name: 'Red'
}]
const selectAnimal = [{
  name: 'Dog'
},{
  name: 'Chicken'
},{
  name: 'Caw'
}]
class TableSelctorModule extends React.Component {
  render() {
    const { selectData, onChange, value } = this.props
    return(
      <div className={styles.selectAdvance}>
        <div className={styles.container}>
          {selectData.map(item => {
            return (
              <div className={`${item.name === value && styles.value} ${styles.item}`} onClick={() => onChange(item.name)} key={item.name}>{item.name}</div>
            )
          })}
        </div>
        <hr />
        <div>
          {/* children表示组件的所有节点 */}
          {this.props.children && this.props.children(value)}
        </div>
      </div>
    )
  }
}

class renderSelector extends React.Component {
  state = {
    value: ''
  }
  handleOnChange = (value) => {
    this.setState({
      value
    })
  }
  showChildren = (val) => {
    console.log(val)
    const style = {
      height:'300px',
      width: '300px',
      background: val.toLowerCase()
    }
    return(
      <div style={style}></div>
    )
  }
  render() {
    return (
      <div>
        <div className={styles.color}>
          <h3>colorSelect</h3>
          <TableSelctorModule 
            selectData={selectColor}
            onChange={this.handleOnChange}
            value={this.state.value}
          >
            {this.showChildren}
          </TableSelctorModule>
        </div>
        
      </div>
    )
  }
}
export default renderSelector
