import React from 'react'

function SubTrending({id, dp, username, heading, dateRead}) {
  return (
    <div className='subTrend'>
        <div className='subTrending'>
            <div className='TrendNum'>
                <span>{id}</span>
            </div>
            <div className='trendInfo'>
                <div className='trendPerson'>
                    <img src={dp} alt="" />
                    <span>{username}</span>
                </div>
                <div className='trendHead'>
                    <h3 className='overflow'>{heading}</h3>
                </div>
                <div className='trendTime'>
                    <span>{dateRead}</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SubTrending