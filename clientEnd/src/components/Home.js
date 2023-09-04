import React from 'react'
import Banner from './Home/Banner'
import Trending from './Home/Trending'
import StoriesComp from './Home/StoriesComp'
import Navigation from './Navigation'

function Home() {
  return (
    <div>
        <Navigation />
        <Banner />
        <Trending />
        <StoriesComp />
    </div>
  )
}

export default Home