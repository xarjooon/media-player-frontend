import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletewatchhistory, getHistory } from '../services/allAPI';

export  default function Watchhistory() {
  const[history,sethistory]=useState([])
   async function watchhistory(){
    const response=await getHistory()
    const {data}=response;
    console.log("==watch history===");
    console.log(data);
    sethistory(data)
  }
  useEffect(()=>{
    watchhistory();
  },[])
  const handleDelete = async (id)=>{
    await deletewatchhistory(id);
    watchhistory();
  }

   
  return (
   <>
   <div className='container mt-5 d-flex justify-content-between'>
    
   <h5>Watch history</h5>
   <Link to = '/home' style={{textDecoration:"none",color:"white",fontSize:"15px", fontWeight:"600"}}>
   <i class="fa-solid fa-arrow-left me-3"></i>Bact to Home

   </Link>

   </div>
   <table className='table container mb-5'>
    <thead>
      <tr>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>TimeStamp</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        history.length>0?
        history.map((item,Index)=>(
          <tr>
            <td>{Index+1}</td>
            <td>{item.caption}</td>
            <td>{item.embededLink}</td>
            <td>{item.timestamp}</td>
            <td> <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button></td>
      
          </tr>
    

        ))
        :
        <p>no history</p>
      }
   
    </tbody>
   </table>
   </>
  )
}

