import React from 'react'
import './viewDetailsButton.scss'
const ViewDetailsButton = (props) => {
  return (
    <button {...props} className='viewButton' type='button'>
      view details
    </button>
  )
}

export default ViewDetailsButton
