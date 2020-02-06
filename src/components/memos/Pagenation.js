import React from 'react'
import styled from 'styled-components'
import qs from 'qs'
import Button from 'components/common/Button'

const PagenationWrapper = styled.div`
width: 320px;
margin: 0 auto;
display: flex;
justify-content: space-between;
margin-bottom: 3rem;
`

const PageNumber = styled.div``

const buildLink = ({name, tag, page}) => {
    const query = qs.stringify({tag, page})
    return name ? `/@{name}?${query}` : `/?${query}`
}

const Pagenation = ({page, lastPage, name, tag}) => {
    return(
        <PagenationWrapper>
            <Button disabled={page === 1} to={page === 1 ? undefined: buildLink({name, tag, page:page-1})}>이전</Button>
            <PageNumber>{page}</PageNumber>
            <Button disabled={page === lastPage} to={page === lastPage ? undefined : buildLink({name, tag, page: page+1})}>다음</Button>
        </PagenationWrapper>
    )
}

export default Pagenation