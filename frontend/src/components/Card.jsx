import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, photo, prompt }) => {
  console.log(name[0]);
  return (
    <div className="rounded-xl group relative backdrop-blur-lg
    [ bg-gradient-to-b from-white/60 to-white/30 ]
    [ border-opacity-30 ]
    [ shadow-black/70 shadow-2xl ] overflow-hidden card">
      <img 
        className="w-full h-50 object-cover rounded-xl hover:scale-125 
        transition-all duration-500"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] 
      hidden absolute bottom-0 left-0 right-0 m-2 p-4 rounded-md 
      bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 
      border border-gray-200">
        <p className="text-white text-md overflow-y-auto prompt">
          {prompt}
        </p>
        <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover 
              bg-green-700 flex justify-center items-center 
              text-white text-xs font-bold">
                {name[0]}
              </div>
              <p className="text-white text-sm">{name}</p>
            </div>
            <button 
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              <img src={download} alt="download" 
              className="w-6 h-6 object-contain invert" 
              />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Card