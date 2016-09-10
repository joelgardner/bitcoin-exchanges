import React from 'react'
import App from '../App.jsx'
import { connect } from 'react-redux'

// const mapStateToProps = (state) => {
//   return {
//     isFetching : state.session.isFetching
//   }
// }

const AppContainer = connect()(App)

export default AppContainer
