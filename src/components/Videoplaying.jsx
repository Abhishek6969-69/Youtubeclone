import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import useChannel from "../hooks/useChannelvideo";
import useVideodetail from "../hooks/useVideodetail";
function Videoplaying() {
    const {id}=useParams();
    const {channelid}=useParams();
   useChannel(channelid);
   useVideodetail(id)
  return (
    <div className=" bg-black">
        <Header />
      <iframe
        className=" w-screen h-screen p-4"
        src={"https://www.youtube.com/embed/"+id+"?si=XXaefgMLWi4qMS0x"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Videoplaying;
