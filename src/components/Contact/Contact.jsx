import React from 'react'
import "../Contact/contact.scss"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <section className='contact-section'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3676239785063!2d49.8485665!3d40.3785442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7c3a641cf%3A0x53a5c1e7cc11c36f!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgTmVmdCB2yZkgU8mZbmF5ZSBVbml2ZXJzaXRldGk!5e0!3m2!1sen!2s!4v1669189315224!5m2!1sen!2s"
        width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <h1 className='text-center mt-5'>CONTACT</h1>
        <div className="contact-boxes my-5">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="contact-box text-center">
                <div className="icon mb-2"><LocationOnOutlinedIcon /></div>
                <div className="title mb-2">Address</div>
                <div className="description">Local street address here, <br /> State, Zip code, Country</div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="contact-box text-center">
                <div className="icon mb-2"><PhoneOutlinedIcon /></div>
                <div className="title mb-2">Phone & Email</div>
                <div className="description">1-098-3456-7890 info@yourdomain.com</div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="contact-box text-center">
                <div className="icon mb-2"><ShareOutlinedIcon /></div>
                <div className="title mb-2">Address</div>
                <div className="icons">
                  <div className="d-flex justify-content-center">
                    <FacebookOutlinedIcon />
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact