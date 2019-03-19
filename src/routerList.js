import Lifecycle from './Lifecycle/Lifecycle'
import Clock from './Clock/Clock_me'
import PureComponentDemo from './Lifecycle/PureComponent'
import MyUpload from './upload/Upload'
import TabSelector from './tab-selector/TabSelector'
import TabSelectorAdvance from './tab-selector/TableSelectorHoc'
import CheckoutQQ from './CheckoutQQ/Checkout'
import Count from './redux-tutorial/Count'
import Game from './Game/Game'
const menuList = [
  {
    name: 'clock',
    path: 'clock',
    component: Clock,
  },{
    name: 'Lifecycle',
    path: 'Lifecycle',
    component: Lifecycle,
  },{
    name: 'PureComponentDemo',
    path: 'PureComponentDemo',
    component: PureComponentDemo,
  },
  {
    name: 'upload-antd',
    path: 'upload',
    component: MyUpload,
  },
  {
    name: 'tab-selector',
    path: 'selector',
    component: TabSelector,
  },
  {
    name: 'tab-selector-advance',
    path: 'selectorad',
    component: TabSelectorAdvance,
  },{
    name: 'redux-tutorial',
    path: 'redux',
    component: Count,
  },{
    name: 'check',
    path: 'check',
    component: CheckoutQQ,
  },
  {
    name:'tic-tac-toe',
    path: 'game',
    component: Game
  }
]
export default menuList