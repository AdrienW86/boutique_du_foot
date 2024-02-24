import { v4 as uuidv4 } from 'uuid';

export const data = {
    box: 
    [
        {
            id: uuidv4(),
            anchor: "coffret-nasdas",
            name: "Coffret Ajax Amsterdam",
            price: 120,
            recto: '/coffret/coffret.png',
            verso: '/maillots_hommes/ajax.png',
            description: "Coffret contenant le maillot de l'ajax amsterdam, 5 paires de chaussettes de la collection tapedesign de votre choix ainsi que 2 baumes du tigre (rouge et blanc de 19g chacun).",
            sizes: ["S","M","L","XL"],
            color: ["Blanc","Gris","Noir","Bleu","Vert","Violet","Orange","Rouge","Bleu Ciel","Jaune/Vert"]
        },  
        {
            id: uuidv4(),
            anchor: "coffret-farah",
            name: "Coffret Manchester City",
            price: 120,
            recto: '/coffret/coffret.png',
            verso: '/maillots_hommes/manchester-city.png',
            description: "Coffret contenant le maillot de manchester city, 5 paires de chaussettes de la collection tapedesign de votre choix ainsi que 2 baumes du tigre (rouge et blanc de 19g chacun).",
            sizes: ["S","M","L","XL"],
            color: ["Blanc","Gris","Noir","Bleu","Vert","Violet","Orange","Rouge","Bleu Ciel","Jaune/Vert"]
        },
        {
            id: uuidv4(),
            anchor: "coffret-tunisie",
            name: "Coffret Tunisie",
            price: 120,
            recto: '/coffret/coffret.png',
            verso: '/maillots_hommes/tunisie.png',
            description: "Coffret contenant le maillot de l'équipe nationale d'algérie, 5 paires de chaussettes de la collection tapedesign de votre choix ainsi que 2 baumes du tigre (rouge et blanc de 19g chacun).",
            sizes: ["S","M","L","XL"],
            color: ["Blanc","Gris","Noir","Bleu","Vert","Violet","Orange","Rouge","Bleu Ciel","Jaune/Vert"]
        },          
    ],
}