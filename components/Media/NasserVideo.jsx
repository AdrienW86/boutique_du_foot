import React from 'react';
import Link from 'next/link';
import styles from './media.module.css';

function NasserVideo() {
  return (
   <>  
    <div id="nasdas" className={styles.filter}></div>
    <div className={styles.banner2}> 
      <div className={styles.info}>  Profitez de nos offres du moment.<Link href='/good-deal'> <span className={styles.span}> J'en profite </span> </Link> </div>
      <video poster="/nasser.webp" controls preload='lazy' className={styles.banner}>
        <source src="/nasser1.mp4" type="video/mp4" />
        <track src="video nasdas" kind="captions" srclang="fr" label="french_captions"></track>
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <button className={styles.btn}> <Link href='/boxs#box-amsterdam'> Découvrir </Link> </button>
    </div>
   </>
  );
}

export default NasserVideo;