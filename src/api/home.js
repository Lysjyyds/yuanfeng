import request from '@/utils/request'

// 代办信息
export function getTodo() {
  return request({
    url: '/home/todo'
  })
}

// 库存使用情况
export function getUserStatus() {
  return request({
    url: 'home/stockUseStatus'
  })
}

