import React, { useEffect, useState } from 'react'
import '../styles/Multiselect.css'

function Multiselect() {
    let [list] = useState(['apple','orange','mango','grapes','banana','kiwi'])
    let [selection,setSelect] = useState([])
    let selected = [];
    let [show_dropdown, setDropdown] = useState(false);
    let elements;

    useEffect(()=>{
        elements = document.querySelectorAll('.checkbox');
    })
    
    function selectionMade(event){
        selected=[];
        console.log(event);
        elements.forEach(el=>{
            if(el.checked){
                selected.push(el.value)
            }   
        })
        setSelect(selected)
    }

    function selectAll(){
        console.log(elements);
        selected = [];
        elements.forEach(el=>{
            selected.push(el.value);
            el.checked=true;
        })
        console.log(selected)
        setSelect(selected);
    }
    
    function deselectAll(){
        selected = [];
        elements.forEach(el=>{
            el.checked = false;
        })
        setSelect(selected);
    }

    return (
        <div style={{width:'fit-content',position:'relative',left:'30px'}}>
            <div className='multiselect'>
                <p>Multiselect</p>
                <div className='multiselect-input rounded' onClick={()=>{setDropdown(!show_dropdown)}}>Select from the dropdown</div>
                <div>
                    <div className={['dropdown ',show_dropdown?' d-none':'']} >
                        <div className='dropdown-list scroll'>
                            {
                                list.map(
                                    el=>
                                    {return (
                                        <div className='list-item d-flex align-items-center' key={el}>
                                            <input className='checkbox ms-1 me-3' value={el} onChange={(event)=>selectionMade(event)} type='checkbox'/> {el}
                                        </div>
                                    )}
                                )
                            }
                        </div>
                        <div style={{height:'30px'}} className='position-absolute bottom-0 d-flex w-100'>
                            <button onClick={()=>{selectAll()}} className='w-50 border-0 border-end border-secondary raounded btn-primary'>Select All</button>
                            <button onClick={()=>{deselectAll()}} className='w-50 border-0 raounded'>Deselect All</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white'>
                {selection.map(el=><div key={el}>{el}</div>)}
            </div>
        </div>
    )
}

export default Multiselect
