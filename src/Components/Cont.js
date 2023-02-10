import React from 'react';
import  './Cont.css'
import TodoList from './todolist.js'
function Contain(){

    return (
        <div className='Container'>
            <div className='fin'>
                <TodoList/>
            </div>
        </div>
    )
    
}
export default Contain