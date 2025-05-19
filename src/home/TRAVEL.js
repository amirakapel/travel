import React from 'react'

function TRAVEL() {
  return (
    <div>
        {/* <!-- ////////////////////////////START SECATION TRAVEL //////////////////////// --> */}
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12 ">
      <div className="travel">
      <h5>Healthy && Travel</h5>
      <h2 className="wow bounceInLeft travel_darck_h2">Where do you want to go?</h2>
      <h6 className=" travel_darck_h6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h6>
    </div>
    </div>
    <div className="col-md-12">
      <form action="" className="travel_form">
      <div>
      <label for="">Destination</label>
      <input className="wow bounceInUp center" data-wow-delay="0.2s" type="text" placeholder="seach place"/>
      </div>
      <div>
      <label for="">Check-in date</label>
      <input className="wow bounceInUp center" data-wow-delay="0.3s" type="text" placeholder="Check in date"/>
      </div>
      <div>
      <label for="">Check-out date</label>
      <input className="wow bounceInUp center" data-wow-delay="0.4s" type="text" placeholder="Check out date"/>
      </div>
      <div>
      <label for="">Price Limit</label>
      <input className="wow bounceInUp center" data-wow-delay="0.5s" type="number" placeholder="$50000"/>
      </div>
      <div>
        <button className="wow bounceInUp center" data-wow-delay="0.6s" type="submit">Search</button>
      </div>
    </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default TRAVEL