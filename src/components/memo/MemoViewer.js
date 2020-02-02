import React from 'react'
import styled from 'styled-components'
import 'styles/components/Memoviewer.scss'
import SubInfo from 'components/common/SubInfo'
import Tags from 'components/common/Tags'


const MemoContent = styled.div`
font-size: 1.3125rem;
color: #555;
`


const MemoViewer = ({memo, error, loading}) => {
    if(error){
        if(error.response && error.response.statue === 404){
            return <div className="memoviewer-wrapper">존재하지 않는 포스트입니다.</div>
        }
        return <div className="memoviewer-wrapper">오류 발생!</div>
    }
    if(loading || !memo){
        return null
    } 
    const {title, body, user, publishedDate, tags} = memo
    return(
        <div className="memoviewer-wrapper">
            <div>
                <h1>{title}</h1>
                <SubInfo name={user.name} publishedDate={publishedDate} hasMarginTop/>
                <Tags tags={tags}/>
            </div>
            <MemoContent dangerouslySetInnerHTML={{__html: body}} />
        </div>
    )
}

export default MemoViewer