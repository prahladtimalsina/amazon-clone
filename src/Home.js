import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="114477"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />

        <Product
          id="454657"
          title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="789456"
          title="SanDisk 400GB Ultra microSDXC UHS-I Memory Card with Adapter - 100MB/s, "
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/619jta1rF4L._AC_UY218_.jpg"
        />

        <Product
          id="478963"
          title="Fujifilm Instax Mini Instant Film Twin Pack (White)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/813oF-FY01L._AC_UY218_.jpg"
        />

        <Product
          id="369459"
          title="USB C to HDMI Cable for Home Office | 6ft 4K@60Hz, uni USB Type C to HDMI Cable"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51jFMFlCFkL._AC_UY218_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="147852"
          title="AmazonBasics 60-Inch Lightweight Tripod with Bag"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61vjUCzQCaL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="456154"
          title="AmazonBasics 60-Inch Lightweight Tripod with Bag"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61vjUCzQCaL._AC_UY218_.jpg"
        />
        <Product
          id="784512"
          title="SanDisk 400GB Ultra microSDXC UHS-I Memory Card with Adapter - 100MB/s, "
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/619jta1rF4L._AC_UY218_.jpg"
        />

        <Product
          id="895623"
          title="Fujifilm Instax Mini Instant Film Twin Pack (White)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/813oF-FY01L._AC_UY218_.jpg"
        />

        <Product
          id="568912"
          title="USB C to HDMI Cable for Home Office | 6ft 4K@60Hz, uni USB Type C to HDMI Cable"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51jFMFlCFkL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="456123"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />

        <Product
          id="128965"
          title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="585257"
          title="AmazonBasics 60-Inch Lightweight Tripod with Bag"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61vjUCzQCaL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
