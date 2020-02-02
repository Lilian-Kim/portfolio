import {createAction, handleActions} from 'redux-actions'
import createRequestSaga, {createRequestActionTypes} from 'lib/createRequestSaga'
import * as memoAPI from 'lib/api/memo'
import {takeLatest} from 'redux-saga/effects'

const [
    LIST_MEMOS,
    LIST_MEMOS_SUCCESS,
    LIST_MEMOS_FAILURE,
] = createRequestActionTypes('memo/LIST_MEMOS')

export const listMemos = createAction(
    LIST_MEMOS,
    ({tag, name, page}) => ({tag, name, page}),
)

const listMemosSaga = createRequestSaga(LIST_MEMOS, memoAPI.listMemos)
export function* memosSaga(){
    yield takeLatest(LIST_MEMOS, listMemosSaga)
}

const initialState = {
    memos: null,
    error: null,
}

const memos = handleActions(
    {
        [LIST_MEMOS_SUCCESS]: (state, {payload: memos}) => ({
            ...state,
            memos,
        }),
        [LIST_MEMOS_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
}, initialState)

export default memos