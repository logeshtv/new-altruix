import { useCallback, useEffect, useState } from 'react';
import styles from './Video.module.css';

function Video() {
  const [video, setVideo] = useState('design');
  const [documentWidth, setDocumentWidth] = useState(0);

  useEffect(() => {
    setDocumentWidth(document.documentElement.clientWidth);
  }, []);

  const VideoPlay = useCallback((src) => {
    setVideo(src);
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
  }, []);

  const VideoPause = useCallback(() => {
    document.getElementById('videoContainer').style.opacity = 0;
    document.getElementById('video').pause();
    setVideo('');
  }, []);

  const Heading = useCallback(
    ({ src, text }) => {
      return (
        <h1
          onMouseEnter={() => {
            VideoPlay(src);
          }}
          onMouseLeave={VideoPause}
          onTouchStart={() => {
            VideoPlay(src);
          }}
        >
          {text}
        </h1>
      );
    },
    [VideoPause, VideoPlay]
  );

  return (
    <section className={styles.video}>
      {documentWidth >= 600 && (
        <div id="videoContainer" className={styles.designVideoContainer}>
          <video
            src="/video/wolf_video2.mp4"
            autoPlay
            muted
            loop
            controls={false}
            id="video"
            className={
              video === 'design' ? 'w-screen opacity-100' : 'w-0 opacity-0'
            }
          >
            <track kind="captions" />
          </video>
        </div>
      )}

      <div  className={styles.content}>
        {documentWidth >= 600 ? (
          <>
            <Heading id='hideme' src="design" text="AltruIx" />
          </>
        ) : (
          <>
          <h1>AltruIx</h1>
          </>
        )}
      </div>
    </section>
  );
}

export default Video;
