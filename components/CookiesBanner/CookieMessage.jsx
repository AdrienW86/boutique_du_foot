import { useState, useEffect } from 'react';
import CookieSetter from '@/utils/cookies';
import styles from './cookies.module.css'

const CookieMessage = ({ name, value, days }) => {
    const [showMessage, setShowMessage] = useState(false); // Initialisé à false par défaut
    const cookieName = 'cookiesAccepted';

    useEffect(() => {
        const cookiesAccepted = getCookie(cookieName);
        if (!cookiesAccepted) {
            setShowMessage(true);
        }
    }, []);

    const getCookie = (name) => {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : null;
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    };

    const eraseCookie = (name) => {
        document.cookie = name + '=; Max-Age=-99999999;';
    };

    const handleAccept = () => {
        setShowMessage(false);
        setCookie(cookieName, 'true', days);
    };

    const handleDecline = () => {
        setShowMessage(false);
        eraseCookie(cookieName); 
    };

    return (
        <div className={styles.container} style={{ display: showMessage ? 'block' : 'none' }}>
            <div className={styles.cookiesBanner}>
                <p>En poursuivant votre navigation sur notre site, 
                    vous acceptez les cookies nécessaires au bon fonctionnement de ce dernier.
                    Poursuivre la navigation et accepter les cookies ?
                </p>
                <button className={styles.btn} onClick={handleAccept}>Accepter</button>
                <button className={styles.btn} onClick={handleDecline}>Refuser</button>
            </div>
            {showMessage && <CookieSetter name={name} value={value} days={days} />}
        </div>
    );
};

export default CookieMessage;