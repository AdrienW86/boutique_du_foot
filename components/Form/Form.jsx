import React from 'react';
import {useForm} from 'react-hook-form';
import Image from 'next/image'
import Email from '@/assets/email.svg'
import styles from './form.module.css'

function ContactForm() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = data => {
    // Ici, vous pouvez gérer l'envoi du formulaire, par exemple, avec Axios ou fetch
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
            <div className={styles.boxContainer} >
                <Image
                    src={Email}
                    width={30}
                    height={30}
                    priority
                    className={styles.picture}
                    alt='email'       
                />
                <h3 className={styles.h3}> Formulaire de contact </h3>
            </div>
        </div>
       <div className={styles.txt}>
            <p> Besoin d'un conseil sur nos produits ou d'une information <br></br>sur votre commande ? </p>
       </div>  
       <h3 className={styles.h4}> POSEZ-NOUS VOTRE QUESTION </h3>    
      <div className={styles.formContent}>
        <input className={styles.input} placeholder='Nom' {...register('name', {required: true})} />
        {errors.name && <span className={styles.error}> Ce champ est requis.</span>}
           
        <input className={styles.input} placeholder='Email' {...register('email', {required: true})} />
        {errors.email && <span className={styles.error}> Ce champ est requis.</span>}    
      
        <input className={styles.input} placeholder='Demande' {...register('subject', {required: true})} />
        {errors.subject && <span className={styles.error}> Ce champ est requis.</span>}
           
        <textarea className={styles.textarea} placeholder='Message'  {...register('message', {required: true})} />
        {errors.message && <span className={styles.error}> Ce champ est requis.</span>}
      
      </div>
      <button className={styles.submit} type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
