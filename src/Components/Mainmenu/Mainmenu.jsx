import Menupage from '../MenuPage/Menupage';
import './Mainmenu.css';

const Mainmenu = () => {
  return (
    <>
    <div id='mainmenu' className='container-fluid'>
      <div className='mainmenu-head'>
        <h2>THE</h2>
        <h1 className='menu-para'>MENU</h1>
        <p>
        Our current delicious meals & beverages
        </p>
      </div>
     
    </div>
    <Menupage />
    </>
  )
}

export default Mainmenu
