import React from 'react'

export default function Menu() {
  return (
    <section className={`${styles.menuBox} ${isMenuOpen ? styles.menuBoxOpen : ''}`}>
    {isMenuOpen && (
       
       <ul className={styles.menu}>
       <li className={styles.menu_link}>
         <div>
           <Link href='/mens' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> HOMMES </p> 
             <Image 
               src={Men}
               height={70}
               width={50}
               className={styles.linkImg}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/womens' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> FEMMES </p> 
             <Image 
               src={Women}
               height={70}
               width={70}
               className={styles.linkImg}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/kids' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> JUNIORS </p> 
             <Image 
               src={Child}
               height={70}
               width={60}
               className={styles.linkImg}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/maillots' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> MAILLOTS </p> 
             <Image 
               src={Maillot}
               height={70}
               width={45}
               className={styles.linkImg2}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/sockets' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> CHAUSSETTES </p> 
             <Image 
               src={Socket}
               height={60}
               width={40}
               className={styles.linkImg1}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/balms' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> BAUMES </p> 
             <Image 
               src={Balm}
               height={60}
               width={50}
               className={styles.linkImg2}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li>
       <li className={styles.menu_link}>
         <div>
         <Link href='/boxs' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> COFFRETS </p> 
             <Image 
               src={Box}
               height={70}
               width={60}
               className={styles.linkImg2}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/good-deal' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> BON PLANS </p> 
           </Link>
         </div>
       </li> 
     </ul>   
     )}
     </section>
)}
