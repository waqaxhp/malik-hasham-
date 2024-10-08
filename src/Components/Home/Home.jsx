import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Assets/Animation - 1728303444101.json'
// import animationData from '../Assets/Animation - 1728305528518.json' // Update with your Lottie file path

import './Home.css'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="home-component" id="#home">
      <div className="text-content">
        <h5 className="subheading">Accounting & Tax Services</h5>
        <h1 className="heading">
          BUILD BETTER &<br />
          GROW BIGGER
        </h1>
        <h2>this is a demo</h2>
        <p className="paragraph">
          Invest your efforts and time on running your business. Leave the
          accounting to us. Our services provide a complete range of accounting
          services to private individuals and small to medium-sized businesses
          in the USA & UK.
        </p>
        <button className="button">Get A Free Quote</button>
        <br />
      </div>
      <div className="animation-container">
        <div className="image-test">
          <Lottie options={defaultOptions} />
          {/* height={400} width={400} */}
        </div>
      </div>
    </div>
  )
}

export default Home
