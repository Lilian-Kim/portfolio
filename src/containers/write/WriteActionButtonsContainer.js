import React, {useEffect} from 'react'
import WriteActionButtons from 'components/write/WriteActionButtons'
import {useSelector, useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {writeMemo, updateMemo} from 'modules/write'

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch()
    const {title, body, tags, memo, memoError, originalMemoId} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        memo: write.memo,
        memoError: write.memoError,
        originalMemoId:write.originalMemoId,
    }))
    const onPublish = () => {
        if(originalMemoId){
            dispatch(updateMemo({title, body, tags, id: originalMemoId}))
        }
        dispatch(
            writeMemo({
                title,
                body,
                tags,
            })
        )
    }

    const onCancel = () => {
        history.goBack()
    }

    //성공, 혹은 실패 시 할 작업
    useEffect(()=>{
        if(memo){
            const {_id, user} = memo
            history.push(`/@${user.name}/${_id}`)
        }
        if(memoError){
            console.log(memoError)
        }
    }, [history, memo, memoError])
    return(
        <WriteActionButtons onPublish={onPublish} onCancel={onCancel} idsEdit={!!originalMemoId}/>
    )
}

export default withRouter(WriteActionButtonsContainer)