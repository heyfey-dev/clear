import shopify from '../assets/shopify.png'
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import star3 from '../assets/star3.png'
import star4 from '../assets/star4.png'
import star5 from '../assets/star5.png'
import another from '../assets/another.png'
import contents from '../assets/contents.png'
import plussign from '../assets/plus1.png'
import minussign from '../assets/minus.png'

const Anotherpage = () => {
  return (
    <div style={{
      
    }}>


          <section style={{
            marginTop:"90px",
            backgroundColor: "var(--Gray-50, #F9FAFB)"
            
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
            



            <main style={{
              marginTop:'5rem'
            }}>
          <div className='d-flex gap-5' style={{
            justifyContent:"space-between"
          }}>
                    <div>
                      <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            color: "var(--Blue-700, #175CD3)",
                                            
                                          }}>Support</p></div>
                      <div><h2>FAQs</h2></div>
                      <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}>Everything you need to know about the product <br /> and billing. Can’t find the answer you’re looking <br /> for? Please chat to our friendly team.</p></div>
                    </div>


                  <div>
                                    <div style={{
                                       backgroundColor: "var(--Gray-50, #F9FAFB)",
                                      border: "1px solid var(--Gray-200, #EAECF0)",
                                      borderRadius: "16px",
                                      padding: "32px",
                                      
                                      
                                    }}>
                                          <div style={{
                                             display: "flex",
                                             flexDirection: "row",
                                             justifyContent:"space-between"
                                          }} >
                                          <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}>How many participants can join a ClearLink video conference?</p></div>
                                          <div><img src={minussign} alt="" /></div>
                                          </div>
                                           <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "18px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            
                                          }}>ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. Our plans <br /> are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.</p></div>
                                    </div>




                      <div className='mt-4'>
                                <div style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent:"space-between"
                                  
                                  
                                }}>
                                    <div> <p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}>Can i use ClearLink on multiple devices</p></div>
                                    <div><img src={plussign} alt="" /></div>
                                </div>
                                      <hr /> 
                                <div style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent:"space-between"
                                  
                                  
                                }}>
                                  <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}> Is clearLink compatible with other video conferencing platforms?</p></div>
                                  <div><img src={plussign} alt="" /></div>
                                </div>
                                    <hr />
                                <div style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent:"space-between"
                                  
                                  
                                }}>
                                  <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}>How does ClearLink ensure the security of my video conferences?</p></div>
                                  <div><img src={plussign} alt="" /></div>
                                </div>
                                      <hr />
                                <div style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent:"space-between"
                                  
                                  
                                }}>
                                  <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}>Do I need to download any software to use ClearLink?</p></div>
                                  <div><img src={plussign} alt="" /></div>
                                </div>
                                    <hr />
                                <div style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent:"space-between"
                                  
                                  
                                }}>
                                  <div><p style={{
                                            fontFamily: "Inter",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            
                                          }}>What kind of customer support does ClearLink provide?</p></div>
                                  <div><img src={plussign} alt="" /></div>
                                </div>
                      </div>
                  </div> 

          </div>
</main>




    </div>
  )
}

export default Anotherpage
