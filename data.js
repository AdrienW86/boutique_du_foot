import Mbappe from '@/assets/maillot2.webp'
import Mbappe2 from '@/assets/maillot.webp'
import Ronaldo from '@/assets/ronaldo.webp'
import Ronaldo2 from '@/assets/ronaldo2.webp'
import Messi from '@/assets/messi.webp'
import Messi2 from '@/assets/messi2.webp'
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

import Lyon from '@/assets/lyon.png'
import Lyon2 from '@/assets/lyon2.png'

import Madrid from '@/assets/madrid.png'
import Madrid2 from '@/assets/madrid2.png'

import Barcelone from '@/assets/barcelone.png'
import Barcelone2 from '@/assets/barcelone2.png'

import Juventus from '@/assets/juventus.png'
import Juventus2 from '@/assets/juventus2.png'

import Manchester from '@/assets/manchester.png'
import Manchester2 from '@/assets/manchester2.png'
import Manchester3 from '@/assets/manchester3.png'
import Manchester4 from '@/assets/manchester4.png'

import Arsenal from '@/assets/arsenal.png'
import Arsenal2 from '@/assets/arsenal2.png'

import Inter from '@/assets/inter.png'
import Inter2 from '@/assets/inter2.png'

import Algerie from '@/assets/algerie.png'
import Algerie2 from '@/assets/algerie2.png'

import Maroc from '@/assets/maroc.png'
import Maroc2 from '@/assets/maroc2.png'

import Senegal from '@/assets/senegal.png'
import Senegal2 from '@/assets/senegal2.png'

import Cote from '@/assets/ivoire.png'
import Cote2 from '@/assets/ivoire2.png'

import Cameroun from '@/assets/cameroun.png'
import Cameroun2 from '@/assets/cameroun2.png'
import France from '@/assets/france.png'
import France2 from '@/assets/france2.png'
import France3 from '@/assets/france3.png'
import France4 from '@/assets/france4.png'

import Espagne from '@/assets/espagne.png'
import Espagne2 from '@/assets/espagne2.png'
import { v4 as uuidv4 } from 'uuid';

export const data = {
   team: [
        {
            id: uuidv4(),
            name: "Paris Saint-Germain",
            price: 70,
            recto: Paris,
            verso: Paris2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Marseille",
            price: 70,
            recto: Marseille,
            verso: Marseille2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Lyon",
            price: 70,
            recto: Lyon,
            verso: Lyon2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Madrid",
            price: 70,
            recto: Madrid,
            verso: Madrid2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Juventus",
            price: 70,
            recto: Juventus,
            verso: Juventus2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Barcelone",
            price: 70,
            recto: Barcelone,
            verso: Barcelone2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Manchester United",
            price: 70,
            recto: Manchester,
            verso: Manchester2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Manchester City",
            price: 70,
            recto: Manchester3,
            verso: Manchester4,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Arsenal",
            price: 70,
            recto: Arsenal,
            verso: Arsenal2,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Inter Milan",
            price: 70,
            recto: Inter,
            verso: Inter2,
            sizes: ["S","M","L","XL"]
        },
    ],

    country: [

    {
        id: uuidv4(),
        name: "Maroc",
        price: 70,
        recto: Maroc,
        verso: Maroc2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "Algérie",
        price: 70,
        recto: Algerie,
        verso: Algerie2,
        sizes: ["S","M","L","XL"]
    },

    {
        id: uuidv4(),
        name: "Sénégal",
        price: 70,
        recto: Senegal,
        verso: Senegal2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "Côte d'ivoire",
        price: 70,
        recto: Cote,
        verso: Cote2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "Caméroun",
        price: 70,
        recto: Cameroun,
        verso: Cameroun2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "France (domicile)",
        price: 70,
        recto: France,
        verso: France2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "France (extérieur)",
        price: 70,
        recto: France3,
        verso: France4,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "Espagne",
        price: 70,
        recto: Espagne,
        verso: Espagne2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "Ronaldo",
        price: 70,
        recto: Ronaldo,
        verso: Ronaldo2,
        sizes: ["S","M","L","XL"]
    },
    {
        id: uuidv4(),
        name: "Messi",
        price: 75,
        recto: Messi,
        verso: Messi2,
        sizes: ["S","M","L","XL"]
    },
   ],
   soin: [
    {
        id: uuidv4(),
        name: "Baume du Tigre rouge (19g)",
        price: 9,
        recto: Tiger,
        verso: Tiger2,
        link: 'https://buy.stripe.com/5kAcMQeVBfj8fvO3cc'
    },
    {
        id: uuidv4(),
        name: "Baume du Tigre blanc (19g)",
        price: 9,
        recto: Tiger3,
        verso: Tiger4,
        link: 'https://buy.stripe.com/5kAcMQeVBfj8fvO3cc'
    },
   ],
   socket: [
    {
        id: uuidv4(),
        name: "Chaussettes de Football blanches 39/45",
        price: 9,
        recto: Socket,      
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football grises 39/45",
        price: 9,
        recto: Socket2,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football noires 39/45",
        price: 9,
        recto: Socket3,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football bleues claires 39/45",
        price: 9,
        recto: Socket4,      
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football vertes claires 39/45",
        price: 9,
        recto: Socket5,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football vertes 39/45",
        price: 9,
        recto: Socket6,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football violettes 39/45",
        price: 9,
        recto: Socket7,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football oranges 39/45",
        price: 9,
        recto: Socket8,     
    },
   ]
}