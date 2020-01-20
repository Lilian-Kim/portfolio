import React from 'react'
// import './App.scss'
import MemoContainer from './components/MemoContainer'
import MemoHeader from './components/common/MemoHeader'
import MemoSide from './components/MemoSide'
import MemoFooter from './components/common/MemoFooter'
import MemoContent from './components/MemoContent'
import MemoList from './components/MemoList'
import {Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './components/Home'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className="App">
        <MemoHeader></MemoHeader>
        <MemoContainer>
        <Route exact path='/'><Home /></Route>       
        <Route path="/login"><LoginPage /></Route>        
        <Route path="/register"><RegisterPage/></Route>        

          {/* <MemoList></MemoList>
          <MemoContent></MemoContent> */}
        </MemoContainer>
        <MemoFooter>푸터</MemoFooter>
    </div>
  )
}

export default App
