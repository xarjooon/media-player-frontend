import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// 1 upload video

 export  const uploadVideo = async(reqBody)=>{
     return await commonAPI('POST', `${serverURL}/videos`,reqBody)
}

// get all videos

export const getAllvideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

// delete video

export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//4 add to history
export const addToHistory=async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//5 Get all watch history
export const getHistory=async()=>{
  return await commonAPI('GET',`${serverURL}/history`,"")
}

// 6 delete watch history
export const deletewatchhistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
// add category

export const addCategory=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`,reqBody)
  }

  // get all category
 export const getAllCategory = async()=>{
  return await commonAPI('GET', `${serverURL}/category`,"")
}
//   delete category
 export const deletecategory= async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
 }