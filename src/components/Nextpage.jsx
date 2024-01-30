import video from '../assets/video-recorder.png'
import recorder from '../assets/recording.png'
import unlock from '../assets/lunlock.png'
import calenders from '../assets/calenders.png'
import rectangle from '../assets/rectangle-1.png'
const Nextpage = () => {
  return (
    <div>
      <div>
        <section>
            <div>
                <p>The ClearLink Advantage</p>
                <div><h2>Why choose ClearLink?</h2></div>
                <div><p>In a world where connection is everything, ClearLink takes the lead. <br />Our cutting-edge video conferencing app offers:</p></div>
            </div>



            <div>
                <div className='grid-contain'>

                        <div>
                            <div><img src={video} alt="" /></div>
                            <div><h5>Crystal-clear HD video</h5></div>
                            <div><p>No more pixelation or blurriness – just <br /> stunning, lifelike clarity that brings your <br /> team closer in meetings.</p></div>
                         </div>

                    <div>
                        <div><img src={recorder} /></div>
                        <div><h5>Noise-canceling audio</h5></div>
                        <div><p>Say goodbye to distractions with our <br /> advanced audio tech for crisp, <br /> interruption-free conversations.</p></div>
                    </div>

                    <div>
                        <div><img src={calenders} alt="" /></div>
                        <div><h5>Scheduling made easy</h5></div>
                        <div><p>Streamline your agenda with ClearLinks <br /> intuitive scheduling. Set up meetings, <br /> send invitations, and receive reminders in <br /> one place.</p></div>
                    </div>

                    <div>
                        <div><img src={unlock} alt="" /></div>
                        <div><h5>Bank-grade security</h5></div>
                        <div><p>Your privacy is our priority with bank- <br />grade security protocols safeguarding <br /> your meetings and data from unwanted <br />intruders.</p></div>
                    </div>
                </div>

                <div>
                    <img src={rectangle} alt="" />
                </div>
            </div>


        </section>
      </div>
    </div>
  )
}

export default Nextpage
