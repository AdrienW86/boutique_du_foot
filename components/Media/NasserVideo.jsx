import React from 'react';
import Link from 'next/link';
import styles from './media.module.css';

function NasserVideo() {
  return (
    <div className={styles.banner}>
      <video poster = '/nasser.png' controls className={styles.banner} preload="auto" >
        <source src='/nasser.mp4' type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <Link href='/shop#nasser' className={styles.btn}> Commander le même coffret </Link>
    </div>
  );
}

export default NasserVideo;