import React from 'react'
import '../Review/review.scss'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Review() {
    return (
        <section className='review-section my-5'>
            <div className="container">
                <h3>Reviews</h3>
                <span>There are no reviews yet.</span>

                <div className="raiting-box">
                    <span>Your rating *</span>
                    <div className="stars d-flex">
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </div>
                </div>
                <div className="inputs">
                    <div className="row">
                        <div className="col-lg-12">
                            <span>Your review *</span>
                            <input type="text" />
                        </div>
                        <div className="col-lg-6">
                            <span>Name *</span>
                            <input type="text" />
                        </div>
                        <div className="col-lg-6">
                            <span>Email *</span>
                            <input type="email" pattern=".+@globex\.com" size="30" required/>
                        </div>
                    </div>
                </div>
                <button>SUBMIT</button>

            </div>

        </section>
    )
}

export default Review