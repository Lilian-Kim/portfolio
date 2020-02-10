import React, {useState, useCallback} from 'react'
import styled from 'styled-components'
import AskRemoveModal from './AskRemoveModal'
import WriteActionButtonsContainer from '../../containers/write/WriteActionButtonsContainer'

const MemoActionButtonsWrapper = styled.div`
display:flex;
justify-content:flex-end;
margin-bottom: 2rem;
margin-top: -1.5rem
`

const ActionButtons = styled.button`
padding: 0.25rem 0.5rem;
border-radius: 4px;
color: #868e96;
font-weight:blold;
border:none;
outline:none;
font-size: 0.875rem;
cursor:pointer;
&:hover{
    background-color: #f1f3f5;
    color: #1c7ed6;;
}

& + & {
    margin-left: 0.25rem;
}
`


const MemoActionButtons = ({onEdit, onRemove}) => {
    const [modal, setModal] = useState(false)
    const onRemoveClick = () => {
        setModal(true)
    }
    const onCancel = () => {
        setModal(false)
    }
    const onConfirm = () => {
        setModal(false)
        onRemove()
    }

    return(
        <>
        <MemoActionButtonsWrapper>
            <ActionButtons onClick={onEdit}>수정</ActionButtons>
            <ActionButtons onClick={onRemoveClick}>삭제</ActionButtons>
            <WriteActionButtonsContainer/>
        </MemoActionButtonsWrapper>
        <AskRemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
        </>
    )
}

export default MemoActionButtons