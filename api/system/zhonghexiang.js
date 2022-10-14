import request from '@/utils/request'

// 查询快递信息列表
export function listZhonghexiang(query) {
  return request({
    url: '/system/zhonghexiang/list',
    method: 'get',
    params: query
  })
}

// 查询快递信息详细
export function getZhonghexiang(listId) {
  return request({
    url: '/system/zhonghexiang/' + listId,
    method: 'get'
  })
}

// 新增快递信息
export function addZhonghexiang(data) {
  return request({
    url: '/system/zhonghexiang',
    method: 'post',
    data: data
  })
}

// 修改快递信息
export function updateZhonghexiang(data) {
  return request({
    url: '/system/zhonghexiang',
    method: 'put',
    data: data
  })
}

// 删除快递信息
export function delZhonghexiang(listId) {
  return request({
    url: '/system/zhonghexiang/' + listId,
    method: 'delete'
  })
}
