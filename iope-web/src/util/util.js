
import Cookies from 'js-cookie' // npm  安装的 他们2个也要重新拉去代码安装的

const TokenKey = 'iope-web-token'// 自己取个名字 但要知道他存储的什么  token

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
