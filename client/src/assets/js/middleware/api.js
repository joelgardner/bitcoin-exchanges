import 'isomorphic-fetch'

export const CALL_API = Symbol('Call API')

const API_VERSION = 'v1'
const API_ROOT = `https://www.coinigy.com/api/${API_VERSION}`

function callApi(endpoint) {
  return fetch(API_ROOT + endpoint, { mode: 'no-cors' })
    .then(response => response.json().then(json => { json, response }))
}

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, types } = callAPI

  // validate the shape of our action
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}


