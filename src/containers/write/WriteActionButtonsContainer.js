import React, {useEffect} from 'react'
import WriteActionButtons from 'components/write/WriteActionButtons'
import {useSelector, useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {writePost} from 'modules/write'

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch()
    const {title, body, tags, post, postError} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
    }))
    const onPublish = () => {
        dispatch(
            writePost({
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
        if(post){
            const {_id, user} = post
            history.push(`/@${user.name}/${_id}`)
        }
        if(postError){
            console.log(postError)
        }
    }, [history, post, postError])
    return(
        <WriteActionButtons onPublish={onPublish} onCancle={onCancle}/>
    )
}

export default withRouter(WriteActionButtonsContainer)