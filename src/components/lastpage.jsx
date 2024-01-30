import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'
import logo from '../assets/Group.svg'
const lastpage = () => {
  return (
    <div>
      <section style={{
        marginTop:"90px"
      }}>
        <div>
            <div style={{
                display:'flex',
                justifyContent:"space-between"
            }}>
                <div>
                   <div className='d-flex gap-3'>
                        <div><img src={logo} alt="" /></div>
                        <div><h4>ClearLink.</h4></div>
                   </div>
                    <div><p style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>ClearLink is your gateway to effortless, high- <br />quality video conferencing. Join us in shaping <br /> the future of communication!</p></div>
                </div>

                <div className='d-flex' style={{gap:"100px", lineHeight:"40px"}}>
                    <div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Product</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Overview</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>features</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Solutions</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Tutorials</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Pricinig</span></div>
                    </div>
                    <div>
                         <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Company</span></div>
                         <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>About us </span></div>
                         <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Careers</span></div>
                         <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Press</span></div>
                         <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>News</span></div>
                         <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Contact</span></div>
                    </div>
                    <div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Resources</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Blog</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Events</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Hlep centre</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Turorials</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Support</span></div>
                    </div>
                    <div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Legal</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Terms</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Privacy</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Cookies</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>License</span></div>
                        <div><span style={{fontFamily: "Inter", fontSize:"18px", fontStyle:"normal", fontWeight:"600", lineHeight:"28px"}}>Contact</span></div>
                    </div>
                </div>


                <div style={{lineHeight: "28px",
                }}>
                    <div><p style={{color:"blue"}}>Get the app</p></div>
                    <div><img src={appstore} alt="" /></div>
                    <div><img src={playstore} alt="" /></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default lastpage
