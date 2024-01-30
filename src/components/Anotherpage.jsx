import shopify from '../assets/shopify.png'
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import star3 from '../assets/star3.png'
import star4 from '../assets/star4.png'
import star5 from '../assets/star5.png'
import another from '../assets/another.png'
import contents from '../assets/contents.png'

const Anotherpage = () => {
  return (
    <div style={{
      backgroundColor: "var(--Gray-50, #F9FAFB)"
    }}>


          <section style={{
            marginTop:"90px",
           
            
          }}>
                  <div className=''style={{
                    display: "flex",
                    justifyContent: "space-between  ",
                    alignItems: "center",
                    // gap: "6  4px",
                    padding: "0px 32px",
                    // width:"100%"
                    
                  }}>
                        <div className=''>
                          <div><img src={shopify} alt="" /></div>
                          <div className="d-flex gap-1 mt-4">
                            <div><img src={star1} alt="" /></div>
                            <div><img src={star2} alt="" /></div>
                            <div><img src={star3} alt="" /></div>
                            <div><img src={star4} alt="" /></div>
                            <div><img src={star5} alt="" /></div>
                          </div>


                          <div className='mt-4'>
                            <h3 style={{
                              color: "var(--Gray-900, #101828)",
                              fontFamily: "Inter",
                              fontSize: "44px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "60px",
                              letterSpacing: "-0.88px",
                              
                            }}>ClearLink has upgraded our <br /> remote meetings. High-quality <br /> video, screen sharing, and <br /> top-notch security make it <br /> essential for our team.</h3>
                          </div>

                          <div className='d-flex gap-2 mt-4'>
                              <div><img src={another} alt="" /></div>
                              <div>
                                    <div>
                                    <p style={{
                                      fontFamily: "Inter",
                                      fontSize: "20px",
                                      fontStyle: "normal",
                                      fontWeight: "600",
                                      
                                    }}>Sarah Thompson</p>
                                    <p style={{
                                      marginTop:"-19px"
                                    }}>Project Manager, shopify</p>
                                    </div>

                                   
                              </div>
                          </div>
                        </div>

                      <div>
                        <img src={contents} alt="" />
                      </div>
                  </div>
          </section>


    </div>
  )
}

export default Anotherpage
