import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Exchanges from './Exchanges.jsx'
import Markets from './Markets.jsx'

let Navbar = ({ loadMarkets, loadTransactions, exchanges, markets }) => {
  return (
    <ul className="c-nav c-nav--inline">
      <li className="c-nav__item" id="exchanges-nav-item" disabled>
        <Exchanges exchanges={exchanges} loadMarkets={loadMarkets} />
      </li>
      { markets
        ? <li className="c-nav__item" id="exchanges-nav-item" disabled>
            <Markets markets={markets} loadTransactions={loadTransactions} />
          </li>
        : null }
    </ul>
  )
}

export default Navbar
