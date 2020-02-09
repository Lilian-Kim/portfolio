import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {readMemo, unloadMemo} from 'modules/memo'
import MemoViewer from 'components/memo/MemoViewer'
import MemoActionButtons from '../../components/memo/MemoActionbuttons'
import { setOriginalMemo } from '../../modules/write'

const MemoViewerContainer = ({match, history}) => {
    const {memoId} = match.params
    const dispatch = useDispatch()
    const {memo, error, loading, user} = useSelector(({memo, loading, user}) => ({
        memo: memo.memo,
        error: memo.error,
        loading: loading['memo/READ_MEMO'],
        user:user.user,
    }))

    useEffect(() => {
        dispatch(readMemo(memoId))
        return () => {
            dispatch(unloadMemo())
        }
    }, [dispatch, memoId])

    const onEdit = () => {
        dispatch(setOriginalMemo(memo))
        history.push('/write')
    }

    const ownMemo = (user && user.id) === (memo && memo.user._id)
  
    return(
        // <div>
        //     <MemoViewer></MemoViewer>
        // </div>
        <MemoViewer memo={memo} loading={loading} error={error} actionButtons={<MemoActionButtons/>} onEdit={onEdit}/>
    )
}

export default withRouter(MemoViewerContainer)