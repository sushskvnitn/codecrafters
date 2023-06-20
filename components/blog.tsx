"use client"
import * as React from 'react';
import 'tailwindcss/tailwind.css';
import { getyvdos } from '../app/api/hello/getytvdos';
type VideoBlockProps = {
  id: string;
};

// Define the VideoElement component
const VideoElement = (props: VideoBlockProps): React.ReactElement => (
  <div className="mx-5">
    <iframe
      width="450"
      height="280"
      src={`https://www.youtube.com/embed/${props.id}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="YouTube Video"
    />
  </div>
);

const Blog = (): React.ReactElement => {
  const [videoData, setVideoData] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const data = await getyvdos();
        const videoIds = data.map((item: any) => item.contentDetails.videoId    );
        setVideoData(videoIds);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, []);

  return (<>
<h1 className="text-3xl font-bold mb-4 mx-20">Video Tutorials</h1>
        <div className="slider-container ">
          <div className="slider flex ">
        {videoData.map((videoId: string, index: number) => (
          <div className="slider-item" key={videoId}>
          <VideoElement key={index} id={videoId} />
          </div>
        ))}
         </div>
        </div>
    </>
  );
};
export default Blog;
