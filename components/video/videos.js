import { useEffect, useState } from 'react';
import styles from './videos.module.css';

function Video() {
  const [documentWidth, setDocumentWidth] = useState(0);

  useEffect(() => {
    setDocumentWidth(document.documentElement.clientWidth);
  }, []);

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
            className={styles.videoPlayer}
          >
            <track kind="captions" />
          </video>
        </div>
      )}

      <div className={styles.content}>
        {documentWidth >= 600 ? (
          <h1>AltruIx</h1>
        ) : (
          <h1>AltruIx</h1>
        )}
      </div>
    </section>
  );
}

export default Video;
