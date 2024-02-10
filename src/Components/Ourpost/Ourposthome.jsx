// import Ourpostone from '../Ourpost1/Ourpostone'
import Ourposttwo from '../Ourpost2/Ourposttwo'
// import Ourpost2 from '../Ourpost2/Ourpost.jsx'
import './Ourposthome.css'


const Ourposthome = () => {
  return (
    <>
    <div className="contain">
      <div className='contain-head'>
      <h1>
      The story <br /> of Ascent
      </h1>
      </div>
      <div className='contain-body'>
        <p>
        From rags to riches (foodwise)
        </p>
      </div>
    </div>
    {/* <Ourpostone /> */}
    {/* <Ourpost2 /> */}
    <Ourposttwo />
    </>
  )
}

export default Ourposthome
