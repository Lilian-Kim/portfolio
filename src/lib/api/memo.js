import qs from 'qs'
import client from './client'


export const writeMemo = ({title, body, tags}) => 
client.post('./api/memo', {title, body, tags})

export const readMemo = id => client.get( `/api/memo/${id}`)

export const listMemos = ({page, name, tag}) => {
    const queryString = qs.stringify({
        page,
        name,
        tag,
    })
    return client.get(`api/memo?${queryString}`)
}