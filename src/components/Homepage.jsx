import ImageGrid from "./Imagegrid"
import Navbar from "./Navbar"
import image1 from '../assets/avatar-group.png';
import star1 from '../assets/star1.png';
import star2 from '../assets/star2.png';
import star3 from '../assets/star3.png';
import star4 from '../assets/star4.png';
import star5 from '../assets/star5.png';
import image2 from '../assets/frame-10.png';



const Homepage = () => {
  return (
    <div> 
      <div className="container" style={{backgroundColor:""}}>
        <Navbar/>
        
        <main style={{ marginTop:"6rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', width:"90rem" }} >
                            <div>
                                    <h2 style={{
                                      fontFamily: "Inter",
                                      fontSize: "64px",
                                      fontStyle: "normal",
                                      fontWeight: "600",
                                      lineHeight: "72px",
                                      letterSpacing: "-1.28px",
                                      
                                    }}>Uniting the world, <br /> one video call at a time</h2>
                            </div>

                            <div style={{width: "662px",
                            }}>
                                    <p style={{
                                      fontFamily: "Inter",
                                      fontSize: "24px",
                                      fontStyle: "normal",
                                      fontWeight: "400",
                                      lineHeight: "32px",
                                      
                                    }}>
                                        Experience the future of communication with ClearLink - <br />
                                        where crystal-clear video conferencing <br />
                                        meets unparalleled simplicity.
                                    </p>
                            </div>

                        <div className="" style={{ display: 'flex', gap: '20px' }}>

                                <div>
                                        <button
                                        style={{
                                            borderRadius: '100px',
                                            border: '1px solid var(--Gray-400, #98A2B3)',
                                            backgroundColor: '#175CD3',
                                            color: '#FFFFFF',
                                            height: '50px',
                                        }}
                                        >
                                        Start your free trial
                                        </button>
                                </div>

                                <div style={{display:"flex", gap:"5px"}}>
                                   <div className="mt-2"> <img src={image2} alt="" /></div>
                                    <p className="mt-2 ">Discover AI assistant</p>
                                </div>

                        </div>


                        <div className="d-flex gap-4 mt-3" >
                              <div><img src={image1} alt="" /></div>
                              
                              <div>
                                <div className="d-flex gap-1" style={{marginTop:"-4px"}}>
                                  <div><img src={star1} alt="" /></div>
                                  <div><img src={star2} alt="" /></div>
                                  <div><img src={star3} alt="" /></div>
                                  <div><img src={star4} alt="" /></div>
                                  <div><img src={star5} alt="" /></div>
                                  <p className="mt-1">5.0</p>
                                </div>

                                <p style={{marginTop:"-25px"}}>3,000 + reviews</p>
                              </div>
                        </div>

                    </div>



                    <ImageGrid/>
                 </div>


                                       

                


</main>





      </div>
    </div>
  )
}

export default Homepage
