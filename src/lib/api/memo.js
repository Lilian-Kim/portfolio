import client from './client'


export const writeMemo = ({title, body, tags}) => 
client.post('./api/memo', {title, body, tags})

export const readMemo = id => client.get( `/api/memo/${id}`)