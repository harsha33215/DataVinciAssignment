import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const cloudinaryImg =
    "https://res.cloudinary.com/dogre3yp8/image/upload/v1756647192/Container_kb7dwe.png";

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <button className="menu-btn">☰</button>
        <div className="logo">NEW ZEALAND HONEY CO.</div>
        <div className="nav-icons">
          <span>🔍</span>
          <span>👤</span>
          <span className="cart">
            🛒<span className="cart-count">0</span>
          </span>
        </div>
      </header>

      {/* Product Hero */}
      <main className="main">
        <div className="product-hero">
          <div className="product-image">
            <img src={cloudinaryImg} alt="Honey Jar" />
          </div>
          <div className="product-info">
            <h1>Manuka Honey</h1>
            <h2>UMF™ 24+</h2>
            <h2>MGO 1122+</h2>

            <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
              🍯 What is UMF and MGO?
            </button>

            {showInfo && (
              <div className="info-popup">
                <div>
                  <strong>UMF</strong> is the strength and purity rating of
                  Manuka honey.
                  <div className="scale umf">
                    <span>10+</span>
                    <span>15+</span>
                    <span>20+</span>
                    <span>24+</span>
                    <span>26+</span>
                    <span>28+</span>
                    <span>30+</span>
                  </div>
                </div>
                <div>
                  <strong>MGO</strong> is the key natural compound that gives
                  Manuka honey its antibacterial strength.
                  <div className="scale mgo">
                    <span>263+</span>
                    <span>514+</span>
                    <span>829+</span>
                    <span>1122+</span>
                    <span>1282+</span>
                    <span>1450+</span>
                    <span>1620+</span>
                  </div>
                </div>
                <button
                  className="close-btn"
                  onClick={() => setShowInfo(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="gallery">
          <img src={cloudinaryImg} alt="gallery1" />
          <img src={cloudinaryImg} alt="gallery2" />
          <img src={cloudinaryImg} alt="gallery3" />
          <img src={cloudinaryImg} alt="gallery4" />
          <img src={cloudinaryImg} alt="gallery5" />
          <img src={cloudinaryImg} alt="gallery6" />
        </div>

        {/* Payment Options */}
        <div className="payment">
          <h3>PAYMENT OPTIONS (SELECT ONE)</h3>
          <div className="payment-buttons">
            <button className="one-time">One-time purchase $55.88 USD</button>
            <button className="subscribe">
              Subscribe & Save 20% $44.70 USD
            </button>
          </div>
          <p className="note">❔ What is a subscription?</p>
        </div>

        {/* Quantity Selector */}
        <div className="quantity">
          <h3>SELECT QUANTITY</h3>
          <div className="quantity-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="add-cart">ADD TO CART</button>
        </div>

        {/* Bundle Section */}
        <div className="bundle">
          <h3>Beauty Bundle</h3>
          <div className="bundle-items">
            <div className="bundle-item">
              <img src={cloudinaryImg} alt="bundle1" />
              <span>UMF 20+</span>
            </div>
            <div className="bundle-item">
              <img src={cloudinaryImg} alt="bundle2" />
              <span>UMF 24+</span>
            </div>
            <div className="bundle-item">
              <img src={cloudinaryImg} alt="bundle3" />
              <span>Wooden Spoon</span>
            </div>
          </div>
          <button className="bundle-cart">
            ADD BUNDLE TO CART <span className="save">Save 10%</span>
          </button>
        </div>

        {/* Delivery Info */}
        <div className="delivery">
          <p>🚚 Free delivery on orders over $30</p>
          <p>📅 Estimated Delivery: Jun 9 - Jun 13</p>
          <p>💳 Afterpay available: 4 payments of $13.97</p>
        </div>

        {/* UMF Scale */}
        <div className="umf-scale">
          <h3>UMF™ SCALE</h3>
          <div className="scale-bar">
            <span>UMF™ 10+</span>
            <span>UMF™ 15+</span>
            <span>UMF™ 20+</span>
            <span className="active">UMF™ 24+</span>
            <span>UMF™ 26+</span>
            <span>UMF™ 28+</span>
            <span>UMF™ 30+</span>
          </div>
        </div>

        {/* Taste Profile */}
        <div className="taste-profile">
          <h3>TASTE PROFILE</h3>
          <div className="taste-bar">
            <span>Clean & Intense</span>
            <input type="range" min="1" max="10" value="7" readOnly />
            <span>Bold & Intense</span>
          </div>
        </div>
      </main>
    </div>
  );
}
