import React from 'react'
import styles from './index.module.scss'
import { number } from 'prop-types';

export interface Props {
  name: string; // is a required string
  enthusiasmLevel?: number // option number
}
// SFC component
// function Hello({ name, enthusiasmLevel = 1}: Props) {
//   if(enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D')
//   }
//   return (
//     <div className={styles.container}>
//       <div className={styles.greeting}>
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   )
// }
// class Component

// Props是外部传进来的Props，它的type已由上面借口定义，object则是它的state
class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props
    if(enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }
    return (
      <div>
        Hello { name + getExclamationMarks(enthusiasmLevel)}
      </div>
    )
  }
}

function getExclamationMarks(numChars: number) {
  console.log(numChars)
  return Array(numChars + 1).join('!')
}
export default Hello