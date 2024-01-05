import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
<>
<Navbar className="bg-dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'style={{textDecoration:"none",color:"white",fontSize:"25px"}}> 
           {/* textdecoration none is used to emove under line of the text */}
          <i class="fa-solid fa-video text-warning me-2"></i>Media player
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
</>
  )
}

export default Header