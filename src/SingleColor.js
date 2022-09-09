import React, { useState, useEffect } from 'react'

const SingleColor = ({weight,index,hexColor}) => {
  let [alert,setAlert] = useState(false)
  let hexValue = `#${hexColor}`

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return ()=> clearTimeout(timeout)
  }, [alert])
  
  
  return <article className={`color ${index>14 && 'color-light'}`} style={{backgroundColor:`${hexValue}`}} 
    onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}>
    <p className='color-value'>{hexValue}</p>
    {alert && <p className={`alert ${index>17 && 'alert-light'}`}>copied to clipboard</p>}
  </article>
}

export default SingleColor
