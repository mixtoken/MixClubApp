/**
 * Created by yangyang on 2018/8/27.
 */
import { all } from 'redux-saga/effects'
import {walletSaga} from '../router/wallet'

export default function* rootSaga() {
  yield all([
    ...walletSaga,
  ])
}
