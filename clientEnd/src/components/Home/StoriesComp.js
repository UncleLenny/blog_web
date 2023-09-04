import React from 'react'
import StoriesReuse from './StoriesReuse'
import Discover from './Discover'

function StoriesComp() {
  return (
    <div className='storiesCompile'>
      <div className='newsWidth'>
        <div>
          <StoriesReuse />
        </div>

        <div className='DiscoverSec'>
          <Discover />
        </div>
      </div>
    </div>
  )
}

export default StoriesComp 