
import { Link } from 'react-router-dom'


const BigDIscount = () => {
  return (
    <div className="big-discount">
        
        <h3>BIG DISCOUNT</h3>
        <h1>Google Pixel Phones</h1>
        
        <Link to={'/products'}><button>Shop Now</button></Link>
        
        <div className="image">
        <img src="images/google pixel.png" alt=""/>            
        </div>

    </div>
  )
}

export default BigDIscount