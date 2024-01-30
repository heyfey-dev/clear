import socials from '../assets/socials.png'

const Footer = () => {
  return (
    <div >
        <section style={{backgroundColor: "var(--Gray-50, #F9FAFB)",
        }}>
                <div style={{
                    display: "flex",
                    flexDirection:"row",
                    justifyContent:'space-between',
                    padding:"20px"
                }}>
                        <div><p>© 2023 ClearLink. All rights reserved.</p></div>
                        <div>
                            <img src={socials} alt="" />
                        </div>
                </div>
        </section>
       
    
    </div>
  )
}

export default Footer
