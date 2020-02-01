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


const PostViewer = ({post, error, loading}) => {
    if(error){
        if(error.response && error.response.statue === 404){
            return <div className="postviewer-wrapper">존재하지 않는 포스트입니다.</div>
        }
        return <div className="postviewer-wrapper">오류 발생!</div>
    }
    if(loading || !post){
        return null
    } 
    const {title, body, user, publishedDate, tags} = post
    return(
        <div className="postviewer-wrapper">
            <div>
                <h1>{title}</h1>
                <div >
                    <span>
                        <b>{user.name}</b>
                    </span>
                    <span>{new Date(publishedDate).toLocaleDateString()}</span>
                </div>
                <Tags>
                    {tags.map(tag => (<div className="tag">#{tag}</div>))}
                </Tags>
            </div>
            <PostContent dangerouslySetInnerHTML={{__html: body}} />
        </div>
    )
}

export default PostViewer