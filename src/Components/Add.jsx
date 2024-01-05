import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video, setVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embededLink:""
  });
  const embededVideoLink = (e)=>{
    const{ value } = e.target;
    
    const VideoLink = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setVideo({...video,embededLink:VideoLink})
  }
  
  
  const handleUpload =async () => {
    const {id, caption, url, embededLink }= video
    if(!id || !caption || !url || !embededLink){
      toast.warn("please fill the form completely")
      
    }
    else{
       const response =await uploadVideo(video)
       
       if(response.status == 201){
        toast.success(`sucessfully inserted the video ${response.data.caption}`)
        setUploadVideoStatus(response.data)
        
        handleClose();
       }
       else{
        toast.error("something went wrong")
       }
    }
  }
  return (
    <>
    <div className='d-flex align-items-center '>
        <h5>Upload New Video </h5>
        <button className='btn'onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
        
    </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> 
          <i class="fa-solid fa-film me-3 text-warning"></i>
          Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the form</p>
         <Form className='border border-secondary p-3 rounded'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter video image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter video Youtube Link" onChange={(e)=> embededVideoLink(e)} />
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary " className='btn btn-warning' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>

   
    </>
  )
}


export default Add