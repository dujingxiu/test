import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import IndustInfo from '@/components/basicInfo/IndustInfo'
import Information from '@/components/basicInfo/Information'
import organization from '@/components/basicInfo/organization'
import socialSecurity from '@/components/basicInfo/socialSecurity'
import contract from '@/components/basicInfo/contract'
import contractDetails from '@/components/basicInfo/contractDetails'
import editor from '@/components/basicInfo/editor'
import contractList from '@/components/basicInfo/contractList'
import departure from '@/components/basicInfo/departure'
import scheduling from '@/components/management/scheduling'
import Shift from '@/components/management/Shift'
import holiday from '@/components/management/holiday'
import SickLeave from '@/components/management/SickLeave'
import Statutory from '@/components/management/Statutory'
import Compensation from '@/components/salary/Compensation'
import dailyStatistics from '@/components/report/dailyStatistics'
import monthlyStatistics from '@/components/report/monthlyStatistics'
import Attendance from '@/components/report/Attendance'
import Staff from '@/components/report/Staff'
import applyCar from '@/components/examination/applyCar'
import applyLeave from '@/components/examination/applyLeave'
import field from '@/components/examination/field'
import fillCard from '@/components/examination/fillCard'
import items from '@/components/examination/items'
import overtime from '@/components/examination/overtime'
import overview from '@/components/examination/overview'
import paidLeave from '@/components/examination/paidLeave'
import purchase from '@/components/examination/purchase'
import equipment from '@/components/maintenance/equipment'
import user from '@/components/maintenance/user'
import permissions from '@/components/maintenance/permissions'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/Information',
      component: Information
    },
    {
      path: '/IndustInfo',
      component: IndustInfo
    },
    {
      path: '/organization',
      component: organization
    },
    {
      path: '/socialSecurity',
      component: socialSecurity
    },
    {
      path: '/contract',
      component: contract
    },
    {
      path: '/contractDetails',
      component: contractDetails
    },
    {
      path: '/editor',
      component: editor
    },
    {
      path: '/contractList',
      component: contractList
    },
    {
      path: '/departure',
      component: departure
    },
    {
      path: '/scheduling',
      component: scheduling
    },
    {
      path: '/Shift',
      component: Shift
    },
    {
      path: '/holiday',
      component: holiday
    },
    {
      path: '/SickLeave',
      component: SickLeave
    },
    {
      path: '/Statutory',
      component: Statutory
    },
    {
      path: '/Compensation',
      component: Compensation
    },
    {
      path: '/dailyStatistics',
      component: dailyStatistics
    },
    {
      path: '/monthlyStatistics',
      component: monthlyStatistics
    },
    {
      path: '/Attendance',
      component: Attendance
    },
    {
      path: '/Staff',
      component: Staff
    },
    {
      path: '/applyCar',
      component: applyCar
    },
    {
      path: '/applyLeave',
      component: applyLeave
    },
    {
      path: '/field',
      component: field
    },
    {
      path: '/fillCard',
      component: fillCard
    },
    {
      path: '/items',
      component: items
    },
    {
      path: '/overtime',
      component: overtime
    },
    {
      path: '/overview',
      component: overview
    },
    {
      path: '/paidLeave',
      component: paidLeave
    },
    {
      path: '/purchase',
      component: purchase
    },
    {
      path: '/equipment',
      component: equipment
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/permissions',
      component: permissions
    }
  ]
})
