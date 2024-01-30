import mockup from '../assets/mockup.png'
import check from '../assets/check.png'

const Mockup = () => {
  return (
    <div>
            <section style={{
                marginTop:"100px"
            }}>
                <div style={{
                   display: 'flex',
                   justifyContent: 'space-between',
                   maxWidth: '100%', // Set maximum width to prevent overflow
                //    padding: '0 20px', // Add some padding to the sides
                   gap: '2rem',
                //    alignItems: 'center',
                //    margin: 'auto', // Center the container
                    
                }}>

                        <div>
                            <div><h2 style={{
                                fontSize: "30px",
                                fontFamily: "Inter",
                                fontStyle: "normal",
                                fontWeight: "600",
                                
                            }}>Ready to clear the path to        perfect communication?</h2></div>
                            <div>
                                <div className='d-flex gap-4'>
                                    <div><img src={check} alt="" /></div>
                                    <div><p style={{
                                        fontFamily: "Inter",
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "32px",
                                        
                                    }}>30 days free trial</p></div>
                                </div>

                                <div className='d-flex gap-4'>
                                    <div><img src={check} alt="" /></div>
                                    <div><p style={{
                                        fontFamily: "Inter",
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "32px",
                                        
                                    }}>Cancel anytime</p></div>
                                </div>

                                <div className='d-flex gap-4'>
                                    <div><img src={check}alt="" /></div>
                                    <div><p style={{
                                        fontFamily: "Inter",
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "32px",
                                        
                                    }}>Acess to all features</p></div>
                                </div>

                                <div className='d-flex gap-4'>
                                    <div><img src={check} alt="" /></div>
                                    <div><p style={{
                                        fontFamily: "Inter",
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "32px",
                                        
                                    }}>Personalized onboarding</p></div>
                                </div>
                            

                                <div className='d-flex gap-3'>
                                    <div><button style={{
                                        border: "1px solid var(--Gray-400, #98A2B3)",
                                        backgroundColor: 'var(--White)',
                                        borderRadius: "100px",
                                        fontFamily: "Inter",
                                        fontWeight:"bolder",
                                        padding: "14px 24px",
                                        
                                    }}>Talk to sales</button></div>
                                    <div><button style={{
                                        borderRadius: "100px",
                                        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                                        background: "var(--Blue-700, #175CD3)",
                                        color: "white",
                                        padding: "14px 24px",
                                        
                                    }}>Start your trial </button></div>
                                </div>
                               
                            </div>
                        </div>



                        
                            <div style={{ display: 'flex', gap: '1rem', marginLeft:"400px" }}>
                                    <img src={mockup} alt="" className='w-100' />
                            </div>

                        

                </div>
            </section>
    </div>
  )
}

export default Mockup
