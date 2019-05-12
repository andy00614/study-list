import React from 'react'
import { connect } from 'react-redux'
 
class Refresh extends React.Component {
  render() {
    console.log(this.props.count)
    return (
      <div>
        Refresh
      </div>
    )
  }
}

// const mapStateToProps = ({count}) => ({
//   count:count.count
// })
// export default connect(mapStateToProps,{})(Refresh)

export default Refresh
