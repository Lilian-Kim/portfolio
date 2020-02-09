import {
    createAction,
    handleActions
} from 'redux-actions'
import createRequestSaga, {
    createRequestActionTypes
} from 'lib/createRequestSaga'
import * as memoAPI from 'lib/api/memo'
import {
    takeLatest
} from 'redux-saga/effects'

const INITIALIZE = 'write/INITIALIZE'
const CHANGE_FIELD = 'write/CHANGE_FIELD'
const [WRITE_MEMO, WRITE_MEMO_SUCCESS, WRITE_MEMO_FAILURE] = createRequestActionTypes('write/WRITE_MEMO')
const SET_ORIGINAL_MEMO = 'write/SET_ORIGINAL_MEMO'

const [
    UPDATE_MEMO,
    UPDATE_MEMO_SUCCESS,
    UPDATE_MEMO_FAILURE
] = createRequestActionTypes('write/UPDATE_MEMO')

export const initialize = createAction(INITIALIZE)
export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value,
}))
export const writeMemo = createAction(WRITE_MEMO, ({
    title,
    body,
    tags
}) => ({
    title,
    body,
    tags,
}))

export const updateMemo = createAction(UPDATE_MEMO, ({
    id,
    title,
    body,
    tags
}) => ({
    id,
    title,
    body,
    tags,
}))

export const setOriginalMemo = createAction(SET_ORIGINAL_MEMO, memo => memo)

const writeMemoSaga = createRequestSaga(WRITE_MEMO, memoAPI.writeMemo)
const updateMemoSaga = createRequestSaga(UPDATE_MEMO, memoAPI.updateMemo)

export function* writeSaga() {
    yield takeLatest(WRITE_MEMO, writeMemoSaga)
    yield takeLatest(UPDATE_MEMO, updateMemoSaga)
}


const initialState = {
    title: '',
    body: '',
    tags: [],
    memo: null,
    memoError: null,
    originalMemoId: null,
}

const write = handleActions({
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {
            payload: {
                key,
                value
            }
        }) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_MEMO]: state => ({
            ...state,
            memo: null,
            memoError: null,
        }),
        [WRITE_MEMO_SUCCESS]: (state, {
            payload: memo
        }) => ({
            ...state,
            memo,
        }),
        [WRITE_MEMO_FAILURE]: (state, {
            payload: memoError
        }) => ({
            ...state,
            memoError,
        }),
        [SET_ORIGINAL_MEMO]: (state, {
            payload: memo
        }) => ({
            ...state,
            title: memo.title,
            body: memo.body,
            tags: memo.tags,
            originalMemoId: memo._id,
        }),
        [UPDATE_MEMO_SUCCESS]:(state, {payload: memo}) => ({
            ...state,
            memo,
        }),
        [UPDATE_MEMO_FAILURE] : (state, {payload:memoError}) => ({
            ...state,
            memoError,
        })
    },
    initialState,
)

export default write