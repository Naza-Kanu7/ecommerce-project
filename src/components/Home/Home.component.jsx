import React from 'react'
import Featured from '../Featured/Featured.component'
import Mission from '../Mission/Mission.component'
import News from '../NewsLetter/News.component'
import Show from '../section-one/Show.component'

function Home() {
  return (
    <div>
        <Show />
        <Featured />
        <Mission />
        <News />
    </div>
  )
}

export default Home