/**
 * Created by yangyang on 2018/8/27.
 */
import Wallets from './Wallets'
import ImportEosWallet from './ImportEosWallet'
import * as walletRedux from './redux'

/* export saga */
export const walletSaga = walletRedux.walletSaga

/* export reducer */
export const walletReducer = walletRedux.walletReducer

/* export action */
export const walletActions = walletRedux.walletAction

/* export selector */
export const walletSelector = walletRedux.walletSelector

export {
  ImportEosWallet
}

export default Wallets