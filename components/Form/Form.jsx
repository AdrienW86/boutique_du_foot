import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import Image from 'next/image'
import Email from '@/assets/email.svg'
import styles from './form.module.css'

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSended, setIsSended] = useState(false);
  const [valable, setIsValable] = useState(false);
  const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsValable(true);
    }
  }, []);

  const onSubmit = async(data) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsLoading(false);

      if (!response.ok) {
          console.log("error");
          alert("le formulaire n'as pas pu être envoyé")
      } else {
          console.log("ok");
          reset();
          setIsSended(true);
          alert("le formulaire a été envoyé avec succès")
      }
  }
};

  return (
  <>
    {valable
      ?
        <div style={{textAlign: "center"}}>
          {isSended && (
            <div className={styles.confirm} > 
              <p className={styles.pConfirm} >
                Votre message a bien été envoyé. <br/>
                Nous vous répondrons dans les plus bref délais.
              </p>
            </div>
          )}
          {!isSended && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.box}>
                <div className={styles.boxContainer} >
                  <Image
                    src={Email}
                    width={30}
                    height={30}
                    className={styles.picture}
                    alt='email'       
                  />
                  <h3 className={styles.h3}> Formulaire de contact </h3>
                </div>
              </div>
              <div className={styles.txt}>
                <p> Besoin d'un conseil sur nos produits ou d'une information sur votre commande ? </p>
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
                <div>
                  <button className={styles.submit} type="submit">Envoyer</button>
                </div>     
            </form>
          )}
        </div>
      : null
    }
  </>
  );
}

export default ContactForm;