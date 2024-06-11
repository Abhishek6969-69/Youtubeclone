import React from 'react'
import {  useSelector } from 'react-redux'
import Card from './card';
import { Link } from 'react-router-dom';
function Cardcontainer() {
    const video=useSelector((state)=>state?.sidebar?.Video?.items)
    if(!video)return;
   
  return (
    <div className=' flex  flex-wrap gap-14  text-white bg-black'>
{
    video && video.map((v)=>{
        
       return (
        <div className=' '>
      <Link to={'/card/'+v.id.videoId+"/"+v.snippet
.
channelId
}><Card key={v.id.videoId} item={v} /></Link> 
       </div>
       )
    })
}
    </div>
  )
}

export default Cardcontainer