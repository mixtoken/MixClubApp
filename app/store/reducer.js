/**
 * Created by yangyang on 2018/8/27.
 */
import { combineReducers } from 'redux'
import {walletReducer} from '../router/wallet'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    WALLETS: walletReducer,
    ...asyncReducers
  })
}

export default makeRootReducer
