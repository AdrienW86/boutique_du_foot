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

import Manchester3 from '@/assets/manchester3.png'
import Manchester4 from '@/assets/manchester4.png'

import Algerie from '@/assets/algerie.png'
import Algerie2 from '@/assets/algerie2.png'

import Maroc from '@/assets/maroc.png'
import Maroc2 from '@/assets/maroc2.png'
import France from '@/assets/france.png'
import France2 from '@/assets/france2.png'

import Mahiedine from '@/assets/mahedine.png'
import Coffret from '@/assets/2.png'
import Pack from '@/assets/3.png'
import Pack2 from '@/assets/4.png'
import { v4 as uuidv4 } from 'uuid';

export const data = {
    coffrets: [
        {
            id: uuidv4(),
            name: "Mahiedine",
            price: 150,
            recto: Mahiedine,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Real",
            price: 130,
            recto: Coffret,
            
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Barcelone",
            price: 130,
            recto: Coffret,
            sizes: ["S","M","L","XL"]
        },

    ],
    packs: [
        {
            id: uuidv4(),
            name: "Pack Baumes",
            price: 30,
            recto: Pack,           
        },
        {
            id: uuidv4(),
            name: "Pack Chaussettes",
            price: 35,
            recto: Pack2,                  
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
            name: "France (domicile)",
            price: 90,
            recto: France,
            verso: France2,
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
            name: "Maroc",
            price: 90,
            recto: Maroc,
            verso: Maroc2,
            sizes: ["S","M","L","XL"]
        },
   ],
   baumes: [
    {
        id: uuidv4(),
        name: "Baume du Tigre rouge (19g)",
        price: 7,
        recto: Tiger,
        verso: Tiger2,
        link: 'https://buy.stripe.com/5kAcMQeVBfj8fvO3cc'
    },
    {
        id: uuidv4(),
        name: "Baume du Tigre blanc (19g)",
        price: 7,
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