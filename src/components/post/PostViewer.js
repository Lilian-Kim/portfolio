import React from 'react'
import styled from 'styled-components'
import 'styles/components/Postviewer.scss'


const Tags = styled.div`
margin-top: 0.5rem;
.tag{
    display: inline-block;
    color:#1c7ed6;
    text-decoration:none;
    margin-right:0.5rem;
    &:hover{
       color: #1864ab;
    }
}
`
const PostContent = styled.div`
font-size: 1.3125rem;
color: #555;
`


const PostViewer = () => {
    return(
        <div className="postviewer-wrapper">
            <div>
                <h1>제목</h1>
                <div >
                    <span>
                        <b>tester</b>
                    </span>
                    <span>{new Date().toLocaleDateString()}</span>
                </div>
                <Tags>
                    <div className="tag">#태그1</div>
                    <div className="tag">#태그2</div>
                    <div className="tag">#태그3</div>
                </Tags>
            </div>
            <PostContent dangerouslySetInnerHTML={{__html: '<p>HTML <b>내용</b>입니다.</p>'}} />
        </div>
    )
}

export default PostViewer