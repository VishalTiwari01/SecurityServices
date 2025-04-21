import React from 'react'
import About from '../pages/Company/About'
import Services from './Services'
import Different from './Different'

import consulting from '../assets/logo/consulting-jobs.png'
import Photo from './Photo'
const Home = () => {
  return (
    <>
    <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <img src={consulting} alt="" />
        </div>
      </main>
      <About/>
      <Services/>
      <Different/>
      <Photo/>
    </>
  )
}

export default Home