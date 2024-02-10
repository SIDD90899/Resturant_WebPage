import { Outlet } from 'react-router-dom';
import './Menu.css'
const Menuhome = () => {
  return (
    <div  id='menu'>
    <div className='menu-one'>
      <h3>Ascent</h3>
      <p className='menu-para'>Indulge your taste buds <br />with our delicious meals <br />& beverages <br /><button>See our whole menu</button> </p>
   
    </div>
    <Outlet />
  </div>
  )
}

export default Menuhome;
