import React, { useState } from 'react'
import {NavLinke} from 'react-router-dom'

import './MemoHeader.scss'

const MemoHeader = () => {
  //toggle true : false시에 아이콘 변경
  const [toggle, setToggle] = useState(false)
  const toggleClick = () => setToggle(!toggle)

  return (
    <div className="memo-header clear">
      <div>
        <button onClick={toggleClick} className={toggle ? 'close' : 'open'}>
          {toggle ? '닫기' : '열기'}
        </button>
      </div>
      <div className="left">
        Simple Memo
      </div>
      <nav className="right">
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </div>
  )
}

export default MemoHeader
