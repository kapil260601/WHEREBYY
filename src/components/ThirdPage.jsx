import React from 'react'
import "../index.css";

const ThirdPage = () => {
  return (
    <div className='setter'>
      <div className='contain rounded-3' style={{marginLeft:'12rem'}}>
            <div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0" style={{marginLeft:'2rem'}}>
                        <div class="card" style={{marginTop:'4rem'}}>
                            <div class="card-body">
                                <h2 className='header_1'>Looking for simple <br/> video meetings?</h2>
                                <p style={{marginTop:'1rem'}}>If you want to host video calls in your browser with no<br/> downloads, check out Whereby Meetings.</p>
                                <a href='#'style={{color:"#2B189B"}} >Discover more</a> <br />
                                <button type="button" className='but' style={{marginTop:'1rem'}}>Try for new</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{marginLeft:'-4rem'}}>
                    <div class="card" style={{marginTop:'4rem'}}>
                        <div class="card-body">
                        <img src="https://framerusercontent.com/images/O3vWiQpmEywTT2Nr0hcDVqf8GI.png" class="card-img-top rounded-3 w-85" alt="Thirdimage"/>
                        </div>
                        </div>
                </div> 
                </div>
          </div>
    </div>
    </div>
  )
}

export default ThirdPage;
