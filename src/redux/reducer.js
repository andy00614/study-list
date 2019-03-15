import { INCREMENT, DECREMENT } from './action'

export const initalState = {
  count: 0
}

export default (state=initalState,action) => {
  if(action.type === INCREMENT) {
    return {
      count: state.count + 1
    }
  }
  if(action.type === DECREMENT) {
    return {
      count: state.count - 1
    }
  }
  return state
}