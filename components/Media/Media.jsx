import React from 'react';
import Link from 'next/link';
import styles from './media.module.css';

function BannerVideo(props) {
  return (
    <div className={styles.banner}>
      <video controls className={styles.banner} preload="auto" playsInline>
        <source src={props.content} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <Link href={props.anchor} className={styles.btn}> Commander le même coffret </Link>
    </div>
  );
}

export default BannerVideo;
