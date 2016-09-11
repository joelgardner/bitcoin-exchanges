import { combineReducers } from 'redux'
import {
  EXCHANGES_SUCCESS,
  MARKETS_SUCCESS,
  TRANSACTIONS_SUCCESS,
  SELECT_EXCHANGE
} from "../actions"


function entities(state = { exchanges : {}, markets : {}, history : { data : {} } }, action) {
  switch (action.type) {
    case EXCHANGES_SUCCESS:
      return Object.assign({}, state, { exchanges: action.response })
    case MARKETS_SUCCESS:
      return Object.assign({}, state, { markets: action.response })
    case TRANSACTIONS_SUCCESS:
      return Object.assign({}, state, { history: action.response })
  }

  return state;
}

function selections(state = { exchange : null, market : null }, action) {
  switch (action.type) {
    case SELECT_EXCHANGE:
      return Object.assign({}, state, { exchange: action.exchange })
  }

  return state;
}

/**
Application state
**/
const coinigyApp = combineReducers({
  entities,
  selections
})

export default coinigyApp
