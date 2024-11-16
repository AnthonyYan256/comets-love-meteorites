import ProfilePicture from './assets/AnthonyYanProfile_Min.png'

function About() {

  return(
    <> {/* Fragment */}
      <div className='card'>
        <img src={ProfilePicture} className='profilePicture' alt="Picture of Anthony Yan, creator of this website." />
        <h2 className='card-title'>Anthony Yan</h2>
        <h4 className='card-subtitle'> Creator of Comets Love Meteorites</h4>
        <p> Freshman and 2024 McDermott Scholar pursuing a Bachelor of Computer Science at the 
          University of Texas at Dallas.</p>
      </div>
      <div>This project was made for HackUTD 2024 Ripple Effect.</div>
    </>
  )


}

export default About