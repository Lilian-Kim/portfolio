import React from 'react'
// import './App.scss'
import MemoTemplate from './components/MemoTemplate'
import MemoHeader from './components/MemoHeader'
import MemoSide from './components/MemoSide'
import MemoFooter from './components/MemoFooter'
import MemoContent from './components/MemoContent'



function App() {
  return (
    <div className="App">
      <>
        <MemoTemplate>
          <MemoHeader></MemoHeader>
          <MemoSide></MemoSide>
          <MemoContent></MemoContent>
          <MemoFooter>푸터</MemoFooter>
        </MemoTemplate>
      </>
    </div>
  )
}

export default App
