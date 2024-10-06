const INFO_KEY = 'hm_shopping_info'

// 本地获取客户信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result
    ? JSON.parse(result)
    : {
        token: '',
        userId: ''
      }
}

// 本地存储客户信息
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

// 本地清除客户信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
