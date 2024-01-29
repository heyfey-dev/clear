
import image1 from '../assets/image-21.png';
import image2 from '../assets/image-100.png';
import image3 from '../assets/image-8.png';
import image4 from '../assets/image-72.png';
import image5 from '../assets/image-108.png';
import image6 from '../assets/image-103.png';
import '../App.css'


const Imagegrid = () => {
  return (
    <div>
    <div>
    <div className='grid-container'>
        <div className='item' style={{backgroundColor:"rgb(255,156,102)"}}><img src={image1}  /></div>
        <div className='item' style={{backgroundColor:"rgb(214,187,251)"}}><img src={image2}  /></div>
        <div className='item' style={{backgroundColor:"rgb(172,220,121)"}}><img src={image3}  /></div>
        <div className='item' style={{backgroundColor:"rgb(179,184,219)"}}><img src={image4} /></div>
        <div className='item' style={{backgroundColor:"rgb(254,200,75)"}}><img src={image5}  /></div>
        <div className='item' style={{backgroundColor:"rgb(254,163,180)"}}><img src={image6} /></div>
    </div>
 </div>
    </div>
  )
}

export default Imagegrid
