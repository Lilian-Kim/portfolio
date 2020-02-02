import React, {useEffect} from 'react'
import WriteActionButtons from 'components/write/WriteActionButtons'
import {useSelector, useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {writeMemo} from 'modules/write'

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch()
    const {title, body, tags, memo, memoError} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        memo: write.memo,
        memoError: write.memoError,
    }))
    const onPublish = () => {
        dispatch(
            writeMemo({
                title,
                body,
                tags,
            })
        )
    }

    const onCancle = () => {
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
        <WriteActionButtons onPublish={onPublish} onCancle={onCancle}/>
    )
}

export default withRouter(WriteActionButtonsContainer)