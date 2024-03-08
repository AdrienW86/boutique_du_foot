import React, { useEffect } from 'react';

const BannerInstallation = () => {
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            // Empêche l'événement par défaut
            e.preventDefault();
            // Affiche la bannière d'installation
            showInstallPrompt(e);
        };

        const showInstallPrompt = (e) => {
            // Affiche une bannière ou un bouton pour permettre à l'utilisateur d'installer l'application
            // Vous pouvez personnaliser cette partie en fonction de vos besoins
            const banner = document.createElement('div');
            banner.innerHTML = `
                <div style="position: fixed; bottom: 20px; left: 20px; background-color: #0071BD; color: white; padding: 10px;">
                    <p>Installez notre application pour une meilleure expérience!</p>
                    <button style="background-color: white; color: #0071BD; border: none; padding: 5px 10px; cursor: pointer;">
                        Installer
                    </button>
                </div>
            `;

            banner.querySelector('button').addEventListener('click', () => {
                e.prompt(); // Affiche la fenêtre d'installation
            });

            document.body.appendChild(banner);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    return null;
};

export default BannerInstallation;

