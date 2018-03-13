import React from 'react'
import { Link } from 'react-router-dom'

const SingleStation = (props) => {
  return (
    <section className="main-section">
      <div style={{ padding: '15px'}}>
        {props.match.params.stationId}
      </div>
      <div style={{ padding: '15px'}}>
        Some more details
      </div>
      <Link
        style={{ padding: '15px'}}
        to='/'
      >
        Home
      </Link>
    </section>
  )
}

export default SingleStation
