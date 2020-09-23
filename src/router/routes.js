import Personal from '@/pages/Personal'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import iconDetail from '@/pages/iconDetail'
import order from '@/pages/order'
import search from '@/pages/search'
import selectShippingAddress from '@/pages/selectShippingAddress'
import shopDetails from '@/pages/shopDetails'
import shopPages from '@/pages/shopPages'
import supermarket from '@/pages/supermarket'
import AddNewAddress from '@/pages/Home/Header/AddNewAddress'
export default [
  {
    path:"/addnewaddress",
    component:AddNewAddress
  },
  {
    path:"/personal",
    component:Personal
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/",
    redirect:'home'
  },
  {
    path:"/home",
    component:Home,
    name:'home'
  },
  {
    path:"/icondetail",
    component:iconDetail
  },
  {
    path:"/order",
    component:order
  },
  {
    path:"/search",
    component:search
  },
  {
    path:"/selectshippingaddress",
    component:selectShippingAddress
  },
  {
    path:"/shopdetails",
    component:shopDetails
  },
  {
    path:"/shoppages",
    component:shopPages
  },
  {
    path:"/supermarket",
    component:supermarket
  },
]
