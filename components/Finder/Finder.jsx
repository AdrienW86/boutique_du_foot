import React, { useState } from 'react';
import Link from 'next/link';
import styles from './finder.module.css';

export default function Finder({results, toggle}) {
  const navigation = (toggle) => {
    setTimeout(() => {
      console.log("salut")
      toggle(); 
    }, 500); 
  };

  return (
    <div className={styles.search}>
      <h2 className={styles.h2}>Résultats de la recherche :</h2>
      <button className={styles.close} onClick={toggle}> X</button>
      {results.length  
        ?
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <Link href={result.url}>
                <h3 className={styles.h3} onClick={() => navigation(toggle)}>{result.title}</h3> 
              </Link>
            </li>
          ))}
        </ul>
        : <p className={styles.alert}> Aucun résultats trouvés</p>
      }
      <button onClick={toggle} className={styles.closed}> Fermer </button>
    </div>
  );
}

