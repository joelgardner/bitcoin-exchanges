import { CALL_API } from '../middleware/api'

/**
These actions follow the basic pattern outlined here:
https://github.com/reactjs/redux/blob/master/examples/real-world/src/actions/index.js

In the actions we merely want to define what the API call should look like, and this is used
by middleware/api.js for the nitty gritty of sending requests.

loadX actions currently merely proxy to the fetchX actions, BUT in the future,
they could be used to return the data from a local cache rather than hitting the API every time.
**/

// Exchanges
export const EXCHANGES_REQUEST = 'EXCHANGES_REQUEST'
export const EXCHANGES_SUCCESS = 'EXCHANGES_SUCCESS'
export const EXCHANGES_FAILURE = 'EXCHANGES_FAILURE'
export function fetchExchanges() {
  return {
    [CALL_API] : {
      types : [ EXCHANGES_REQUEST, EXCHANGES_SUCCESS, EXCHANGES_FAILURE ],
      endpoint : '/exchanges'
    }
  }
}

export function loadExchanges() {
  return fetchExchanges()
}

// helper action for easy access to the selected exchange
export const SELECT_EXCHANGE = 'SELECT_EXCHANGE'
export function selectExchange(exchange) {
  return {
    type: SELECT_EXCHANGE,
    exchange
  }
}

// Markets
export const MARKETS_REQUEST = 'MARKETS_REQUEST'
export const MARKETS_SUCCESS = 'MARKETS_SUCCESS'
export const MARKETS_FAILURE = 'MARKETS_FAILURE'
export function fetchMarkets(exchangeCode) {
  return {
    [CALL_API] : {
      types : [ MARKETS_REQUEST, MARKETS_SUCCESS, MARKETS_FAILURE ],
      endpoint : '/markets',
      body : {
        "exchange_code": exchangeCode
      }
    }
  }
}

export function loadMarkets(exchangeCode) {
  return (dispatch, getState) => {
    let selectedExchange = getState().entities.exchanges.data.find(ex => ex.exch_code === exchangeCode)
    dispatch(selectExchange(selectedExchange))
    dispatch(fetchMarkets(exchangeCode))
  }
}

// Transaction history
export const TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST'
export const TRANSACTIONS_SUCCESS = 'TRANSACTIONS_SUCCESS'
export const TRANSACTIONS_FAILURE = 'TRANSACTIONS_FAILURE'
export function fetchTransactions(exchangeCode, marketType) {
  return {
    [CALL_API] : {
      types : [ TRANSACTIONS_REQUEST, TRANSACTIONS_SUCCESS, TRANSACTIONS_FAILURE ],
      endpoint : '/data',
      body : {
        'type': 'history',
        'exchange_code': exchangeCode,
        'exchange_market': marketType,
      }
    }
  }
}

export function loadTransactions(marketType) {
  return (dispatch, getState) => {
    let exchangeCode = getState().selections.exchange.exch_code
    dispatch(fetchTransactions(exchangeCode, marketType))
  }
}

