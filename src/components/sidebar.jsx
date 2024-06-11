import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  return (
    <div className="  py-10 p-6">
      <div className=" flex justify-between m-3 rounded-md p-2  hover:bg-gray-500  " >
        <FontAwesomeIcon className="mt-2" icon={faHouse} />
        <h3 className=" ">Home</h3>
      </div>
      <div className=" flex justify-between m-3 rounded-md p-2  hover:bg-gray-500">
        <FontAwesomeIcon className="mt-2 " icon={faYoutube} />
        <h3 className=" ">Shorts</h3>
      </div>
      <div className=" flex justify-between m-3 rounded-md p-2  hover:bg-gray-500">
        <img
          className="w-6"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s"
        />
        <h3 className=" ">Shorts</h3>
      </div>
      <div className=" bg-gray-600 w-[200px] h-1 absolute -ml-3">

      </div>
      <div className=" ">
        <p className=" mt-6">YOU ▶️    </p>
        <div className=" p-4 ">
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tWZjyHBjgs3OZXUzWovciS-CE2sAgqONqA&s" />
            <h3 className=" ">Your channel</h3>
          </div>
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://banner2.cleanpng.com/20191028/wra/transparent-history-icon-5db77109ae1843.2334147615723031137131.jpg" />
            <h3 className=" ">History</h3>
          </div>
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-music-playlist-vector-icon-musical-note-and-list-vector-png-image_34961228.jpg" />
            <h3 className=" ">Playlist</h3>
          </div>
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6QLpuOwqn8cituttcB7a3Ar7GxM3AnmsWg&s" />
            <h3 className=" ">Your video</h3>
          </div>
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe387EnYO8MfJXW0cwUiOHFLn6OPrn__cXWA&s" />
            <h3 className=" ">Watch Later</h3>
          </div>
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hKd_5RS2bdcsU9Ye3Mtqn9EHwmULN40ATA&s" />
            <h3 className=" ">Liked Videos</h3>
          </div>
          <div className=" flex justify-between my-6">
            <img className=" w-6" src="https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png" />
            <h3 className=" ">Downloads</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
