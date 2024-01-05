import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';
import { getAllvideos } from '../services/allAPI';

function View({uploadVideoStatus}) { 
  const [allVideo, setAllVideo] = useState([])
  const getAllUploadedVideos = async()=>{
    const response = await getAllvideos();
    const {data} = response;
    setAllVideo(data)
   
  }
  useEffect(()=>{
    getAllUploadedVideos();

  },[uploadVideoStatus])
  console.log("==ALL Videos");
  console.log(allVideo);
  return (
    <>
     <Row>
      {
        allVideo?.length>0?
        allVideo.map((video)=>(
          <Col sm ={12} md={6} lg={4} xl={4} className='m-5' >
          <Videocard displayVideo={video}/>
          </Col>

        ))
       :
         <p>No Item to Display</p>

      }
       
      </Row>
    </>
  )
}

export default View