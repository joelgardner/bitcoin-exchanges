import React from 'react'
import Navbar from './Navbar.jsx'
import Chart from './Chart.jsx'

//let App = ({ loadMarkets, exchanges, markets, loadTransactions }) => {
  let App = (props) => {
  return (
    <div>
      {/*<Navbar loadMarkets={loadMarkets} exchanges={exchanges} markets={markets} loadTransactions={loadTransactions} />*/}
      <Navbar {...props} />
      <Chart history={props.history} />
    </div>
  )
}

export default App
