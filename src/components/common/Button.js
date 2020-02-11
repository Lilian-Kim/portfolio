import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  fonst-size: 1rem;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background-color: #212529;
  &:hover {
    background-color: #495057;
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.white &&
    css`
      background-color: #e9ecef;
      border:1px solid #212529;
      color:#555;
      &:hover {
        background-color: #fff;
      }
    `}
    
  &:disabled {
    background-color: #dee2e6;
    color: #adb5bd;
    cursor: not-allowed;
  }
`

const Button = props => <StyledButton {...props} />

export default Button
