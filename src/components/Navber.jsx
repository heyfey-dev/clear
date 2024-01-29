import logo from "../assets/Group.svg"

const Navber = () => {
  return (
    <div className="container">
      <nav>
        <div style={{display:"flex", width:"70rem", padding:"16px 32px", justifyContent:"space-between", alignItems:"center", borderRadius:"100px", border:"1px solid var(--Gray-300, #D0D5DD", backgroundColor:"rgb(242,244,247)", height:"90px", margin:"10px"}}>
               
                <div style={{display:"flex", gap:"10px"}}>
                <div><img src={logo} /></div>
                  <div><h3>ClearLink</h3></div>
                </div>

                <div >
                    <ul  className="d-flex" style={{gap:"40px"}}>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal", listStyle:"none"}}>Products</li>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal", listStyle:"none"}}>Solutions</li>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal", listStyle:"none"}}>Resources</li>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal", listStyle:"none"}}>Pricing</li>
                    </ul>
                </div>

                <div className="d-flex" style={{gap:"4px"}}>
                    <div><button style={{borderRadius:"100px", border:"1px solid var(--Gray-400, #98A2B3)", height:"50px" }}>Talk to sales</button></div>
                    <div><button style={{borderRadius:"100px", border:"1px solid var(--Gray-400, #98A2B3)", backgroundColor:"#175CD3", color:"#FFFFFF", height:"50px"}}>Sign up for free</button></div>
                </div>




        </div>
      </nav>
    </div>
  )
}

export default Navber
