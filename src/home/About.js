import React from 'react'

function About() {
  return (
    <div>
        {/* <!-- ////////////////////////////START SECATION about //////////////////////// --> */}
 <div className="container"  id="About_click">
  <div className="row">
    <div className="col-md-5 about_image">
      <img className="  wow fadeInLeft" data-wow-delay=".1s" src="img/home/about.jpg"  className="fluid" />
    </div>
    <div className="col-md-7 about_artic">
      <h5 className="  wow fadeInRight" data-wow-delay=".1s" >Get in touch with us</h5>
      <h2 className="  wow fadeInRight" data-wow-delay=".2s" >Get Best Travel Deals</h2>
      <h6 className="  wow fadeInRight" data-wow-delay=".3s" >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
         <br/>
         <br/>
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        <br/>
        <br/>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
      <button className="about_but_1 wow fadeInUp" data-wow-delay=".2s">Book now</button>
      <button className="about_but_2 wow fadeInUp" data-wow-delay=".3s">Contact Us</button>
      </div>
  </div>
 </div>

    </div>
  )
}

export default About