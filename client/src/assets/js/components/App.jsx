import React from 'react'
import Navbar from './Navbar.jsx'
import Chart from './Chart.jsx'

//let App = ({ loadMarkets, exchanges, markets, loadTransactions }) => {
  let App = (props) => {
  return (
    <div className="o-panel-container">
      <div className="c-nav c-nav--inline c-nav--top">
        <Navbar {...props} />
      </div>
      <div className="o-panel o-panel--nav-top" style={{ height:'600px' }}>
        <Chart history={props.history} />
      </div>
    </div>
  )
}

export default App
