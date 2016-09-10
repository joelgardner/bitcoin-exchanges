import { combineReducers } from 'redux'
import {
  EXCHANGES_SUCCESS
} from "../actions"


function entities(state = { exchanges : [], markets : [], history : [] }, action) {
  switch (action.type) {
    case EXCHANGES_SUCCESS:
      let result = Object.assign({}, state, { exchanges: action.response })
      return result;
  }

  return state;
}

/**
Application state
**/
const coinigyApp = combineReducers({
  entities
})

export default coinigyApp
