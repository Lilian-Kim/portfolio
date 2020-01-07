import React from 'react'
import '../styles/reset.scss'

const MemoTemplate = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <a>안녕</a>
    </>
  )
}

export default MemoTemplate
