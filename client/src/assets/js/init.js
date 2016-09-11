import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import coinigyApp from './reducers/coinigyApp'
import { fetchExchanges } from './actions'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import AppContainer from './components/containers/AppContainer.jsx'
import api from './middleware/api'

const store = createStore(
  coinigyApp,
  applyMiddleware(thunkMiddleware, api)
)

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}></Route>
    </Router>
  </Provider>
), document.getElementById('content'))

store.dispatch(fetchExchanges())
