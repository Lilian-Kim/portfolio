import React from 'react'
import Pagenation from 'components/memos/Pagenation'
import {useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import qs from 'qs'

const PagenationContainer = ({location}) => {
    const {lastPage, memos, loading} = useSelector(({memos, loading}) => ({
        lastPage: memos.lastPage,
        memos: memos.memos,
        loading: loading['memos/LIST_MEMOS']
    }))

    if(!memos || loading) return null
    const {tag, name, page = 1} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    })

    return(
        <Pagenation tag={tag} name={name} page={parseInt(page,10)} lastPage={lastPage}/>
    )

}

export default withRouter(PagenationContainer)