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
/**
 * 用户信息
 */
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    headers: {
      // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU'
      Authorization: 'Bearer eyJ8eXA1013KV1QiLCJhbGci01]IUzI1Ni39.eyJleHAi0jE2MTg5HDkxNjYsInVzZX3fawQi0jEsIn3lzn31c2gi0mZhbHN1LC322X3pZm11ZCI6dHJ1ZX3.EdKErKDqNc3snkYxqt02jSa8t9G44002ywKY3CNOMg'

    }
  })
}
