import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button'

const WriteActionButtonWrapper = styled.div`
width:100%;
text-align:center;
margin-top: 1rem;
margin-bottom: 3rem;
button + button {
    margin-left: 0.5rem
}
`

const StyledButton = styled(Button)`
height: 2.215rem;
font-size:1rem;
& + &{
    margin-left: 0.5rem;
}
`

const WriteActionButtons = ({onCancel, onPublish}) => {
    return(
        <WriteActionButtonWrapper>
            <StyledButton cyan onClick={onPublish}>
                등록
            </StyledButton>
            <StyledButton onCancel={onCancel}>취소</StyledButton>
        </WriteActionButtonWrapper>


    )
}

export default WriteActionButtons