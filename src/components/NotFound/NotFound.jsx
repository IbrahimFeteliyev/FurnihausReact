import React from "react";
import { Link } from "react-router-dom";
import './notfound.scss'

const NotFound = () => {
  return (
    <div id="not-found">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="card p-3">
              <div className="card-body">
                <h5>Üzgünüz!</h5>
                <span>Səhifə mövcud deyil.</span>
                <div className="buttonBox">
                    <Link to='/'>
                    <button>
                        <span>Ana səhifəyə qayıt</span>
                    </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
