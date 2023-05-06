import React, { useState } from 'react'
import '../styles/Multiselect.css'

function Multiselect() {
    let [list] = useState(['apple','orange','mango','grapes'])
    let [selection,setSelect] = useState([])
    let selected = [];
    function selectionMade(event){
        selected=[];
        console.log(event);
        let elements = document.querySelectorAll('.checkbox');
        elements.forEach(el=>{
            if(el.checked){
                selected.push(el.value)
            }   
        })
        setSelect(selected)
    }

    return (
        <div>
            <div className='multiselect'>
                <p>Multiselect</p>
                <div style={{display:"flex",justifyContent:'center'}}>
                    <div className='dropdown'>
                        {
                            list.map(
                                el=>
                                {return (
                                    <div className='list-item' key={el}>
                                        <input className='checkbox' value={el} onChange={(event)=>selectionMade(event)} type='checkbox'/> {el}
                                    </div>
                                )})
                        }
                    </div>
                </div>
            </div>
            <div>
                {selection.map(el=><div>{el}</div>)}
            </div>
        </div>
    )
}

export default Multiselect
