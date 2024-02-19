import { useState } from "react";
import AudioPlayer from "../Component/AudioPlayer";
import VideoPlayer from "../Component/VideoPlayer";
const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div className="text-center ">
        <a
          onClick={() => setShowVideo(false)}
          className={
            showVideo
              ? "link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2 "
              : "link link-danger  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2 "
          }
        >
          Audio Player
        </a>
        <a
          onClick={() => setShowVideo(true)}
          className={
            showVideo
              ? "link link-danger  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2 "
              : "link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2 "
          }
        >
          Video Player
        </a>
      </div>
      {showVideo ? (
        <div className="my-3">
          <VideoPlayer />
        </div>
      ) : (
        <div className="my-3">
          <AudioPlayer />
        </div>
      )}
    </>
  );
};

export default Home;
