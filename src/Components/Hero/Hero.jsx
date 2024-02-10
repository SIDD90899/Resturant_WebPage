import './Hero.css'
import Onepage from '../Page2/Onepage'
import Two from '../Page3/Two'
import Footer from '../Footer/Footer'



const Hero = () => {
  return (
    <>
    <div id='ffff' className="conatiner-fluid">
      <div>
        <div className='one'>
            EST<span>1994</span>

        </div>
        <div className='two'>
            <p><span>Your new favorite</span><br /><span>Seaside  resturant </span></p>
           
        </div>
        <div className='three'>
            <h1>
                ASCENT
            </h1>
        </div>
   
      </div>
    </div>
    <Onepage/>
    <Two />
    <hr/>
    <Footer />
    </>
  )
}

export default Hero
