import React from 'react'
import styles from '@/styles/conditions.module.css'

export default function mentions() {
  return (
    <div className={styles.container}>
        <h2 className={styles.h2}> Mentions Légales </h2>
            <h3 className={styles.h3}> [Votre Entreprise] </h3> 
                <p className={styles.p}> [Forme juridique de l'entreprise, ex. SARL, SAS, etc.] </p>  
                <p className={styles.p}> [Numéro SIRET] </p>   
                <p className={styles.p}> [Adresse du siège social] </p>   
                <p className={styles.p}> [Adresse e-mail de contact] </p>   
                <p className={styles.p}> [Numéro de téléphone] </p>   
                <p className={styles.p}> Directeur de la publication : </p>   
                <p className={styles.p}> [Nom du directeur de la publication] </p>   
            <h3 className={styles.h3}> Hébergeur du site : </h3>  
                <p className={styles.p}> [Nom de l'hébergeur] </p>   
                <p className={styles.p}>[Adresse de l'hébergeur]  </p>
            <h3 className={styles.h3}> Propriété intellectuelle : </h3>  
                <p className={styles.p}>  
                    Le contenu de ce site web est la propriété exclusive de 
                    [Votre Entreprise]. Toute reproduction, même partielle, est strictement interdite 
                    sans autorisation préalable. 
                </p>   
            <h3 className={styles.h3}> Protection des données personnelles : </h3>   
                <p className={styles.p}> 
                    Les informations collectées sur ce site sont destinées à 
                    [Votre Entreprise] et ne seront en aucun cas transmises à des tiers. 
                    Conformément à la loi "Informatique et Libertés" du [date], vous disposez
                     d'un droit d'accès, de modification, de rectification et de suppression des 
                     données qui vous concernent. Vous pouvez exercer ce droit en nous contactant à 
                     [adresse e-mail]. 
                </p>    
            <h3 className={styles.h3}> Cookies : </h3>  
                <p className={styles.p}> 
                    Ce site peut utiliser des cookies pour améliorer l'expérience de l'utilisateur. 
                    En naviguant sur le site, vous consentez à l'utilisation de ces cookies.
                </p>    
            <h3 className={styles.h3}> Liens externes : </h3> 
                <p className={styles.p}> 
                    [Votre Entreprise] décline toute responsabilité quant au contenu des sites externes 
                    liés à son site web. 
                </p> 
            <h3 className={styles.h3}>  Droit applicable : </h3>
                <p className={styles.p}> 
                    Les présentes mentions légales sont soumises au droit français. 
                    En cas de litige, les tribunaux compétents seront ceux du lieu du siège social de 
                    [Votre Entreprise]. 
                </p> 
    </div>
  )
}
