import request from '@/utils/request'
/**
 * 用户登录
 */
export const userLogin = data => {
  console.log(data)
  return request({
    method: 'PUT',
    url: '/mp/v1_0/authorizations',
    data
  })
}
