// import React, { useState } from 'react'
import '../styles/TopNav.css'


function TopNav({choosePanel}) {
    // let panel = useState(current_panel);
    return (
        <div className="top-nav">
            <button onClick={()=>choosePanel(0)} className='nav-button'>Counter</button>
            <button onClick={()=>choosePanel(1)} className='nav-button'>Multiselect</button>
        </div>
    )
}

export default TopNav
