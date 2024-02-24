import { v4 as uuidv4 } from 'uuid';

export const data = 
    {
        tigers: [
            {
                id: uuidv4(),
                name: "Pack Baumes du Tigre Rouge ou Blanc x3",
                price: 25,
                recto: '/soldes/tiger-red-pack.png', 
                description: "Pack de 3 baumes du tigre de 30g."     
            },
            {
                id: uuidv4(),
                name: "Pack Baumes du TigreRouge ou Blanc X6",
                price: 45,
                recto: '/soldes/tiger-white-pack.png', 
                description: "Pack de 6 baumes du tigre blanc de 30g."     
            },
        ],
        sockets: [
            {
                id: uuidv4(),
                name: "Pack Chaussettes Tapedesign X3",
                price: 18,
                recto: '/soldes/pack3.png', 
                description: "Pack de 3 paires de chaussettes de la collection Tapedesign."     
            },
            {
                id: uuidv4(),
                name: "Pack Chaussettes Tapedesign X6",
                price: 32,
                recto: '/soldes/pack6.png', 
                description: "Pack de 6 paires de chaussettes de la collection Tapedesign."     
            },
        ],
    }
