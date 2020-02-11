import React from 'react'
import styled from 'styled-components'
import 'styles/components/Memoviewer.scss'
import SubInfo from 'components/common/SubInfo'
import Tags from 'components/common/Tags'
import MemoActionButtons from './MemoActionButtons'
import {Link} from 'react-router-dom'


const MemoContent = styled.div`
font-size: 1rem;
color: #555;
min-height:500px;
`


const MemoViewer = ({memo, error, loading, actionButtons}) => {
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
            {actionButtons}
            <MemoContent dangerouslySetInnerHTML={{__html: body}} />
            <Link to ="/" className="list-button">목록</Link>
        </div>
    )
}

export default MemoViewer