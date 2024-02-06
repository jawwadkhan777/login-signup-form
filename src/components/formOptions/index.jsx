import React from 'react'
import './style.scss'


const FormOptions = ({action, setAction}) => {
  return (
    <div className='options'>
    <span className={action==="Login"? 'active': 'dull'} onClick={()=> {setAction("Login")}}>Login</span>/<span className={action==="Sign Up"? 'active': 'dull'} onClick={()=> {setAction("Sign Up")}}>Sign Up</span></div>
  )
}

export default FormOptions