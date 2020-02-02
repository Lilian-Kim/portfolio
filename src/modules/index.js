import {combineReducers} from 'redux'
import {all} from 'redux-saga/effects'
import auth, {authSaga} from './auth'
import loading from './loading'
import user, {userSaga} from './user'
import write, {writeSaga} from './write'
import memo, {memoSaga} from './memo'

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    memo,
})

export function* rootSaga(){
    yield all([authSaga(), userSaga(), writeSaga(), memoSaga()])
}
export default rootReducer