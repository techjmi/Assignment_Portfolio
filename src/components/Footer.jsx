import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className="heading">
        <p className='footer_heading'>Lets work Together...</p>
    </div>
    <div className="icons">
        <div>
            <i className="fa-brands fa-linkedin" style={{height:"60px"}}></i>&nbsp;
            <span className='icon'>LinkedIn</span>
        </div>
        <div>
            <i className="fa-brands fa-twitter" style={{height:"60px"}}></i>&nbsp;
            <span className='icon'>Twitter</span>
        </div>
        <div>
            <i className="fa-solid fa-envelope" style={{height:"60px"}}></i> &nbsp;
            <span className='icon'>Send Mail</span>
        </div>
    </div>
    <div className="icons2">
    <div>
            <i className="fa-brands fa-github" style={{height:"60px"}}></i>&nbsp;
            <span className='icon'>GitHub</span>
        </div>
        <div>
            {/* <i className="fa-solid fa-phone-alt" style={{height:"60px"}}></i>&nbsp; */}
            <i class="fa-solid fa-mobile" style={{height:"60px"}}></i>&nbsp;
            <span className='icon'>Call Me</span>
        </div>
    </div>
</div>
<div className="copyright">
    <div className="copyright_text">
        <p>Create By Md Shamim Akhter</p>
    </div>
</div>
</>
  )
}

export default Footer
