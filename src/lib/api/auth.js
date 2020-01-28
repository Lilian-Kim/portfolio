import client from './client'


//login
export const login = ({email, password}) => 
client.post('/api/auth/login', {email, password})

//register
export const register = ({email,password}) =>
client.post('api/auth/register', {email, password})

//로그인 상태 확인
export const check = () => client.get('/api/auth/check')