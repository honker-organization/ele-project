export default [
  {
    path: "/home",
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home')
  },
  {
    path: '/changeAddress',
    name: 'changeAddress',
    component: () => import(/* webpackChunkName: "changeAddress" */ '@/pages/Home/Header/ReceiveGoods')
  },
  {
    path: '/province',
    name: 'province',
    component: () => import(/* webpackChunkName: "changeAddress" */ '@/pages/Home/Header/AdrList')
  },
  {
    path: '/addNewAddress',
    name: 'addNewAddress',
    component: () => import(/* webpackChunkName: "changeAddress" */ '@/pages/Home/Header/AddNewAddress')
  },
  {
    path: '/',
    redirect: '/home'
  }
]