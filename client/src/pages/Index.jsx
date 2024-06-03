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
            <div className="col-xxl-8 col-xl-8 col-xs-12 col-sm-12">
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
            <div className="col-xxl-4 col-xl-4 col-xs-12 col-sm-12 col-md-12 d-flex flex-wrap align-content-between">
              <div className="col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-6">
                <div className="banner-2">
                  <div className="banner-2-content">
                    <h6><span>45%</span>OFF</h6>
                    <h2>Nut Collection</h2>
                    <p>We deliver organic vegetables &amp; fruits</p>
                    <a href="#">
                      <button className="shop">Shop Now <i className="ri-arrow-right-fill" /></button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-6">
                <div className="banner-3">
                  <div className="banner-3-content">
                    <h2>Healthy Food</h2>
                    <h3>Organic Market</h3>
                    <p>We deliver organic vegetables &amp; fruits</p>
                    <a href="#">
                      <button className="shop">Shop Now <i className="ri-arrow-right-fill" /></button>
                    </a>
                  </div>
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