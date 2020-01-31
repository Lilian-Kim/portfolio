import React from 'react'
import Editor from 'components/write/Editor'
import TagBox from '../components/write/TagBox'
import WriteActionButtons from '../components/write/WriteActionButtons'

const WritePage = () => {
    return(
    <>
    <Editor/>
    <TagBox />
    <WriteActionButtons />
    </>
    )
}

export default WritePage