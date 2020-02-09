import qs from 'qs'
import client from './client'


export const writeMemo = ({title, body, tags}) => 
client.post('/api/posts', {title, body, tags})

export const readMemo = id => client.get( `/api/posts/${id}`)

export const listMemos = ({page, name, tag}) => {
    const queryString = qs.stringify({
        page,
        name,
        tag,
    })
    return client.get(`api/posts?${queryString}`)
}

export const updateMemo = ({id, title, body, tags}) => client.patch(`/api/posts/${id}`, 
{title,
body,
tags,})

export const removeMemo = id => client.delete(`/api/posts/${id}`)