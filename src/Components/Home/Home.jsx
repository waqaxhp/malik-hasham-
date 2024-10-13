import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Assets/uywCVs1oGq.json'

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
        {/* <h5 className="subheading">Accounting & Tax Services</h5> */}
        <h1 className="heading">
        Innovative Digital Marketing Solutions <br />to Unlock Growth
        </h1>
        <p className="paragraph">
        A modern growth marketing firm powered by possibility pursuers, we invest in the best technology and expertise to drive results.
        </p>
        <button className="button">Get Started</button>
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
