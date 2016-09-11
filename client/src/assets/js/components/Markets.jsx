import React from 'react'


let Markets = ({ markets, loadTransactions }) => {
  if (!markets) {
    return null;
  }

  // Display dropdown containing market choices
  return (
    <select className="c-choice c-choice--xsmall" onChange={(e) => loadTransactions(e.target.value)}>
      <option>Select a Market...</option>
      {markets.map(mkt => {
        return <option key={mkt.mkt_id} value={mkt.mkt_name}>{mkt.mkt_name}</option>
      })}
    </select>
  )
}

export default Markets
