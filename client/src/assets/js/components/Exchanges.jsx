import React from 'react'

let Exchanges = ({ exchanges, loadMarkets }) => {
  // if we have exchanges, display a dropdown containing each one
  return exchanges && exchanges.length ? (
    <select className="c-choice c-choice--xsmall" onChange={(e) => loadMarkets(e.target.value)}>
      <option>Select an Exchange...</option>
      {exchanges.map(ex => {
        return <option key={ex.exch_code} value={ex.exch_code}>{ex.exch_name}</option>
      })}
    </select>

  // otherwise display a loading indicator
  ) : (
    <select className="c-choice c-choice--xsmall" disabled>
      <option>Loading exchanges...</option>
    </select>
  )
}

export default Exchanges
