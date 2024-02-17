import React from 'react'
import styles from '@/styles/conditions.module.css'

export default function mentions() {
  return (
    <div className={styles.container}>
        <h2 className={styles.h2}> Mentions Légales </h2>
            <h3 className={styles.h3}> Dénomination commerciale : La boutique du foot </h3> 
            <h3 className={styles.h3}> Raison sociale : La boutique du sport </h3> 
                <p className={styles.p}>Forme juridique de l'entreprise: AE </p>  
                <p className={styles.p}> Numéro SIRET: 91277344700020 </p>   
                <p className={styles.p}> 60 rue François 1er, 75008 Paris </p>   
                <p className={styles.p}> Adresse e-mail de contact: support@code-v.fr </p>      
                <p className={styles.p}> Directeur de la publication : </p>   
                <p className={styles.p}> Monsieur Weissenbacher Adrien </p>   
            <h3 className={styles.h3}> Hébergeur du site : </h3>  
                <p className={styles.p}> Hostinger </p>   
                <p className={styles.p}>Adresse de l'hébergeur: HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre  </p>
            <h3 className={styles.h3}> Propriété intellectuelle : </h3>  
                <p className={styles.p}>  
                    Le contenu de ce site web est la propriété exclusive de 
                    Codev. Toute reproduction, même partielle, est strictement interdite 
                    sans autorisation préalable. 
                </p>   
            <h3 className={styles.h3}> Protection des données personnelles : </h3>   
                <p className={styles.p}> 
                    Les informations collectées sur ce site sont destinées à 
                    Codev et ne seront en aucun cas transmises à des tiers. 
                    Conformément à la loi "Informatique et Libertés" du 1er juin 2019, vous disposez
                     d'un droit d'accès, de modification, de rectification et de suppression des 
                     données qui vous concernent. Vous pouvez exercer ce droit en nous contactant à :
                     support@code-v.fr. 
                </p>    
            <h3 className={styles.h3}> Cookies : </h3>  
                <p className={styles.p}> 
                    Ce site peut utiliser des cookies pour améliorer l'expérience de l'utilisateur. 
                    En naviguant sur le site, vous consentez à l'utilisation de ces cookies.
                </p>    
            <h3 className={styles.h3}> Liens externes : </h3> 
                <p className={styles.p}> 
                    Codev décline toute responsabilité quant au contenu des sites externes 
                    liés à son site web. 
                </p> 
            <h3 className={styles.h3}>  Droit applicable : </h3>
                <p className={styles.p}> 
                    Les présentes mentions légales sont soumises au droit français. 
                    En cas de litige, les tribunaux compétents seront ceux du lieu du siège social de 
                    Codev. 
                </p> 
    </div>
  )
}
