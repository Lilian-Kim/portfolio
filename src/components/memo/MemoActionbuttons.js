import React from 'react'
import styled from 'styled-components'

const MemoActionButtonsWrapper = styled.div`
display:flex;
justify-content:flex-end;
margin-bottom: 2rem;
margin-top: -1.5rem
`

const ActionButton = styled.button`
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


const MemoActionButtons = ({onEdit}) => {
    return(
        <MemoActionButtonsWrapper>
            <ActionButton onClick={onEdit}>수정</ActionButton>
            <ActionButton>삭제</ActionButton>
        </MemoActionButtonsWrapper>

    )
}

export default MemoActionButtons