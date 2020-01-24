import React from 'react'
import styled from 'styled-components'

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
`

const Button = props => <StyledButton {...props} />

export default Button
