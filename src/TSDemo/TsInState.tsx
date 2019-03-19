import React from 'react'

export interface Props {
  name: string,
  enthusiasmLevel?: number;
}

interface State {
  cEnthusiasm: number
}

class StateInTs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      cEnthusiasm: this.props.enthusiasmLevel || 1
    }
  }
  onIncreament = () => {
    this.setState({
      cEnthusiasm: this.state.cEnthusiasm + 1
    })
  }
  onDecreament= () => {
    const { cEnthusiasm } = this.state
    if(cEnthusiasm - 1 < 1) return;
    this.setState({
      cEnthusiasm: this.state.cEnthusiasm - 1
    })
  }
  getEnthusiasm = (count:number) => {
    return Array(count+1).join('!')
  }
  render() {
    return (
      <div>
        {`${this.props.name} ${this.getEnthusiasm(this.state.cEnthusiasm)}`}
        <div>
          <button onClick={this.onDecreament}>-</button>
          <button onClick={this.onIncreament}>+</button>
        </div>
      </div>
    )
  }
}
export default StateInTs