import './Ourpost2.css'
import imageone from '../../assets/landscape-1.png'
import imagetwo from '../../assets/landscape-2.png'
import imagethree from '../../assets/landscape-3.png'



const Ourposttwo = () => {
  return (

    <div className="containor">
    <div className="card__container">
       <article className="card__article">
          <img src={imageone} alt="image" className="card__img"/>

          <div className="card__data">
             <span className="card__description">Vancouver Mountains, Canada</span>
             <h2 className="card__title">The Great Path</h2>
             <a href="#" className="card__button">Read More</a>
          </div>
       </article>

       <article className="card__article">
          <img src={imagetwo} alt="image" className="card__img"/>

          <div className="card__data">
             <span className="card__description">Poon Hill, Nepal</span>
             <h2 className="card__title">Starry Night</h2>
             <a href="#" className="card__button">Read More</a>
          </div>
       </article>

       <article className="card__article">
          <img src={imagethree} alt="image" className="card__img" />

          <div className="card__data">
             <span className="card__description">Bojcin Forest, Serbia</span>
             <h2 className="card__title">Path Of Peace</h2>
             <a href="#" className="card__button">Read More</a>
          </div>
       </article>
    </div>
 </div>
  )
}

export default Ourposttwo
