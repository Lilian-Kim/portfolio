import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const TagsWrapper = styled.div`
margin-top: 0.5rem;
.tag{
    display: inline-block;
    color: #1c7ed6;
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover{
        color: #228be6;
    }
}
`
const Tags = ({tags}) => {
    return(
        <TagsWrapper>
            {tags.map(tag => (
                <Link className="tag" to={`/?tag=${tag}`} key={tag}>#{tag}</Link>
            ))}
        </TagsWrapper>
    )
}

export default Tags