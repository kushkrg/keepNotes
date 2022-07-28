import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
        <h1>KeepNotes</h1>
        
                <div class="mt-transparent"> 
                    <input onClick={
                     ()=> handleToggleDarkMode(
                      (previousDarkMode)=> !previousDarkMode
                     )}  
                     id="1" 
                     type="checkbox" />
                    <label for="1"></label>
                </div>
    </div>
  )
}

export default Header