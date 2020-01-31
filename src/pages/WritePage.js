import React from 'react'
import TagBox from '../components/write/TagBox'
import WriteActionButtons from '../components/write/WriteActionButtons'
import EditorContainer from '../containers/write/EditorContainer'

const WritePage = () => {
    return(
    <>
    <EditorContainer/>
    <TagBox />
    <WriteActionButtons />
    </>
    )
}

export default WritePage