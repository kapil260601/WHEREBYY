import React from 'react'
import "../index.css";
import 'bootstrap/dist/css/bootstrap.css';

const SecondPage = () => {
  return (
    <div className='back'>
        <div className='header'>
          <h2 className="header_">Industries thriving with<br/> embedded video calls</h2>
           <div className='cards w-60' style={{marginTop:'3rem'}}>
                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                    <div class="col ">
                        <div class="card " style={{border:'none',marginLeft:'2rem'}}>
                        <img src="https://framerusercontent.com/images/wooCiAw9v7F3DZFJf4OUC2nIf6U.webp" class="card-img-top image shadow rounded-4" alt="First Image"/>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign:"center"}}>Telehealth</h5>
                            <p class="card-text para">Offer secure, reliable integrated video calls to<br/> connect practitioners and patients anywhere,<br/>anytime.</p>
                        </div>
                        <div class="card-footer">
                        <a href='#' class="ancher">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card " style={{border:'none',marginLeft:'2rem'}}>
                        <img src="https://framerusercontent.com/images/VuDsbUuKTog0wWDhpWlWPn5MBs.webp" class="card-img-top image shadow rounded-4" alt="Secondimage"/>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign:"center"}}>eLearning</h5>
                            <p class="card-text para">Integrate engaging and fun virtual classroom experiences for students and teachers.</p>
                        </div>
                        <div class="card-footer">
                        <a href='#'  class="ancher">Read More</a>
                        </div>
                        </div>
                    </div><div class="col ">
                        <div class="card " style={{border:'none',marginLeft:'2rem'}}>
                        <img src="https://framerusercontent.com/images/x7ntx933hvNHsqcx9Dz3WMH8pE.webp" class="card-img-top image shadow rounded-4" alt="Thirdimage"/>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign:"center"}}>Virtual Events</h5>
                            <p class="card-text para">Boost engagement and attendance with <br/>customizable video conferencing for webinars<br/> and events.</p>
                        </div>
                        <div class="card-footer">
                        <a href='#'  class="ancher">Read More</a>
                        </div>
                        </div>
                    </div>
                </div>
           </div>
      </div>
  </div>
  )
}

export default SecondPage