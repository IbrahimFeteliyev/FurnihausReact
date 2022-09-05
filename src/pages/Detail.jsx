import React from 'react'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import Review from '../components/Review/Review'

function Detail() {
  return (
    <div>
      <ProductDetail />
      <div className="container">
        <div className="detail-section">
          <div className="row">
            <div className="col-lg-3">
              <div className="detail-buttons">
                <button>Description</button>
                <button>Review(0)</button>
              </div>
            </div>
            <div className="col-lg-9">
              <ProductDescription />
              <Review />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail