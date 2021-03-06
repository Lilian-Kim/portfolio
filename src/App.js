import React from 'react'
// import './App.scss'
import MemoContainer from './components/MemoContainer'
import MemoSide from './components/MemoSide'
import Footer from './components/common/Footer'
import MemoContent from './components/MemoContent'
import MemoList from 'components/memos/MemoList'
import {Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './components/Home'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'
import HeaderContainer from './containers/common/HeaderContainer'
import MemoPage from './pages/MemoPage'
import MemoListPage from './pages/MemoListPage'
import {Helmet} from 'react-helmet-async'

function App() {
  return (
    <div className="App">
         <Helmet>
           <title>SIMPLE MEMO</title>
         </Helmet>
        <HeaderContainer />
        <MemoContainer>
        {/* <Route exact path='/' component={Home} />     */}
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/write" component={WritePage}/> 
        <Route path={['/@:name', '/']} exact component={MemoListPage} />
        <Route path="/@:name/:memoId" component={MemoPage}/>
        <Route path="/logout" component={LoginPage}/> 

          {/* <MemoList></MemoList>
          <MemoContent></MemoContent> */}
        </MemoContainer>
        <Footer>푸터</Footer>
    </div>
  )
}

export default App
