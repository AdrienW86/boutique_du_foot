import React from 'react';
import Link from 'next/link';
import styles from './media.module.css';

function NasserVideo() {
  return (
   <>  
    <div id="nasdas" className={styles.filter}></div>
    <div className={styles.banner2}> 
      <div className={styles.info}>  Profitez de nos offres du moment. <Link href='/good-deal'> <span className={styles.span}> J'en profite </span> </Link> </div>
      <video poster="/nasser.png" controls className={styles.banner} preload="auto">
        <source src="/nasser.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <button className={styles.btn}> <Link href='/boxs#box-amsterdam'> Découvrir </Link> </button>
    </div>
   </>
  );
}

export default NasserVideo;