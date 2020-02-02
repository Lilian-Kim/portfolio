import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {readMemo, unloadMemo} from 'modules/memo'
import MemoViewer from 'components/memo/MemoViewer'

const MemoViewerContainer = ({match}) => {
    const {memoId} = match.params
    const dispatch = useDispatch()
    const {memo, error, loading} = useSelector(({memo, loading}) => ({
        memo: memo.memo,
        error: memo.error,
        loading: loading['memo/READ_MEMO']
    }))

    useEffect(() => {
        dispatch(readMemo(memoId))
        return () => {
            dispatch(unloadMemo())
        }
    }, [dispatch, memoId])
    return(
        <MemoViewer memo={memo} loading={loading} error={error}/>
    )
}

export default withRouter(MemoViewerContainer)