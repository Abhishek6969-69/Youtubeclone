import React, { useEffect } from 'react'

import Sidebar from './sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { addvideo } from '../utils/sidebarslice';
import Cardcontainer from './cardcontainer';
function Body() {
  const dispatch=useDispatch();
  const side=useSelector((state)=>state.sidebar.showsidebar)
 const api=async()=>{
  const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '37c9522edcmshd338eb3c547b4a9p139577jsndca81546e3b4',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.items);
  dispatch(addvideo(result))
} catch (error) {
	console.error(error);
}
 }
 useEffect(()=>{
  api();
 })
  return (
    <div className=' '>
      <div className=' border absolute w-[230px] bg-black text-white z-30'>
        {
         side?  <Sidebar />:""
        }
       
        </div>
        <Cardcontainer />
    </div>
  )
}

export default Body