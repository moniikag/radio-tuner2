import React from 'react'

const SingleStation = (props) => {
  return (
    <section className="main-section">
      <div style={{ padding: '15px'}}>
        {props.match.params.stationId}
      </div>
      <div style={{ padding: '15px'}}>
        Some more details
      </div>
    </section>
  )
}

export default SingleStation
