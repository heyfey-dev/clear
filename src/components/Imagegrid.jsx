
import image1 from '../assets/image-21.png';
import image2 from '../assets/image-100.png';
import image3 from '../assets/image-8.png';
import image4 from '../assets/image-72.png';
import image5 from '../assets/image-108.png';
import image6 from '../assets/image-103.png';
import image7 from '../assets/microphone-01.png';
import image8 from '../assets/video-recorder.png';
import image9 from '../assets/monitor-01.png';
import image10 from '../assets/face-smile.png';
import image11 from '../assets/message-text-circle-02.png';
import image12 from '../assets/settings-01.png';
import '../App.css';

const Imagegrid = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '16px', border:"1px solid var(--Blue-200, #B2DDFF)", backgroundColor:"rgb(239,248,255)", boxShadow:"0px 5px 30px  "}}>
      <div className='grid-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '32px', gap: '16px', marginBottom: '-16px' }}>
        <div className='item' style={{ backgroundColor: 'rgb(255,156,102)' }}><img src={image1} alt="" /></div>
        <div className='item' style={{ backgroundColor: 'rgb(214,187,251)' }}><img src={image2} alt="" /></div>
        <div className='item' style={{ backgroundColor: 'rgb(172,220,121)' }}><img src={image3} alt="" /></div>
        <div className='item' style={{ backgroundColor: 'rgb(179,184,219)' }}><img src={image4} alt="" /></div>
        <div className='item' style={{ backgroundColor: 'rgb(254,200,75)' }}><img src={image5} alt="" /></div>
        <div className='item' style={{ backgroundColor: 'rgb(254,163,180)' }}><img src={image6} alt="" /></div>
      </div>

      <div className='newitem' style={{ display: 'flex', padding: '32px', marginTop:"-190px", gap:"40px"}}>
        <div style={{backgroundColor:"white", borderRadius:"100%" }}><img src={image7} alt="" /></div>
        <div style={{ backgroundColor:"white", borderRadius:"100%"}}><img src={image8} alt="" /></div>
        <div style={{ backgroundColor:"white", borderRadius:"100%"}}><img src={image9} alt="" /></div>
        <div style={{ backgroundColor:"white", borderRadius:"100%"}}><img src={image10} alt="" /></div>
        <div style={{backgroundColor:"white", borderRadius:"100%" }}><img src={image11} alt="" /></div>
        <div style={{backgroundColor:"white", borderRadius:"100%" }}><img src={image12} alt="" /></div>
      </div>
    </div>
  );
};

export default Imagegrid;
