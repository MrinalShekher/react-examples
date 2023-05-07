import React, { useState } from 'react'
import '../styles/Multiselect.css'

function Multiselect() {
    let [list] = useState(['apple','orange','mango','grapes','banana'])
    let [selection,setSelect] = useState([])
    let selected = [];
    let [show_dropdown, setDropdown] = useState(false);
    
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
        <div style={{width:'fit-content',position:'relative',left:'30px'}}>
            <div className='multiselect'>
                <p>Multiselect</p>
                <div className='multiselect-input rounded' onClick={()=>{setDropdown(!show_dropdown)}}>Select from the dropdown</div>
                <div style={{display:"flex",justifyContent:'center'}}>
                    <div className={['dropdown ',show_dropdown?' d-none':'']} >
                        {
                            list.map(
                                el=>
                                {return (
                                    <div className='list-item d-flex align-items-center' key={el}>
                                        <input className='checkbox ms-1 me-3' value={el} onChange={(event)=>selectionMade(event)} type='checkbox'/> {el}
                                    </div>
                                )})
                        }
                    </div>
                </div>
            </div>
            <div className='text-white'>
                {selection.map(el=><div>{el}</div>)}
            </div>
        </div>
    )
}

export default Multiselect
