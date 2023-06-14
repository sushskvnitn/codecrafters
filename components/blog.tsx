import React from 'react';
import 'tailwindcss/tailwind.css';
const Blog = () => {
    const videos = [
      'https://www.youtube.com/embed/1xBeRKQtEMk',
      'https://www.youtube.com/embed/E95ubQ5w3TM',
      'https://www.youtube.com/embed/Let7WsioITI',
      'https://www.youtube.com/embed/usPjmbHr3JU',
      'https://www.youtube.com/embed/oeQZ27RL4t8',
      'https://www.youtube.com/embed/i5OLyn1IPaM',
    ];
  
    return (
      <>
        <h1 className="text-3xl font-bold mb-4 mx-20">Video Tutorials</h1>
        <div className="slider-container ">
          <div className="slider flex ">
            {videos.map((video) => (
              <div className="slider-item" key={video}>
                <iframe
                  src={video.replace('watch?v=', 'embed/')}
            
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube Video"
                  className="w-full h-40 md:h-60 lg:h-80 xl:h-96 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Blog;
  