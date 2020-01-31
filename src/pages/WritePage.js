import React from 'react'
import WriteActionButtons from '../components/write/WriteActionButtons'
import EditorContainer from '../containers/write/EditorContainer'
import TagBoxContainer from '../containers/write/TagBoxContainer'

const WritePage = () => {
    return(
    <>
    <EditorContainer/>
    <TagBoxContainer />
    <WriteActionButtons />
    </>
    )
}

export default WritePage