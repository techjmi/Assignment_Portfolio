import React from 'react'
import { CardData } from '../data/data'

const Project = () => {
  return (
    <div className='project'>
      <div className="project_heading">
        PROJECT
      </div>
      <div className="cards">
      {
      CardData.map((item)=>{
        return <div className="card" key={item.id}>
<img src={item.url} alt=',,,'/>
        </div>
      })
     }
      </div>
  
    </div>
  )
}

export default Project
