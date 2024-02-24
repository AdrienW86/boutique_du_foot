import React, { useState } from 'react';
import Link from 'next/link';
import styles from './finder.module.css';

export default function Finder({results, toggle}) {
  const navigation = (toggle) => {
    setTimeout(() => {
      console.log("salut")
      toggle(); // Appeler la fonction toggle après le délai
    }, 500); // 1000 millisecondes équivalent à une seconde
  };

  return (
    <div className={styles.search}>
      <h2 className={styles.h2}>Résultats de la recherche :</h2>
      <button className={styles.close} onClick={toggle}> X</button>
      {/* Affichage des résultats de la recherche */}
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

