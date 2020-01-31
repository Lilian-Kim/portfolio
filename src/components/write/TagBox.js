import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import 'styles/components/Tagbox.scss'

const Tag = styled.div`
  margin-top: 0.5rem;
  color: #868e96;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    opacity: 0.5;
  }
  &:last-child {
    margin-right: 0;
  }
`

const TagListWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

//React.memo 써서 태그 값 바뀔 때만 리렌더링
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
))

//React.memo 써서 tag 값 바뀔 때만 리렌더링
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListWrapper>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListWrapper>
))

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('')
  const [localTags, setLocalTags] = useState([])

  const insertTag = useCallback(
    tag => {
      if (!tag) return
      if (localTags.includes(tag)) return
      const nextTags = [...localTags, tag]
      setLocalTags(nextTags)
      onChangeTags(nextTags)
    },
    [localTags, onChangeTags],
  )

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag)
      setLocalTags(nextTags)
      onChangeTags(nextTags)
    },
    [localTags, onChangeTags],
  )

  const onChange = useCallback(e => {
    setInput(e.target.value)
  }, [])

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      insertTag(input.trim())
      setInput('')
    },
    [input, insertTag],
  )

  useEffect(() => {
    setLocalTags(tags)
  }, [tags])

  return (
    <div className="tagbox-wrapper">
      <h4>태그</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="태그를 입력하세요."
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
      <TagList tags={localTags} onRemove={onRemove} />
    </div>
  )
}

export default TagBox
