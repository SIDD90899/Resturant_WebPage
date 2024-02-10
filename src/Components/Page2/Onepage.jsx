import { useState } from 'react'
import './One.css'
import { Outlet } from 'react-router-dom'



const Onepage = () => {
    const [click,setClick] = useState()

    function ClickMe(){
        setClick(alert('Click me'))
    }

  return (
    <div  id='hadd'>
      <div className='hadd-one'>
        <button onClick={ClickMe} onChange={(e)=>e.target.value} value={click}>Ascent</button>
       
        <p className='para'>Discover the essence of <br />fresh food & spectacular <br />view at our seaside oasis</p>
 
      </div>
      {/* <Outlet /> */}
    </div>
  )
}

export default Onepage
