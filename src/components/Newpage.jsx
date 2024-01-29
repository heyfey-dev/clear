import image1 from '../assets/shopify.png';
import image2 from '../assets/coinbase.png';
import image3 from '../assets/dropbox.png';
import image4 from '../assets/intercom.png';
import image5 from '../assets/marvel.png';
import image6 from '../assets/autorename.png';
const Newpage = () => {
  return (
    <div style={{
      marginTop:"5rem",
      lineHeight:"50px"
    }}>
      <div style={{
        textAlign:"center"
      }}>
        <p style={{
          fontFamily: "Inter",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "500",
          color: "var(--Gray-600, #475467)",
          
        }}>Join 1,500+ companies already video conferencing the ClearLink way</p>
      </div>
      <div className='d-flex gap-5'>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newpage;
