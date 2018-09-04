/**
 * Created by yangyang on 2018/8/27.
 */
import {call, put, select, takeLatest} from 'redux-saga/effects'
import {createAction} from 'redux-actions'
import {Record, Map, Set, List} from 'immutable'
import {REHYDRATE} from 'redux-persist'

/**
 * Model
 */
class Wallets extends Record({
  wallets: Map(),
}, 'Wallets') {}

class Wallet extends Record({
  name: undefined,
  type: undefined,
  keystore: undefined,
}, 'Wallet') {
  
}

class Keystore extends Record({
  privateKey: undefined,
}, "Keystore") {
  static fromJson(json) {
    if (!json) {
      return undefined
    }
    let keystore = new Keystore()
    return keystore.withMutations((record) => {
      record.set('privateKey', json.privateKey)
    })
  }
}

/**
 * Constant
 */
const CREATE_WALLET = 'CREATE_WALLET'
const SAVE_WALLET = 'SAVE_WALLET'
const SAVE_KEYSTORE = 'SAVE_KEYSTORE'

/**
 * Action
 */
export const walletAction = {
  createWallet: createAction(CREATE_WALLET),
}

const saveWallet = createAction(SAVE_WALLET)

/**
 * Saga
 */
export const walletSaga = [
  takeLatest(CREATE_WALLET, sagaCreateWallet),
]

function* sagaCreateWallet(action) {
  let payload = action.payload
  try {
    yield put(saveWallet({name: payload.name, type: payload.type, keystore: payload.keystore}))
    if (payload.success) {
      payload.success()
    }
  } catch (e) {
    if (payload.error) {
      payload.error(e.message)
    }
  }
}

/**
 * Reducer
 */
const initialState = new Wallets()

export function walletReducer(state=initialState, action) {
  switch (action.type) {
    case SAVE_WALLET:
      return reduceSaveWallet(state, action)
    case REHYDRATE:
      return onRehydrate(state, action);
    default:
      return state
  }
}

function reduceSaveWallet(state, action) {
  let payload = action.payload
  let name = payload.name
  let keystore = new Keystore({privateKey: payload.keystore})
  let wallet = new Wallet({name, type: payload.type, keystore})
  state = state.setIn(['wallets', name], wallet)
  return state
}

function onRehydrate(state, action) {
  if (!action.payload) {
    return state
  }
  let incoming = action.payload.WALLETS
  if (!incoming) {
    return state
  }
  
  return state
}

/**
 * Selector
 */
export const walletSelector = {
  selectWallet,
}

function selectWallet(state, name) {
  let wallet = state.WALLETS.getIn(['wallets', name])
  if (!wallet) {
    return undefined
  }
  return wallet
}