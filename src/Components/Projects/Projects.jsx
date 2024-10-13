import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <>
      {/* <!-- Projects --> */}
      {/* <div className="scrole-test-div1"></div> */}
      <div className="relative fixed-bg projects">
        {/* <img alt="Background image of a city skyline at dusk" className="w-full h-auto md:h-[380px]" src="https://storage.googleapis.com/a1aa/image/d7A88qonQRZJKdwaBXCxnNfKkqi2XO7aA30e3fSlpLvtqiHnA.jpg"/> */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-around items-center text-white">
          <div className="text-center mb-8 md:mb-0 ">
            <div className="rounded-circle p-9 rating-project ">
              <i className="fas fa-users fa-3x"></i>
            </div>
            <div className="text-lg color-lg">Support Given</div>
          </div>
          <div className="text-center mb-8 md:mb-0">
            <div className="rounded-circle p-9 rating-project">
              <i className="fas fa-star fa-3x"></i>
            </div>
            <div className="text-4xl font-bold color-lg">254 +</div>
            <div className="text-lg color-lg">Clients Rating</div>
          </div>
          <div className="text-center mb-8 md:mb-0">
            <div className=" rounded-circle p-9 rating-project">
              <i className="fas fa-money-bill-wave fa-3x"></i>
            </div>
            <div className="text-4xl font-bold color-lg">2 M+</div>
            <div className="text-lg color-lg">Money Saved</div>
          </div>
          <div className="text-center">
            <div className=" rounded-circle p-9 rating-project">
              <i className="fas fa-trophy fa-3x"></i>
            </div>
            <div className="text-4xl font-bold color-lg">578</div>
            <div className="text-lg color-lg">Awards won</div>
          </div>
        </div>
      </div>
      {/* <div className="scrole-test-div"></div> */}
    </>
  )
}

export default Projects
