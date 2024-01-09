import React from 'react';
import Image from 'next/image';
import styles from './imageModal.module.css';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent}>
        <Image src={imageUrl} alt="Fullscreen" className={styles.fullscreenImage} width={400} height={400}/>
        <button className={styles.closeButton} onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
