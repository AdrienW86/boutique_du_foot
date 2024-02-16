import React from 'react'
import styles from '@/styles/conditions.module.css'

export default function conditons() {
  return (
    <div className={styles.container}>
       <h2 className={styles.h2}> Conditions Générales de Vente </h2>
            <h3 className={styles.h3}> 1. Champ d'application </h3>   
                <p className={styles.p}> Les présentes Conditions Générales de Vente (CGV) régissent 
                    la vente de produits par La boutique du sport (ci-après dénommé le "Vendeur")
                    à ses clients (ci-après dénommés le "Client").
                </p>
            <h3 className={styles.h3} > 2. Commandes </h3> 
                <p className={styles.p}> Le Client peut passer commande en ligne via le site web de 
                    la boutique du foot. Toute commande implique l'acceptation intégrale 
                    et sans réserve des présentes CGV.
                </p> 
            <h3 className={styles.h3}> 3. Prix </h3>   
                <p className={styles.p}> Les prix des produits sont indiqués en euros, toutes taxes comprises.
                    La boutique du foot se réserve le droit de modifier les prix à tout moment, 
                    mais les produits seront facturés au tarif en vigueur au moment de la validation 
                    de la commande.
                </p>   
            <h3 className={styles.h3}> 4. Paiement </h3>
                <p className={styles.p}> Le paiement s'effectue en ligne par différents moyens de paiement. 
                    La commande ne sera expédiée qu'après réception du paiement.
                </p>
            <h3 className={styles.h3}> 5. Livraison </h3>
                <p className={styles.p}> Les frais de livraison sont à la charge du Client et sont indiqués lors de la commande. 
                    La boutique du sport s'efforcera de respecter les délais de livraison indiqués, mais ne peut
                    être tenue responsable des retards dus à des circonstances indépendantes de sa volonté.
                </p>   
            <h3 className={styles.h3} > 6. Droit de Rétractation </h3>
                <p className={styles.p}> Conformément à la législation en vigueur, le Client dispose d'un délai de 
                    14 jours à compter de la réception des produits pour exercer 
                    son droit de rétractation et retourner le produit pour remboursement.
                </p>   
            <h3 className={styles.h3}> 7. Garanties </h3>  
                <p className={styles.p}> Vous bénéficiez de la garantie légale de conformité dans les conditions
                 des articles L.217-4 et suivants du code de la consommation et de la garantie des vices cachés dans les 
                 conditions prévues aux articles 1641 et suivants du Code civil. </p>    
            <h3 className={styles.h3}> 8. Responsabilité </h3>
                <p className={styles.p}> Codev ne peut être tenue responsable des dommages directs ou indirects causés 
                    par l'utilisation des produits.
                </p>  
            <h3 className={styles.h3} > 9. Protection des Données Personnelles </h3>
                <p className={styles.p}> Les informations personnelles collectées lors de la commande sont nécessaires à la gestion 
                    de la transaction et peuvent être utilisées à des fins de communication marketing. Le Client peut 
                    demander à tout moment la suppression de ses données personnelles.
                </p>    
            <h3 className={styles.h3}> 10. Litiges </h3>
                <p className={styles.p}> En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux compétents seront 
                    ceux du lieu du siège social de la boutique du sport.
                </p>
    </div>
  )
}
