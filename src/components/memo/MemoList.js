import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button'
import SubInfo from 'components/common/SubInfo'
import Tags from 'components/common/Tags'
import 'styles/components/MemoList.scss'

const MemoItem = ({name}) => {
  return(
    <div class="memoitem-wrapper">
      <h2>제목</h2>
      <SubInfo name="name" publishedDate={new Date()}/>
      <Tags tags={['태그1', '태그2', '태그3']}/>
      <p>메모 내용의 일부분..</p>
    </div>

  )
}

const MemoList = () => {
  return (
    <div className="memolist-wrappert">
      <div className="buton-wrapper">
        {/* <Button to="/write">새 메모 쓰기</Button> */}
      </div>
      <div>
        <MemoItem />
        <MemoItem />
        <MemoItem />
      </div>
    </div>
  )
}

export default MemoList
