import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// 회원가입/로그인 페이지의 레이아웃 담당 컴포넌트

const AuthTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  right: 0;
  background-color: #f1f3f5;
  display: flex;
  flex-derection: column;
  justify-content: center;
  align-items: center;
  height:100%;
`

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background-color: #fff;
  border-radius: 2px;
`

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">simple memo</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateWrapper>
  )
}

export default AuthTemplate
