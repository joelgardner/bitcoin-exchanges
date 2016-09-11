import React from 'react'
import Exchanges from '../Exchanges.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    exchanges : state.exchanges.data
  }
}

const ExchangesContainer = connect()(Exchanges)

export default ExchangesContainer
