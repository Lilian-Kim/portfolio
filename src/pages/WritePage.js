import React from 'react'
import EditorContainer from '../containers/write/EditorContainer'
import TagBoxContainer from '../containers/write/TagBoxContainer'
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer'

const WritePage = () => {
    return(
    <>
    <EditorContainer/>
    <TagBoxContainer />
    <WriteActionButtonsContainer />
    </>
    )
}

export default WritePage