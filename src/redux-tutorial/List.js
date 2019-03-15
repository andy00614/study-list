import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/showList/action'
import { Spin } from 'antd'

class List extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const list = this.props.list.items
    return (
      <div style={{paddingTop:'20px'}}>
        <Spin tip='等待中...' spinning={this.props.list.loading}>
          <div>
            {
              list.map(item => {
                return (
                  <div key={item.name}>
                    <span>name:{item.name}</span>
                    <span>age:{item.age}</span>
                  </div>
                )
              })
            }
          </div>
        </Spin>
      </div>
    )
  }
}
const mapStateToProps = ({list}) => ({
  list
})
const mapDispatchToprops = {
  fetchProducts
}
export default connect(mapStateToProps,mapDispatchToprops)(List)