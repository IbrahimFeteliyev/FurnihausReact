import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import '../Confirm/confirm.scss'


const Confirm = () => {
  
  return (
    <div id='confirm'>
      <div className="container">
        <div className="confirmBox">
          <h3>Sifarişi tamamla</h3>
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="card p-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <TextField required id="outlined-basic" fullWidth label="Ad"  variant="outlined"/>
                    </div>
                    <div className="col-lg-6 ">
                      <TextField required id="outlined-basic" fullWidth label="Soyad" variant="outlined" />
                    </div>
                    <div className="col-lg-6 my-4">
                      <TextField required id="outlined-basic" fullWidth label="Mobil nömrə" type="number" variant="outlined" />
                    </div>
                   
                    <div className="buttonBox">
                      <Link to="/cartsuccess">
                        <button >Sifarişi tamamla</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm