import ImageGrid from "./Imagegrid"
import Navbar from "./Navbar"




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

                                <div style={{}}>
                                    
                                    <p>Discover AI assistant</p>
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
