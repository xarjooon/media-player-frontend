import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';

import { addToHistory, deleteVideo } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';


function Videocard({displayVideo}) {
  console.log("1");
  console.log(displayVideo);
  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // timestamp,video,url
    const {caption,embededLink}=displayVideo;
    const today=new Date;
    let timestamp=new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    let videodetails={
      caption:caption,
      embededLink:embededLink,
      timestamp:timestamp
    }
    await addToHistory(videodetails)
  }
  
  
  return (
    <>
    <Card style={{ width: '18rem',height:"240px" }} onClick={handleShow}>
      <Card.Img variant="top" height="150px" width=" 100%" src={displayVideo.url} />
      <Card.Body>
        <div className='d-flex align-item-center justify-content-evenly'>
          <h6>{displayVideo.caption}</h6>
          <Button variant="danger" className='ms-5' onClick={()=>removeVideo(displayVideo.id)}>
          <i class="fa-solid fa-trash"></i>
          </Button>

        </div>
    
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayVideo.embededLink}?autoplay=1`}  
        frameborder="1" title='mediaplayer'></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard