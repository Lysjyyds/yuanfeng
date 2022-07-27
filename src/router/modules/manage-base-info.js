// 导出属于员工的路由规则
import Layout from '@/layout'
//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/manage-base-info', // 路径
  name: 'manage-base-info', // 给路由规则加一个name
  component: Layout, // 组件
  meta: {
    title: '基础信息管理', // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
    icon: 'tree-table'
  },
  children: [{
    path: 'warehouse',
    component: () => import('@/views/manage-base-info/warehouse'),
    name: 'warehouse',
    meta: { title: '仓库管理' }
  },
  {
    path: 'area',
    component: () => import('@/views/manage-base-info/area'),
    name: 'area',
    meta: { title: '库存管理' }
  }, {
    path: 'location',
    component: () => import('@/views/manage-base-info/location'),
    name: 'location',
    meta: { title: '库位管理' }
  },
  {
    path: 'location-view',
    component: () => import('@/views/manage-base-info/location-view'),
    name: 'location-view',
    meta: { title: '库位视图' }
  },
  {
    path: 'goods',
    component: () => import('@/views/manage-base-info/goods'),
    name: 'goods',
    meta: { title: '货品管理' }
  },
  {
    path: 'goods-type',
    component: () => import('@/views/manage-base-info/goods-type'),
    name: 'goods-type',
    meta: { title: '货品类型管理' }
  }
  ]
}
