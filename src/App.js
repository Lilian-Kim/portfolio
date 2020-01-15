import React from 'react'
// import './App.scss'
import MemoContainer from './components/MemoContainer'
import MemoHeader from './components/MemoHeader'
import MemoSide from './components/MemoSide'
import MemoFooter from './components/MemoFooter'
import MemoContent from './components/MemoContent'
import MemoList from './components/MemoList'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MemoHeader></MemoHeader>
        <Route path="/login">
          <Login></Login>
        </Route>
        <MemoContainer>
          <MemoList></MemoList>
          <MemoContent></MemoContent>
        </MemoContainer>
        <MemoFooter>푸터</MemoFooter>
      </BrowserRouter>
    </div>
  )
}

export default App
