import Tiger from '@/assets/tiger-red.webp'
import Tiger2 from '@/assets/tiger-red2.webp'
import Tiger3 from '@/assets/tiger-white.jpg'
import Tiger4 from '@/assets/tiger-white2.jpg'
import Socket from '@/assets/whitesocket.jpg'
import Socket2 from '@/assets/greysocket.jpg'
import Socket3 from '@/assets/socketblack.jpg'
import Socket4 from '@/assets/icebluesocket.jpg'
import Socket5 from '@/assets/greenyellowsocket.jpg'
import Socket6 from '@/assets/greensocket.jpg'
import Socket7 from '@/assets/purplesocket2.jpg'
import Socket8 from '@/assets/orangesocket.jpg'

import Paris from '@/assets/psg.png'
import Paris2 from '@/assets/psg2.png'
import Marseille from '@/assets/marseille.png'
import Marseille2 from '@/assets/marseille2.png'
import Madrid from '@/assets/madrid.png'
import Madrid2 from '@/assets/madrid2.png'
import Barcelone from '@/assets/barcelone.png'
import Barcelone2 from '@/assets/barcelone2.png'
import Manchester1 from '@/assets/manchester.png'
import Manchester2 from '@/assets/manchester2.png'
import Manchester3 from '@/assets/manchester3.png'
import Manchester4 from '@/assets/manchester4.png'
import Ajax from '@/assets/ajax.jpg'
import Ajax2 from '@/assets/ajax2.jpg'
import Algerie from '@/assets/algerie.png'
import Algerie2 from '@/assets/algerie2.png'
import Maroc from '@/assets/maroc.png'
import Maroc2 from '@/assets/maroc2.png'
import Tunisie from '@/assets/tunisie.jpg'
import Tunisie2 from '@/assets/tunisie2.jpg'

import Mahiedine from '@/assets/packReal.png'
import Coffret from '@/assets/box.png'
import Pack from '@/assets/pack-baumes.png'
import Pack1 from '@/assets/11.png'
import Pack2 from '@/assets/packChaussettes.png'
import Pack3 from '@/assets/packMarseille.png'
import Pack4 from '@/assets/packBarcelone.png'
import Pack5 from '@/assets/packPsg.png'
import Pack6 from '@/assets/packManchester.png'
import Pack7 from '@/assets/9.png'
import Pack8 from '@/assets/10.png'
import { v4 as uuidv4 } from 'uuid';

export const data = {
    vip: [
        {
            id: uuidv4(),
            name: "Coffret Real Madrid",
            price: 130,
            recto: Coffret,
            verso: Pack1,
            sizes: ["S","M","L","XL"],
            description: "Le pack Real contient un maillot officiel du Real Madrid, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
        {
            id: uuidv4(),
            name: "Coffret Ajax Amsterdam",
            price: 130,
            recto: Coffret,
            verso: Pack8,
            sizes: ["S","M","L","XL"],
            description: "Le pack Ajax Amsterdam contient un maillot officiel de l'Ajax Amsterdam, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
        {
            id: uuidv4(),
            name: "Coffret Manchester City",
            price: 130,
            recto: Coffret,
            verso: Pack7,
            sizes: ["S","M","L","XL"],
            description: "Le pack Manchester City contient un maillot officiel de Manchester City, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
    ],
    coffrets: [
        {
            id: uuidv4(),
            name: "Coffret FC Barcelone",
            price: 130,
            recto: Coffret,
            verso: Pack4,
            sizes: ["S","M","L","XL"],
            description: "Le pack Barcelone contient un maillot officiel du FC Barcelone, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
        {
            id: uuidv4(),
            name: "Coffret PSG",
            price: 130,
            recto: Coffret,
            verso: Pack5,
            sizes: ["S","M","L","XL"],
            description: "Le pack PSG contient un maillot officiel du PSG, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
        {
            id: uuidv4(),
            name: "Coffret Marseille",
            price: 130,
            recto: Coffret,
            verso: Pack3,
            sizes: ["S","M","L","XL"],
            description: "Le pack Marseille contient un maillot officiel de l'Olympique de Marseille, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
        {
            id: uuidv4(),
            name: "Coffret Manchester United",
            price: 130,
            recto: Coffret,
            verso: Pack6,
            sizes: ["S","M","L","XL"],
            description: "Le pack Manchester United contient un maillot officiel de Manchester United, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
        },
    ],
    packs: [
        {
            id: uuidv4(),
            name: "Pack Baumes (lot de 6)",
            price: 30,
            recto: Pack,   
            description: "Le pack comprend 6 baumes du tigre, 3 baumes rouge et 3 baumes blanc de chacun 19,4g."
        },
        {
            id: uuidv4(),
            name: "Pack Chaussettes (lot de 5)",
            price: 25,
            recto: Pack2,
            description: "Le pack comprend 5 paires de chaussettes de couleurs différentes et aléatoires."       
        },
    ],
    maillots: [
        {
            id: uuidv4(),
            name: "Paris Saint-Germain",
            price: 90,
            recto: Paris,
            verso: Paris2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Marseille",
            price: 90,
            recto: Marseille,
            verso: Marseille2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Madrid",
            price: 90,
            recto: Madrid,
            verso: Madrid2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Barcelone",
            price: 90,
            recto: Barcelone,
            verso: Barcelone2,
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            name: "Manchester City",
            price: 90,
            recto: Manchester3,
            verso: Manchester4,
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Manchester United",
            price: 90,
            recto: Manchester1,
            verso: Manchester2,
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Ajax Amsterdam",
            price: 90,
            recto: Ajax,
            verso: Ajax2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Algérie",
            price: 90,
            recto: Algerie,
            verso: Algerie2,
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Maroc",
            price: 90,
            recto: Maroc,
            verso: Maroc2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Tunisie",
            price: 90,
            recto: Tunisie,
            verso: Tunisie2,
            sizes: ["S","M","L","XL"]
        },
   ],
   juniors: [
    {
        id: uuidv4(),
        name: "Paris Saint-Germain (Junior)",
        price: 70,
        recto: Paris,
        verso: Paris2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Marseille (Junior)",
        price: 70,
        recto: Marseille,
        verso: Marseille2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Madrid (Junior)",
        price: 70,
        recto: Madrid,
        verso: Madrid2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Barcelone (Junior) ",
        price: 70,
        recto: Barcelone,
        verso: Barcelone2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },   
    {
        id: uuidv4(),
        name: "Manchester City (Junior)",
        price: 70,
        recto: Manchester3,
        verso: Manchester4,
        sizes: ["7/8","9/10","11/12","13/14"]
    }, 
    {
        id: uuidv4(),
        name: "Manchester United (Junior)",
        price: 70,
        recto: Manchester1,
        verso: Manchester2,
        sizes: ["7/8","9/10","11/12","13/14"]
    }, 
    {
        id: uuidv4(),
        name: "Ajax Amsterdam (Junior)",
        price: 70,
        recto: Ajax,
        verso: Ajax2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Algérie (Junior)",
        price: 70,
        recto: Algerie,
        verso: Algerie2,
        sizes: ["7/8","9/10","11/12","13/14"]
    }, 
    {
        id: uuidv4(),
        name: "Maroc (Junior)",
        price: 70,
        recto: Maroc,
        verso: Maroc2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Tunisie (Junior)",
        price: 70,
        recto: Tunisie,
        verso: Tunisie2,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
],
   baumes: [
    {
        id: uuidv4(),
        name: "Baume du Tigre rouge (19g)",
        price: 6,
        recto: Tiger,
        verso: Tiger2,
        description: "Le Baume du Tigre rouge ou blanc est un remède traditionnel de la médecine chinoise, composé à partir de différentes plantes et utilisé pour soulager les muscles et les articulations, les piqûres et démangeaisons, ou autre."
    },
    {
        id: uuidv4(),
        name: "Baume du Tigre blanc (19g)",
        price: 6,
        recto: Tiger3,
        verso: Tiger4,
        description: "Le Baume du Tigre rouge ou blanc est un remède traditionnel de la médecine chinoise, composé à partir de différentes plantes et utilisé pour soulager les muscles et les articulations, les piqûres et démangeaisons, ou autre."
    },
   ],
   socket: [
    {
        id: uuidv4(),
        name: "Chaussettes de Football blanches 39/45",
        price: 6,
        recto: Socket,      
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football grises 39/45",
        price: 6,
        recto: Socket2,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football noires 39/45",
        price: 6,
        recto: Socket3,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football bleues claires 39/45",
        price: 6,
        recto: Socket4,      
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football vertes claires 39/45",
        price: 6,
        recto: Socket5,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football vertes 39/45",
        price: 6,
        recto: Socket6,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football violettes 39/45",
        price: 6,
        recto: Socket7,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football oranges 39/45",
        price: 6,
        recto: Socket8,     
    },
   ]
}