import React from 'react'
const url=''
const Banner = () => {
  return (
   <div className="banner">
    <div className="image">
      <div className="profile_pic">
      <img src='profileimg.jpg' alt='image_' className='profile_image' height='100%' width="100%"/>
      </div>
       
    </div>
    <div className="intro">
<div className="one"> <span className=' 'style={{fontSize:"18px", color:"yellow", fontWeight:"bold"}}>Hi</span>&nbsp;<span style={{fontSize:"12px", fontWeight:"bolder"}}>, I am</span>&nbsp;<span style={{fontSize:"20px", fontWeight:"bold"}}>John Doe</span></div>
<div className="two"><h3>frontend Developer</h3> </div>
    </div>
   </div>
  )
}

export default Banner
{/*
<br />
<h3>frontend Developer</h3> */}