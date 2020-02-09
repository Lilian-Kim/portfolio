import React from 'react'
import MemoListContainer from '../containers/memos/MemoListContainer'
import PagenationContainer from '../containers/memos/PagenationContainer'
import MemoList from '../components/memos/MemoList'

const MemoListPage = () => {
    return(
        <>
        <MemoListContainer/>
        <PagenationContainer/>
        </>
    )
}

export default MemoListPage