import React from 'react'
import './MemoContainer.scss'

const MemoContainer = ({ children }) => {
  return (
    <>
      <div className="memo-container">{children}</div>
    </>
  )
}

export default MemoContainer
