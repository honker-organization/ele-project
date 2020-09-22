import Personal from '@/pages/Personal'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import iconDetail from '@/pages/iconDetail'
import order from '@/pages/order'
import search from '@/pages/search'
import selectShippingAddress from '@/pages/selectShippingAddress'
import shopDetails from '@/pages/shopDetails'
import shopPages from '@/pages/shopPages'
import supermarket from '@/pages/supermarket'
import Search from '@/pages/search'
import MyAddress from '@/pages/myAddress'
// 二级路由
import AddNewAddress from '@/pages/Home/Header/AddNewAddress'
export default [
  {
    path: "/search",
    component: Search
  },
  {
    path: "/personal",
    component: Personal
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/icondetail",
    component: iconDetail
  },
  {
    path: "/order",
    component: order
  },
  {
    path: "/search",
    component: search
  },
  {
    path: "/selectshippingaddress",
    component: selectShippingAddress,

  },
  {
    path: "/addNewAddress",
    component: AddNewAddress,
  },
  {
    path: "/myAddress",
    component: MyAddress,
  },
  {
    path: "/shopdetails",
    component: shopDetails
  },
  {
    path: "/shoppages",
    component: shopPages
  },
  {
    path: "/supermarket",
    component: supermarket
  },

  {
    path: "",
    redirect: '/home'
  },
  {
    path: '/hotSearch',
    name: 'hotSearch',
    component: () => import(/* webpackChunkName: "changeAddress" */ '@/pages/Home/Header/HotSearch')
  },
  {
    path: '/',
    redirect: '/home'
  }
]