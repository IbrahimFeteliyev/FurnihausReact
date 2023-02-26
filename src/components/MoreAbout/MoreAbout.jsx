import React from 'react'
import '../MoreAbout/moreAbout.scss'
const MoreAbout = () => {
  return (
    <section className='moreAbout-section'>
      <div className="boxes">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="left-box">
            <div className="text">
              <span>More About</span>
              <h2>The Company</h2>
              <p>While lorem ipsum is a dummy the lovely valley teems with vapour around me, and the meridia sun strikes the upper surface dummy the lovely valley teems with vapour around me dummy the lovely…
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="right-box">
            <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/intro.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreAbout