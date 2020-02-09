import client from './client'


//login  -> signin
export const login = ({email, password}) => 
client.post('/api/auth/login', {email, password})

//register  -> signup
export const register = ({name, email,password}) =>
client.post('/api/auth/register', {name, email, password})

//로그인 상태 확인 -> me
export const check = () => client.get('/api/auth/check')

//로그아웃
export const logout = () => client.post('api/auth/logout')