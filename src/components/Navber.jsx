import logo from "../assets/Group.svg"

const Navber = () => {
  return (
    <div className="container">
      <nav>
        <div style={{display:"flex", width:"70rem", padding:"16px 32px", justifyContent:"space-between", alignItems:"center", borderRadius:"100px", border:"1px solid var(--Gray-300, #D0D5DD", background:"var       `(--Gray-100, #F2F4F7)", height:"90px", margin:"10px"}}>
                <div><img src={logo} /></div>

                <div >
                    <ul  className="d-flex" style={{gap:"40px"}}>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal"}}>Products</li>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal"}}>Solutions</li>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal"}}>Resources</li>
                        <li style={{fontSize:"18px", fontWeight:"600", lineHeight:"20px", fontStyle:"normal"}}>Pricing</li>
                    </ul>
                </div>

                <div className="d-flex" style={{gap:"4px"}}>
                    <div><button style={{borderRadius:"100px", border:"1px solid var(--Gray-400, #98A2B3)", }}>Talk to sales</button></div>
                    <div><button style={{borderRadius:"100px", border:"1px solid var(--Gray-400, #98A2B3)", backgroundColor:"#175CD3", color:"#FFFFFF"}}>Sign up for free</button></div>
                </div>




        </div>
      </nav>
    </div>
  )
}

export default Navber
