import React from 'react'
// import './App.scss'
import MemoContainer from './components/MemoContainer'
import Header from './components/common/Header'
import MemoSide from './components/MemoSide'
import Footer from './components/common/Footer'
import MemoContent from './components/MemoContent'
import MemoList from './components/MemoList'
import {Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './components/Home'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'
import HeaderContainer from './containers/common/HeaderContainer'

function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <MemoContainer>
        <Route exact path='/'><Home /></Route>       
        <Route path="/login"><LoginPage /></Route>        
        <Route path="/register"><RegisterPage/></Route> 
        <Route path="/write"><WritePage /></Route>       

          {/* <MemoList></MemoList>
          <MemoContent></MemoContent> */}
        </MemoContainer>
        <Footer>푸터</Footer>
    </div>
  )
}

export default App
