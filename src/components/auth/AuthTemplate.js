import React from 'react'
import styled from 'styled-components'

// 회원가입/로그인 페이지의 레이아웃 담당 컴포넌트

const AuthTemplateWrapper = styled.div``

const AuthTemplate = ({children}) => {
    return(
        <AuthTemplateWrapper>
            {children}
        </AuthTemplateWrapper>
    )
}

export default AuthTemplate