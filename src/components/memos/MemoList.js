import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from 'components/common/Button'
import SubInfo from 'components/common/SubInfo'
import Tags from 'components/common/Tags'
import 'styles/components/MemoList.scss'

const MemoItem = ({ memo }) => {
  const { publishedDate, user, tags, title, body, _id } = memo
  return (
    <div class="memoitem-wrapper">
      <h2>
        <Link to={`/@${user.name}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo name={user.name} publishedDate={new Date(publishedDate)} />
      <Tags tags={tags} />
      <p>{body}</p>
    </div>
  )
}

const MemoList = ({ memos, loading, error, showWriteButton }) => {
  if (error) {
    return <div className="memolist-wrapper">에러가 발생했습니다.</div>
  }
  return (
    <div className="memolist-wrapper clear">
      <div className="buton-wrapper">
        {showWriteButton && (
          <Link to="/write">
            새 메모
          </Link>
        )}
      </div>
      {!loading && memos && (
        <div className="clear">
          {memos.map(memo => (
            <MemoItem memo={memo} key={memo._id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MemoList
