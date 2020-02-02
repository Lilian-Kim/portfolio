import {createAction, handleActions} from 'redux-actions'
import createRequestSaga, {createRequestActionTypes} from 'lib/createRequestSaga'
import * as memoAPI from 'lib/api/memo'
import {takeLatest} from 'redux-saga/effects'

const [
    READ_MEMO,
    READ_MEMO_SUCCESS,
    READ_MEMO_FAILURE,
] = createRequestActionTypes('memo/READ_MEMO')
const UNLOAD_MEMO = 'memo/UNLOAD_MEMO'

export const readMemo = createAction(READ_MEMO, id => id)
export const unloadMemo = createAction(UNLOAD_MEMO)

const readMemoSaga = createRequestSaga(READ_MEMO, memoAPI.readMemo)
export function* memoSaga(){
    yield takeLatest(READ_MEMO, readMemoSaga)
}

const initialState = {
    memo: null,
    error: null,
}

const memo = handleActions(
    {
        [READ_MEMO_SUCCESS]: (state, {payload: memo}) => ({
            ...state,
            memo,
        }),
        [READ_MEMO_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_MEMO]: () => initialState,
    },
    initialState,
)




export default memo