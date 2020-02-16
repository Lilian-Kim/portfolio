import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from 'components/common/Header'
import {logout} from 'modules/user'

const HeaderContainer = ({history}) => {
    const {user} = useSelector(({user})=>({user:user.user}))
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        console.log('로그아웃 성공')
        
    }
    return <Header user={user} onLogout={onLogout}/>
}

export default HeaderContainer