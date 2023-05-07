import React from 'react'
import Counter from './Counter'
import Multiselect from './Multiselect'

function Body({current_panel}) {
  return (
    <div>
      {current_panel===1?(<Counter/>):(<Multiselect/>)}
    </div>
  )
}

export default Body
