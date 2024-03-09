import React, { useRef, useState } from "react";
import { Banner } from "../../../assets";

const Video = ({ srcVid = "https://www.youtube.com/embed/VANzpwmriKI" }) => {
  const refImg = useRef();
  const [isPlayed, setIsPlayed] = useState(false);
  const [isHoverImg, setIsHoverImg] = useState(false);
  const transAva = "all .3s linear";
  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsHoverImg(true)}
      onMouseLeave={() => setIsHoverImg(false)}
      onClick={() => setIsPlayed(true)}
    >
      <img ref={refImg} src={Banner} className="h-full w-full" />
      <div
        className={`absolute left-0 top-0 h-full bg-[#10384f1f] ${isHoverImg ? "w-0" : "w-full"}`}
        style={{
          transition: transAva,
        }}
      />
      <svg
        className={`absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ${isHoverImg ? "scale-150" : "scale-100"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        style={{
          transition: transAva,
        }}
      >
        <path
          d="M69.9999 117.6C43.6799 117.6 22.3999 96.32 22.3999 70C22.3999 43.68 43.6799 22.4 69.9999 22.4C96.3199 22.4 117.6 43.68 117.6 70C117.6 96.32 96.3199 117.6 69.9999 117.6ZM69.9999 28C46.7599 28 27.9999 46.76 27.9999 70C27.9999 93.24 46.7599 112 69.9999 112C93.2399 112 112 93.24 112 70C112 46.76 93.2399 28 69.9999 28Z"
          fill="white"
        />
        <path
          d="M56 94.36V45.64L98 70L56 94.36ZM61.6 55.16V84.56L86.8 69.72L61.6 55.16Z"
          fill="white"
        />
      </svg>
      <iframe
        className={`absolute left-0 top-0 h-full w-full ${isPlayed ? "visible opacity-100" : "invisible opacity-0"}`}
        src={srcVid}
        style={{
          transition: `all .5s linear`,
        }}
      />
    </div>
  );
};

export default Video;
