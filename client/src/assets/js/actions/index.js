import { CALL_API } from '../middleware/api'

// exchanges
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

