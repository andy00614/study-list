import Lifecycle from './Lifecycle/Lifecycle'
import Clock from './Clock/Clock_me'
import PureComponentDemo from './Lifecycle/PureComponent'
import MyUpload from './upload/Upload'
import TabSelector from './tab-selector/TabSelector'
import TabSelectorAdvance from './tab-selector/TableSelectorHoc'
import CheckoutQQ from './CheckoutQQ/Checkout'
import Count from './redux-tutorial/Count.tsx'
import Game from './Game/Game'
import LogReg from './Form/index'
import HelloIndex from './TSDemo/index'
import Auth from './Auth/Auth'
import TreeData from './Treeshow'
import Fetch from './fetch'
import Swiper from './Swiper'
import Checkbox from './Checkbox'
import Refresh from './Refresh'

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
  },{
    name:'tic-tac-toe',
    path: 'game',
    component: Game
  },{
    name:'ts-demo',
    path: 'tsdemo',
    component: HelloIndex
  },{
    name:'form',
    path: 'form',
    component: LogReg
  },{
    name:'auth',
    path: 'auth',
    component: Auth
  },{
    name:'TreeData',
    path: 'tree',
    component: TreeData
  },{
    name:'Fetch',
    path: 'fetch',
    component: Fetch
  },{
    name: 'Swiper',
    path: 'swiper',
    component: Swiper
  },{
    name: 'checkbox',
    path: 'checkbox',
    component: Checkbox
  },{
    name:'redux-refresh',
    path: 'redux-refresh',
    component:Refresh
  }
]
export default menuList