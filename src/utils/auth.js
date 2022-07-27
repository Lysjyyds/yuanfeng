import Cookies from 'js-cookie'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNTJlYWUxMS0yYWZiLTQwYjUtODg3NC01OTEwOGU0YjI0NjUiLCJzdWIiOiJ7XCJyb2xlXCI6XCJST0xFX0FETUlOXCIsXCJ0eXBlXCI6XCIyXCIsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIn0iLCJpc3MiOiJhZG1pbiIsImlhdCI6MTYwNjM3MTA3NiwiZXhwIjoxNjA2OTc1ODc2fQ.pCl45pY_v2w8rZU8l60UI4cQx-Ufl7DRw0rZqhY8zeE'
const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken() {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
