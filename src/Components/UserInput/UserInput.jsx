import React, { useEffect } from 'react'
import './UserInput.css'
import { Search } from 'react-bootstrap-icons'

const UserInput = ({ onchange, fetchUser }) => {
    useEffect(() => { document.getElementById('input').focus() }, [])
    return (
        <div id='inputWrapper'>
            <span id='inputContainer'>
                <input id='input' type='search' onChange={onchange} placeholder='Enter your github username...' />
                <button onClick={fetchUser} type='submit' >
                    <Search id='search' />
                </button>
            </span>
        </div>
    )
}
export default UserInput