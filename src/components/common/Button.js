import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  fonst-size: 1rem;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: #1971c2;
  &:hover {
    background-color: #1864ab;
  }

  &:disbled {
    background-color: #dee2e6;
    color: #adb5bd;
    cursor: not-allowed;
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
    props.cyan &&
    css`
      background-color: #343a40;
      &:hover {
        background-color: #868e96;
      }
    `}
`

const Button = props => <StyledButton {...props} />

export default Button
