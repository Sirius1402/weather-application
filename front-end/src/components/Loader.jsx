import React from 'react'
import loader from '../Spinner.gif'

function Loader() {
  return (
    <div className='load'>
        <img src={loader} className='loading' alt="Loading"/>
        <p>Loadind...</p>
    </div>
  )
}

export default Loader