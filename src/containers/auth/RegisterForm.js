import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm, register } from 'modules/auth.js'
import AuthForm from 'components/auth/AuthForm'
import { check } from 'modules/user'
import {withRouter} from 'react-router-dom'

const RegisterForm = ({history}) => {
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }))
  //인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    const { name, email, password } = form
    //아래 값중 하나라도 비어있다면
    if([name, email, password].includes('')){
      setError('빈 칸을 모두 입력하세요')
      return
    }
    dispatch(register({ email, password }))
  }

  //컴포넌트가 처음 렌더링될 때 form초기화
  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch])

  useEffect(() => {
    if (authError) {
      //이미 계정이 존재
      if (authError.response.state === 409){
        //메세지 최종적으로 추후 수정하기
        setError('이미 존재하는 걔정입니다.')
        return
      }
      //기타
      setError('회원가입 실패')
      return
    }
    if (auth) {
      console.log('회원가입 성공')
      console.log(auth)
      dispatch(check())
    }
  }, [auth, authError, dispatch])

  //user값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      console.log('check api 성공')
      console.log(user)
      history.push('/login')
      
    }
  }, [history, user])

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  )
}

export default withRouter(RegisterForm)
