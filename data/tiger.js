import { v4 as uuidv4 } from 'uuid';

export const data = 
    {
        tiger: [
            {
                id: uuidv4(),
                name: "Baumes du tigre rouge 19g",
                price: 6,
                recto: '/tiger/tiger-red.webp',  
                verso: '/tiger/tiger-red2.webp', 
                description: "Le BAUME DU TIGRE Rouge permet de réduire les tensions grâce à l’action du massage.Pour les sportifs, idéal avant l’effort grâce à ses propriétés chauffantes. Camphre et huiles essentielles naturelles.",
            },
            {
                id: uuidv4(),
                name: "Baumes du tigre blanc 19g",
                price: 6,
                recto: '/tiger/tiger-white.jpg', 
                verso: '/tiger/tiger-white2.jpg', 
                description: "Le BAUME DU TIGRE Blanc peut être appliqué en massage de la poitrine. Respirez, une agréable odeur de menthol ! Il peut être utilisé en massage des tempes.Pour les sportifs, idéal après l'effort grâce à ses propriétés rafraîchissantes.  Camphre et huiles essentielles naturelles..",                 
            },
            {
                id: uuidv4(),
                name: "Baumes du tigre rouge 30g",
                price: 9,
                recto: '/tiger/tiger-red.webp',
                verso: '/tiger/tiger-red2.webp',
                description: "Le BAUME DU TIGRE Rouge permet de réduire les tensions grâce à l’action du massage.Pour les sportifs, idéal avant l’effort grâce à ses propriétés chauffantes. Camphre et huiles essentielles naturelles.",
            },
            {
                id: uuidv4(),
                name: "Baumes du tigre blanc 30g",
                price: 9,
                recto: '/tiger/tiger-white.jpg', 
                verso: '/tiger/tiger-white2.jpg',
                description: "Le BAUME DU TIGRE Blanc peut être appliqué en massage de la poitrine. Respirez, une agréable odeur de menthol ! Il peut être utilisé en massage des tempes.Pour les sportifs, idéal après l'effort grâce à ses propriétés rafraîchissantes.  Camphre et huiles essentielles naturelles..",  
            },
        ],
    }