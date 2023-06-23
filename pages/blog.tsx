import * as React from 'react';
import 'tailwindcss/tailwind.css';
import { getyvdos } from '../app/api/hello/getytvdos';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import styles from '../components/contact.module.css';

type VideoBlockProps = {
  id: string;
};

const VideoElement = (props: VideoBlockProps): React.ReactElement => (
  <div className={styles.videoElement}>
    <iframe
      width="380"
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
        console.log('data', data);
        const videoIds = data.map((item: any) => item.contentDetails.videoId);
        setVideoData(videoIds);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };
    fetchVideoData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div className="py-10 my-10">
          <h1 className="text-3xl font-bold mb-4">Video Tutorials</h1>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {videoData.map((videoId: string, index: number) => (
              <div className={styles.videoCard} key={videoId}>
                <VideoElement key={index} id={videoId} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
