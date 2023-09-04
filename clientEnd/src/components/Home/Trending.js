import React from 'react'
import dp1 from '../images/01dp.png'
import dp2 from '../images/02dp.jpg'
import dp3 from '../images/03dp.jpg'
import dp4 from '../images/04dp.jpg'
import dp5 from '../images/05dp.png'
import dp6 from '../images/06dp.png'
import trendIcon from '../icons/trending.svg'
import SubTrending from './SubTrending'

function Trending() {
  return (
    <div className='TrendBorder'>
        <div className='Trending'>
            <h2> <img src={trendIcon} alt="" /> Trending on Medium</h2>
            <div className='trendingNews'>
                <div>
                    <SubTrending id='01' dp={dp1} username='Keith McNulty' heading='Here’s How Two New Orleans Teenagers Found a New Proof of the Pythagorean theorem' dateRead='Apr 8 · 7 mins read' />
                </div>
                <div>
                    <SubTrending id='02' dp={dp2} username='Inflect Health' heading='I’m an ER doctor: Here’s what I found when I asked ChatGPT to diagnose my patients' dateRead='Apr 5 · 7 min read' />
                </div>
                <div>
                    <SubTrending id='03' dp={dp4} username='Jenka' heading='AI and the American Smile' dateRead='Mar 27 · 10 min read'/>
                </div>
                <div>
                    <SubTrending id='04' dp={dp3} username='Obie Fernandez' heading='My kids and I just played D&D with ChatGPT4 as the DM' dateRead='Mar 30 · 23 min read' />
                </div>
                <div>
                    <SubTrending id='05' dp={dp5} username='Maximilian Strauss in Better Programming' heading='GPT4All: Running an Open-source ChatGPT Clone on Your Laptop' dateRead='Mar 30 · 30 min read'/>
                </div>
                <div>
                    <SubTrending id='06' dp={dp6} username='Sahana Singh' heading='How I got my daughter to love India and stay close to her roots' dateRead='Apr 4 · 15 min read'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending