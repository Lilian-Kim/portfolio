import React, {useEffect} from 'react'
import qs from 'qs' 
import {withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import MemoList from 'components/memos/MemoList'
import {listMemos} from 'modules/memos'

const MemoListContainer = ({location}) => {
    const dispatch = useDispatch()
    const {memos, error, loading, user} = useSelector(
        ({memos, loading, user}) => ({
            memos: memos.memos,
            error: memos.error,
            loading: loading['memos/LIST_MEMOS'],
            user: user.user
        }),
    )
    useEffect(()=> {
        const {tag, name, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        })
        dispatch(listMemos({tag, name, page}))
    },[dispatch, location.search])
    return(
        <MemoList loading={loading} error={error} memos={memos} showWriteButton={user}/>


    )
}

export default withRouter(MemoListContainer)