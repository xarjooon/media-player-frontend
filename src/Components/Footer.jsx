import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-item-center mt-5'>
        <div className='footer d-flex align-item-center justify-content-evenly'>
          <div className='website' style={{ width: "400px" }}>
          <h5><i class="fa-solid fa-video text-warning me-2"></i>Media player</h5>
          <p style={{color:"white", textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, temporibus ratione! Ducimus nulla voluptatum quis animi vero quod consequuntur vitae, facere officia est ratione eum voluptate, dolore consequatur odio tempora.</p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to = '/' style={{textDecoration:"none", color:"white"}}>Landing page</Link>
            <Link to = '/'style={{textDecoration:"none", color:"white"}}>Home</Link>
            <Link to = '/'style={{textDecoration:"none", color:"white"}}>Watchhistory</Link>
          </div>
          <div className='guides d-flex flex-column ms-5'>
            <h4>Guides</h4>
            <Link to = '/https://react.dev/' target='_blank' style={{textDecoration:"none", color:"white"}}>React</Link>
            <Link to = '/https://react-bootstrap.github.io/'  target='_blank'style={{textDecoration:"none", color:"white"}}>React Bootstrap</Link>
            <Link to = '/https://bootswatch.com/' target='_blank'style={{textDecoration:"none", color:"white"}}>Bootswatch</Link>
          </div>
          <div className='ContactUs ms-5'>
          <h4>ContactUs</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email'/>
            <button className='btn btn-warning ms-3'>subscribe</button>
            </div>
            <div>
              <Link className='mt-5'><i class="fa-brands fa-instagram fa-2x "></i></Link>
              <Link><i class="fa-brands fa-twitter fa-2x ms-2"></i></Link>
              <Link><i class="fa-brands fa-facebook fa-2x ms-2"></i></Link>
              <Link><i class="fa-brands fa-linkedin fa-2x ms-2 mt-3"></i></Link>

            </div>
          </div>
        </div>
       
      </div>
      <p className='mt-5 text-center'>CopyRight &copy;2023 Media player Built with React</p>
    </>
  )
}

export default Footer