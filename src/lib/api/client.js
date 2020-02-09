import axios from 'axios'

const client = axios.create()

const token = localStorage.token
//헤더 설정
client.defaults.headers.common['Authorization'] = `Bearer ${token}`

/*
//api 주소를 다른 곳으로 사용함
client.defaults.baseURL = 'https://external-api-server.com/'

//인터셉터 설정
axios.intercepter.response.use(\
    response => {
        //요청 성공 시 특정 작업 수행
        return response
    },
    error => {
        //요청 실패 시 특정 작업 수행
        return Promis.reject(error)
    })

*/

export default client