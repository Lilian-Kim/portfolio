import React from 'react'
// import './App.scss'
import MemoContainer from './components/MemoContainer'
import MemoHeader from './components/MemoHeader'
import MemoSide from './components/MemoSide'
import MemoFooter from './components/MemoFooter'
import MemoContent from './components/MemoContent'
import MemoList from './components/MemoList'

function App() {
  return (
    <div className="App">
      <MemoHeader></MemoHeader>
      <MemoContainer>
        <MemoList></MemoList>
        <MemoContent></MemoContent>
      </MemoContainer>
      <MemoFooter>푸터</MemoFooter>
    </div>
  )
}

export default App
