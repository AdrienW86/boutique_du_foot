// Dans votre composant React Next.js
import React from 'react';
import Link from 'next/link';
import Nasser from '@/assets/nasser.mp4'
import styles from './media.module.css'

function BannerVideo() {
  return (
    <div className={styles.banner}>
      <video controls autoPlay className={styles.banner}>
        <source src={Nasser} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <Link href="/shop/#anchor1" className={styles.btn}> Commander le coffret Ajax Amsterdam </Link>
    </div>
  );
}

export default BannerVideo;
