import React from 'react'
import App from '../App.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loadMarkets,
  loadTransactions
} from '../../actions'

const mapStateToProps = (state) => {
  return {
    exchanges : state.entities.exchanges.data,
    markets : state.entities.markets.data,
    history : state.entities.history.data.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMarkets,
    loadTransactions
  }, dispatch)
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
