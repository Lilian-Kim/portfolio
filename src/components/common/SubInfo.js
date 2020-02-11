import React from 'react'
import styled,{css} from 'styled-components'
import { Link } from 'react-router-dom'

const SubInfoWrapper = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: #868e96;

  span + span:before {
    color: #ced4da;
    padding-left: 0.25rem;
    padding-bottom: 0.25rem;
    content: '\\B7';
  }
`

const SubInfo = ({ name, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoWrapper hasMarginTop={hasMarginTop}>
      <span>
        <b>
          {/* <Link to={`/@${name}`}>{name}</Link> */}
          <Link to={`/?name=${name}`}>{name}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoWrapper>
  )
}

export default SubInfo
