import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Header />
      <section className="banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-item">
                <div className="banner-content w-50">
                  <h6>Exclusive offer <span>30% Off</span> </h6>
                  <h1>STAY HOME &amp; DELIVERED YOUR <span>DAILY NEEDS</span></h1>
                  <p className="d-xs-none">Vegetables contain many vitamins and minerals that are good for your health.</p>
                  <a href="#">
                    <button>Shop Now <i className="ri-arrow-right-fill" /></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Index