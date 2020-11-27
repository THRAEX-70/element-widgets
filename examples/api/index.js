import request from '@/utils/request'
import qs from 'qs'

function getUserPage(params) {
  return request({
    url: '/api/admin/user/page',
    method: 'GET',
    params,
    // { indices: false, allowDots: false }
    paramsSerializer: p => qs.stringify(p)
  })
}

function getUser(id) {
  return request({
    url: `/api/admin/user/${id}`,
    method: 'GET'
  })
}

function getUsers(ids) {
  return request({
    url: '/api/admin/user',
    method: 'GET',
    params: { ids }
  })
}

export { getUserPage, getUser, getUsers }