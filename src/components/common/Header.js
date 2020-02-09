import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import 'styles/common/Header.scss'

const Header = ({ user, onLogout}) => {
  //toggle true : false시에 아이콘 변경
  const [toggle, setToggle] = useState(false)
  const toggleClick = () => setToggle(!toggle)

  return (
    <div className="memo-header clear">
      <div>
        {/* <button onClick={toggleClick} className={toggle ? 'close' : 'open'}>
          {toggle ? '닫기' : '열기'}
        </button> */}
      </div>
      <div className="left">
        <Link to="/">Simple Memo</Link>
      </div>
      <nav className="">
        <ul>
          {user ? (
            <>
              <li>{user.name}</li>
              <li>
                <NavLink to="/logout" onClick={onLogout}>로그아웃</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">로그인</NavLink>
              </li>
              <li>
                <NavLink to="/register">회원가입</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
