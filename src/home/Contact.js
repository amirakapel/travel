import React from 'react'

function Contact() {
  return (
    <div>
        {/* <!-- ////////////////////////////START SECATION Contact  //////////////////////// --> */}
<div className="container">
  <div className="row">
    <div className="col-md-12 mb-5" id="Contact_click">
      <div className="services">
        <h5  className="  wow fadeInDown" data-wow-delay=".1s">Contact</h5>
        <h2  className="  wow fadeInDown Contact_darck_h2" data-wow-delay=".1s">Contact Me</h2>
        <h6  className="  wow fadeInDown Contact_darck_h6" data-wow-delay=".1s">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h6>
      </div>
    </div>

    <div className="col-md-4 mt-5">
      <div className="Contact">
        <div className="addres">
          <h4><i className="fa-solid fa-address-book"></i></h4>
          <div className="info">
            <h5>adress</h5>
            <p>zagazig El sharkia Egypt</p>
          </div>

        </div>
        <div className="addres">
                  <h4><i className="fa-solid fa-phone"></i></h4>
          <div className="info">
            <h5>Contact Number</h5>
            <p>+201276901564</p>
          </div>
        </div>
        <div className="addres">
                  <h4><i className="fa-solid fa-envelope"></i></h4>
          <div className="info">
            <h5>E-mail</h5>
            <p>amirakapel@gmail.com</p>
          </div>
        </div>
        <div className="addres">
                  <h4><i className="fa-solid fa-earth-americas"></i></h4>
          <div className="info">
            <h5>Website</h5>
            <p>
              www.linkedin.com/in/amira-kapel-b19663262</p>
          </div>

        </div>
      </div>

    </div>
    <div className="col-md-8 mt-5">
      <div className="contact_form">
      <form action="">
        <input type="text" placeholder="Enter your name"/>
        <input type="email"  placeholder="Enter your Email"/>
        <input type="text"  placeholder="Enter your name"/>
        <textarea name="" id="" cols="30"></textarea>
        <button>send Message</button>
      </form>
    </div>
    </div>
  </div>
 </div>
{/* <!-- ////////////////////////////START SECATION Contact_photo //////////////////////// --> */}
 <div className="container-fluid">
  <div className="row">
    <div className="col-md-12 mt-5">
      {/* <!-- PHOTO_1 --> */}
      <div className="Contact_photo"><img src="img/home/contact/gallery-1.jpg.webp" className="wow fadeInUp" data-wow-delay=".1s" /></div>
      {/* <!-- PHOTO_2 --> */}
      <div className="Contact_photo"><img src="img/home/contact/gallery-2.jpg.webp" className="wow fadeInUp" data-wow-delay=".3s" /></div>
      {/* <!-- PHOTO_3 --> */}
      <div className="Contact_photo"><img src="img/home/contact/gallery-3.jpg.webp" className="wow fadeInUp" data-wow-delay=".5s" /></div>
      {/* <!-- PHOTO_4 --> */}
      <div className="Contact_photo"><img src="img/home/contact/gallery-4.jpg.webp" className="wow fadeInUp" data-wow-delay=".7s" /></div>
      {/* <!-- PHOTO_5 --> */}
      <div className="Contact_photo"><img src="img/home/contact/gallery-5.jpg.webp" className="wow fadeInUp" data-wow-delay=".8s" /></div>
      {/* <!-- PHOTO_6 --> */}
      <div className="Contact_photo"><img src="img/home/contact/gallery-6.jpg.webp" className="wow fadeInUp" data-wow-delay="1.1s" /></div>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Contact