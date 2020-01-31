import React from 'react'
import styled from 'styled-components'
import 'styles/components/Tagbox.scss'

const Tag = styled.div`
margin-top: 0.5rem;
color: #868e96;
cursor: pointer;
margin-right:10px;
&:hover{
    opacity:0.5;
}
&:last-child{
    margin-right:0;
}
`

const TagListWrapper = styled.div`
display:flex;
margin-top: 0.5rem;
`

//React.memo 써서 태그 값 바뀔 때만 리렌더링
const TagItem = React.memo(({tag})=> <Tag>#{tag}</Tag>)

//React.memo 써서 tag 값 바뀔 때만 리렌더링
const TagList = React.memo(({tags})=> (
<TagListWrapper>
    {tags.map(tag => (
        <TagItem key={tag} tag={tag} />
    ))}
</TagListWrapper>
))


const TagBox = () => {
    return(
        <div className="tagbox-wrapper">
            <h4>태그</h4>
            <form>
                <input type="text" placeholder="태그를 입력하세요."/>
                <button type="submit">추가</button>
            </form>
            <TagList tags={['태그1', '태그2', '태그3']} />
        </div>
    )
}

export default TagBox