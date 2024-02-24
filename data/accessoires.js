import { v4 as uuidv4 } from 'uuid';

export const data = {
    accessoires: 
    [
        {
            id: uuidv4(),
            anchor: "pistolet",
            name: "Pistolet masseur BF",
            price: 65,
            recto: '/accessoires/masseur.png',
            verso: '/accessoires/malette.png',
            description: "Pistolet de massage de la marque Boutique du foot. Pistolet éléctrique à percussion masseur pour le corps, le cou et le dos. Vendu avec son étui. Prise usb et éctan LCD. ",
        },  
        // {
        //     id: uuidv4(),
        //     anchor: "bf-sport",
        //     name: "Casquette BF Sport",
        //     price: 9,
        //     recto: '/accessoires/casquette-bf-sport.png',
        //     verso: '/accessoires/malette.png',
        //     description: "Casquette BF Sport 100% polyester. Décontractée, robuste et respirante. 56-60 cm. ",
        // }, 
        // {
        //     id: uuidv4(),
        //     anchor: "bf-sport-elegance",
        //     name: "Casquette BF Sport Elegance",
        //     price: 9,
        //     recto: '/accessoires/casquette-bf-sport-elegance.png',
        //     verso: '/accessoires/malette.png',
        //     description: "Casquette BF Sport 100% polyester. Décontractée, robuste et respirante. 56-60 cm. Broderie plate à l'avant.  ",
        // },
        {
            id: uuidv4(),
            anchor: "pistolet",
            name: "Casquette BF Elegance",
            price: 15,
            recto: '/accessoires/casquette-bf-brode.png',
            
            description: "Casquette BF Elegance 100% coton. Casquettes à 6 panneaux avec broderie plate à l'avant.",
        },     
        {
            id: uuidv4(),
            anchor: "pistolet",
            name: "Bob BF Elegance ",
            price: 15,
            recto: '/accessoires/bob.png',
           
            description: "Bob Elegance BF 100% coton/polyester. Bob avec broderie plate à l'avant.",
        },
        {
            id: uuidv4(),
            anchor: "pistolet",
            name: "Bob BF Zen ",
            price: 15,
            recto: '/accessoires/bob-zen.png',
            
            description: "Bob Zen BF 100% coton/polyester. Bob avec motif imprimé.",
        }  
    ],
}
