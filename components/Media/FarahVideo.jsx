import React from 'react';
import Link from 'next/link';
import styles from './media.module.css';

function FarahVideo() {
  return (
    <div className={styles.banner}>
      <video poster = '/farah.png' controls className={styles.banner} preload="auto" >
        <source src='/farah.mp4' type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <Link href='/shop#farah' className={styles.btn}> Commander le même coffret </Link>
    </div>
  );
}

export default FarahVideo;