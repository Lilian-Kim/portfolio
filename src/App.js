import React from 'react'
// import './App.scss'
import MemoTemplate from './components/MemoTemplate'
import MemoHeader from './components/MemoHeader'
import MemoSide from './components/MemoSide'
import MemoFooter from './components/MemoFooter'

function App() {
  return (
    <div className="App">
      <>
        <MemoTemplate>
          <MemoHeader></MemoHeader>
          <MemoSide>사이드</MemoSide>
          <MemoFooter>푸터</MemoFooter>
        </MemoTemplate>
      </>
    </div>
  )
}

export default App
