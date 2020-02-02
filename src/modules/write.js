import {createAction, handleActions} from 'redux-actions'
import createRequestSaga, {createRequestActionTypes} from 'lib/createRequestSaga'
import * as memoAPI from 'lib/api/memo'
import {takeLatest} from 'redux-saga/effects'

const INITIALIZE = 'write/INITIALIZE'
const CHANGE_FIELD = 'write/CHANGE_FIELD'
const [WRITE_MEMO, WRITE_MEMO_SUCCESS, WRITE_MEMO_FAILURE] = createRequestActionTypes('write/WRITE_MEMO')

export const initialize = createAction(INITIALIZE)
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,
}))
export const writeMemo = createAction(WRITE_MEMO, ({title, body, tags}) => ({
    title,
    body,
    tags,
}))

const writememoSaga = createRequestSaga(WRITE_MEMO, memoAPI.writeMemo)
export function* writeSaga(){
    yield takeLatest(WRITE_MEMO, writememoSaga)
}

const initialState = {
    title: '',
    body: '',
    tags: [],
    memo: null,
    memoError: null,
}

const write = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload:{key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_MEMO]: state => ({
            ...state,
            memo:null,
            memoError:null,
        }),
        [WRITE_MEMO_SUCCESS]: (state, {payload: memo}) => ({
            ...state,
            memo,
        }),
        [WRITE_MEMO_FAILURE]: (state, {payload:memoError}) => ({
            ...state,
            memoError,
        })
    },
    initialState,
)

export default write