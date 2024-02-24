import { v4 as uuidv4 } from 'uuid';

export const data = {
    ligue1: 
    [
        {
            id: uuidv4(),
            anchor: "lyon",
            name: "Olympique de Lyon",
            price: 90,
            recto: '/maillots_hommes/lyon.png',
            verso: '/maillots_hommes/lyon-verso.png',
            description: "Maillot officiel pour homme de l'équipe de l'Olympique de Lyon.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            anchor: "paris",
            name: "Paris Saint-Germain",
            price: 90,
            recto: '/maillots_hommes/psg.png',
            verso: '/maillots_hommes/psg-verso.png',
            description: "Maillot officiel pour homme de l'équipe du Paris-Saint-Germain.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "marseille",
            name: "Olympique de Marseille",
            price: 90,
            recto: '/maillots_hommes/marseille.png',
            verso : '/maillots_hommes/marseille-verso.png',
            description: "Maillot officiel pour homme de l'équipe de l'Olympique de Marseille.",
            sizes: ["S","M","L","XL"]
        },          
    ],
    premierLeague: [
        {
            id: uuidv4(),
            anchor: "arsenal",
            name: "Arsenal",
            price: 90,
            recto: '/maillots_hommes/arsenal.png',
            verso: '/maillots_hommes/arsenal-verso.png',
            description: "Maillot officiel pour homme de l'équipe d'Arsenal.",
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            anchor: "manchester-city",
            name: "Manchester City",
            price: 90,
            recto: '/maillots_hommes/manchester-city.png',
            verso: '/maillots_hommes/manchester-city-verso.png',
            description: "Maillot officiel pour homme de l'équipe de Manchester City.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            anchor: "manchester-united",
            name: "Manchester United",
            price: 90,
            recto: '/maillots_hommes/manchester-united.png',
            verso: '/maillots_hommes/manchester-united-verso.png',
            description: "Maillot officiel pour homme de l'équipe de Manchester United.",
            sizes: ["S","M","L","XL"]
        },  
    ],
    serieA: [
        {
            id: uuidv4(),
            anchor: "inter",
            name: "Inter de Milan",
            price: 90,
            recto: '/maillots_hommes/inter-milan.png',
            verso: '/maillots_hommes/inter-milan-verso.png',
            description: "Maillot officiel pour homme de l'équipe de l'Inter de Milan.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "juventus",
            name: "Juventus",
            price: 90,
            recto: '/maillots_hommes/juventus.png',
            verso: '/maillots_hommes/juventus-verso.png',
            description: "Maillot officiel pour homme de l'équipe de la Juventus de Turin.",
            sizes: ["S","M","L","XL"]
        },   
    ],
    liga: [
        {
            id: uuidv4(),
            anchor: "real",
            name: "Real Madrid",
            price: 90,
            recto: '/maillots_hommes/madrid.png',
            verso: '/maillots_hommes/madrid-verso.png',
            description: "Maillot officiel pour homme de l'équipe du Real de Madrid.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "barcelone",
            name: "FC Barcelone",
            price: 90,
            recto: '/maillots_hommes/barcelone.png',
            verso: '/maillots_hommes/barcelone-verso.png',
            description: "Maillot officiel pour homme de l'équipe du FC de Barcelone.",
            sizes: ["S","M","L","XL"]
        },   
    ],
    bundesliga: [
        {
            id: uuidv4(),
            anchor: "bayern",
            name: "Bayern de Munich",
            price: 90,
            recto: '/maillots_hommes/bayern.png',
            verso: '/maillots_hommes/bayern-verso.png',
            description: "Maillot officiel pour homme de l'équipe du Bayern de Munich.",
            sizes: ["S","M","L","XL"]
        },
    ],   
    others: [
        {
            id: uuidv4(),
            anchor: "amsterdam",
            name: "Ajax Amsterdam",
            price: 90,
            recto: '/maillots_hommes/ajax.png',
            verso: '/maillots_hommes/ajax-verso.png',
            description: "Maillot officiel pour homme de l'équipe de l'Ajax d'Amsterdam.",
            sizes: ["S","M","L","XL"]
        },
    ],
    europe: [
        {
            id: uuidv4(),
            anchor: "espagne",
            name: "Espagne",
            price: 90,
            recto: '/maillots_hommes/espagne.png',
            verso: '/maillots_hommes/espagne-verso.png',
            description: "Maillot officiel pour homme de l'équipe national d'Espagne.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "france",
            name: "France (Domicile)",
            price: 90,
            recto: '/maillots_hommes/france.png',
            verso: '/maillots_hommes/france-verso.png',
            description: "Maillot officiel pour homme de l'équipe national de France.",
            sizes: ["S","M","L","XL"]
            },
        {
            id: uuidv4(),
            anchor: "france-exterieur",
            name: "France (Extérieur)",
            price: 90,
            recto: '/maillots_hommes/france-exterieur.png',
            verso: '/maillots_hommes/france-exterieur-verso.png',
            description: "Maillot officiel pour homme de l'équipe national de France.",
            sizes: ["S","M","L","XL"]
        },
    ],
    afrique: [
        {
            id: uuidv4(),
            anchor: "cameroun",
            name: "Cameroun",
            price: 90,
            recto: '/maillots_hommes/cameroun.png',
            verso: '/maillots_hommes/cameroun-verso.png',
            description: "Maillot officiel pour homme de l'équipe national du Cameroun.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "ivoire",
            name: "Côte d'Ivoire",
            price: 90,
            recto: '/maillots_hommes/cote-ivoire.png',
            verso: '/maillots_hommes/cote-ivoire-verso.png',
            description: "Maillot officiel pour homme de l'équipe national de la Côte d'Ivoire.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "senegal",
            name: "Sénégal",
            price: 90,
            recto: '/maillots_hommes/senegal.png',
            verso: '/maillots_hommes/senegal-verso.png',
            description: "Maillot officiel pour homme de l'équipe national du Sénégal.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "algerie",
            name: "Algérie",
            price: 90,
            recto: '/maillots_hommes/algerie.png',
            verso: '/maillots_hommes/algerie-verso.png',
            description: "Maillot officiel pour homme de l'équipe national de l'Algérie.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            anchor: "maroc",
            name: "Maroc",
            price: 90,
            recto: '/maillots_hommes/maroc.png',
            verso: '/maillots_hommes/maroc-verso.png',
            description: "Maillot officiel pour homme de l'équipe national du Maroc.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "tunisie",
            name: "Tunisie",
            price: 90,
            recto: '/maillots_hommes/tunisie.png',
            verso: '/maillots_hommes/tunisie-verso.png',
            description: "Maillot officiel pour homme de l'équipe national de la Tunisie.",
            sizes: ["S","M","L","XL"]
        },
    ],
}

export const dataFemmes = {
    ligue1: 
    [
        {
            id: uuidv4(),
            anchor: "lyon",
            name: "Olympique de Lyon (Femme)",
            price: 90,
            recto: '/maillots_hommes/lyon.png',
            verso: '/maillots_hommes/lyon-verso.png',
            description: "Maillot officiel pour femme de l'équipe de l'Olympique de Lyon.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            anchor: "paris",
            name: "Paris Saint-Germain (Femme)",
            price: 90,
            recto: '/maillots_hommes/psg.png',
            verso: '/maillots_hommes/psg-verso.png',
            description: "Maillot officiel pour femme de l'équipe du Paris-Saint-Germain.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "marseille",
            name: "Olympique de Marseille (Femme)",
            price: 90,
            recto: '/maillots_hommes/marseille.png',
            verso : '/maillots_hommes/marseille-verso.png',
            description: "Maillot officiel pour femme de l'équipe de l'Olympique de Marseille.",
            sizes: ["S","M","L","XL"]
        },          
    ],
    premierLeague: [
        {
            id: uuidv4(),
            anchor: "arsenal",
            name: "Arsenal (Femme)",
            price: 90,
            recto: '/maillots_hommes/arsenal.png',
            verso: '/maillots_hommes/arsenal-verso.png',
            description: "Maillot officiel pour femme de l'équipe d'Arsenal.",
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            anchor: "manchester-city",
            name: "Manchester City (Femme)",
            price: 90,
            recto: '/maillots_hommes/manchester-city.png',
            verso: '/maillots_hommes/manchester-city-verso.png',
            description: "Maillot officiel pour femme de l'équipe de Manchester City.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            anchor: "manchester-united",
            name: "Manchester United (Femme)",
            price: 90,
            recto: '/maillots_hommes/manchester-united.png',
            verso: '/maillots_hommes/manchester-united-verso.png',
            description: "Maillot officiel pour femme de l'équipe de Manchester United.",
            sizes: ["S","M","L","XL"]
        },  
    ],
    serieA: [
        {
            id: uuidv4(),
            anchor: "inter",
            name: "Inter de Milan (Femme)",
            price: 90,
            recto: '/maillots_hommes/inter-milan.png',
            verso: '/maillots_hommes/inter-milan-verso.png',
            description: "Maillot officiel pour femme de l'équipe de l'Inter de Milan.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "juventus",
            name: "Juventus (Femme) ",
            price: 90,
            recto: '/maillots_hommes/juventus.png',
            verso: '/maillots_hommes/juventus-verso.png',
            description: "Maillot officiel pour femme de l'équipe de la Juventus de Turin.",
            sizes: ["S","M","L","XL"]
        },   
    ],
    liga: [
        {
            id: uuidv4(),
            anchor: "real",
            name: "Real Madrid (Femme)",
            price: 90,
            recto: '/maillots_hommes/madrid.png',
            verso: '/maillots_hommes/madrid-verso.png',
            description: "Maillot officiel pour femme de l'équipe du Real de Madrid.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "barcelone",
            name: "FC Barcelone (Femme)",
            price: 90,
            recto: '/maillots_hommes/barcelone.png',
            verso: '/maillots_hommes/barcelone-verso.png',
            description: "Maillot officiel pour femme de l'équipe du FC de Barcelone.",
            sizes: ["S","M","L","XL"]
        },   
    ],
    bundesliga: [
        {
            id: uuidv4(),
            anchor: "bayern",
            name: "Bayern de Munich (Femme)",
            price: 90,
            recto: '/maillots_hommes/bayern.png',
            verso: '/maillots_hommes/bayern-verso.png',
            description: "Maillot officiel pour femme de l'équipe du Bayern de Munich.",
            sizes: ["S","M","L","XL"]
        },
    ],   
    others: [
        {
            id: uuidv4(),
            anchor: "amsterdam",
            name: "Ajax Amsterdam (Femme)",
            price: 90,
            recto: '/maillots_hommes/ajax.png',
            verso: '/maillots_hommes/ajax-verso.png',
            description: "Maillot officiel pour femme de l'équipe de l'Ajax d'Amsterdam.",
            sizes: ["S","M","L","XL"]
        },
    ],
    europe: [
        {
            id: uuidv4(),
            anchor: "espagne",
            name: "Espagne (Femme)",
            price: 90,
            recto: '/maillots_hommes/espagne.png',
            verso: '/maillots_hommes/espagne-verso.png',
            description: "Maillot officiel pour femme de l'équipe national d'Espagne.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "france",
            name: "France (Domicile)(Femme)",
            price: 90,
            recto: '/maillots_hommes/france.png',
            verso: '/maillots_hommes/france-verso.png',
            description: "Maillot officiel pour femme de l'équipe national de France.",
            sizes: ["S","M","L","XL"]
            },
        {
            id: uuidv4(),
            anchor: "france-exterieur",
            name: "France (Extérieur)(Femme) ",
            price: 90,
            recto: '/maillots_hommes/france-exterieur.png',
            verso: '/maillots_hommes/france-exterieur-verso.png',
            description: "Maillot officiel pour femme de l'équipe national de France.",
            sizes: ["S","M","L","XL"]
        },
    ],
    afrique: [
        {
            id: uuidv4(),
            anchor: "cameroun",
            name: "Cameroun (Femme)",
            price: 90,
            recto: '/maillots_hommes/cameroun.png',
            verso: '/maillots_hommes/cameroun-verso.png',
            description: "Maillot officiel pour femme de l'équipe national du Cameroun.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "ivoire",
            name: "Côte d'Ivoire (Femme)",
            price: 90,
            recto: '/maillots_hommes/cote-ivoire.png',
            verso: '/maillots_hommes/cote-ivoire-verso.png',
            description: "Maillot officiel pour femme de l'équipe national de la Côte d'Ivoire.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "senegal",
            name: "Sénégal (Femme)",
            price: 90,
            recto: '/maillots_hommes/senegal.png',
            verso: '/maillots_hommes/senegal-verso.png',
            description: "Maillot officiel pour femme de l'équipe national du Sénégal.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "algerie",
            name: "Algérie (Femme) ",
            price: 90,
            recto: '/maillots_hommes/algerie.png',
            verso: '/maillots_hommes/algerie-verso.png',
            description: "Maillot officiel pour femme de l'équipe national de l'Algérie.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            anchor: "maroc",
            name: "Maroc (Femme)",
            price: 90,
            recto: '/maillots_hommes/maroc.png',
            verso: '/maillots_hommes/maroc-verso.png',
            description: "Maillot officiel pour femme de l'équipe national du Maroc.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "tunisie",
            name: "Tunisie (Femme)",
            price: 90,
            recto: '/maillots_hommes/tunisie.png',
            verso: '/maillots_hommes/tunisie-verso.png',
            description: "Maillot officiel pour femme de l'équipe national de la Tunisie.",
            sizes: ["S","M","L","XL"]
        },
    ],
}
    export const dataJuniors = {
        ligue1: 
        [
            {
                id: uuidv4(),
                anchor: "lyon",
                name: "Olympique de Lyon (Junior)",
                price: 90,
                recto: '/maillots_hommes/lyon.png',
                verso: '/maillots_hommes/lyon-verso.png',
                description: "Maillot officiel pour junior de l'équipe de l'Olympique de Lyon.",
                sizes: ["S","M","L","XL"]
            },  
            {
                id: uuidv4(),
                anchor: "paris",
                name: "Paris Saint-Germain (Junior)",
                price: 90,
                recto: '/maillots_hommes/psg.png',
                verso: '/maillots_hommes/psg-verso.png',
                description: "Maillot officiel pour junior de l'équipe du Paris-Saint-Germain.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "marseille",
                name: "Olympique de Marseille (Junior)",
                price: 90,
                recto: '/maillots_hommes/marseille.png',
                verso : '/maillots_hommes/marseille-verso.png',
                description: "Maillot officiel pour junior de l'équipe de l'Olympique de Marseille.",
                sizes: ["S","M","L","XL"]
            },          
        ],
        premierLeague: [
            {
                id: uuidv4(),
                anchor: "arsenal",
                name: "Arsenal (Junior)",
                price: 90,
                recto: '/maillots_hommes/arsenal.png',
                verso: '/maillots_hommes/arsenal-verso.png',
                description: "Maillot officiel pour junior de l'équipe d'Arsenal.",
                sizes: ["S","M","L","XL"]
            },   
            {
                id: uuidv4(),
                anchor: "manchester-city",
                name: "Manchester City (Junior)",
                price: 90,
                recto: '/maillots_hommes/manchester-city.png',
                verso: '/maillots_hommes/manchester-city-verso.png',
                description: "Maillot officiel pour junior de l'équipe de Manchester City.",
                sizes: ["S","M","L","XL"]
            }, 
            {
                id: uuidv4(),
                anchor: "manchester-united",
                name: "Manchester United (Junior)",
                price: 90,
                recto: '/maillots_hommes/manchester-united.png',
                verso: '/maillots_hommes/manchester-united-verso.png',
                description: "Maillot officiel pour junior de l'équipe de Manchester United.",
                sizes: ["S","M","L","XL"]
            },  
        ],
        serieA: [
            {
                id: uuidv4(),
                anchor: "inter",
                name: "Inter de Milan (Junior)",
                price: 90,
                recto: '/maillots_hommes/inter-milan.png',
                verso: '/maillots_hommes/inter-milan-verso.png',
                description: "Maillot officiel pour junior de l'équipe de l'Inter de Milan.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "juventus",
                name: "Juventus (Junior)",
                price: 90,
                recto: '/maillots_hommes/juventus.png',
                verso: '/maillots_hommes/juventus-verso.png',
                description: "Maillot officiel pour junior de l'équipe de la Juventus de Turin.",
                sizes: ["S","M","L","XL"]
            },   
        ],
        liga: [
            {
                id: uuidv4(),
                anchor: "real",
                name: "Real Madrid (Junior)",
                price: 90,
                recto: '/maillots_hommes/madrid.png',
                verso: '/maillots_hommes/madrid-verso.png',
                description: "Maillot officiel pour junior de l'équipe du Real de Madrid.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "barcelone",
                name: "FC Barcelone (Junior)",
                price: 90,
                recto: '/maillots_hommes/barcelone.png',
                verso: '/maillots_hommes/barcelone-verso.png',
                description: "Maillot officiel pour junior de l'équipe du FC de Barcelone.",
                sizes: ["S","M","L","XL"]
            },   
        ],
        bundesliga: [
            {
                id: uuidv4(),
                anchor: "bayern",
                name: "Bayern de Munich (Junior)",
                price: 90,
                recto: '/maillots_hommes/bayern.png',
                verso: '/maillots_hommes/bayern-verso.png',
                description: "Maillot officiel pour junior de l'équipe du Bayern de Munich.",
                sizes: ["S","M","L","XL"]
            },
        ],   
        others: [
            {
                id: uuidv4(),
                anchor: "amsterdam",
                name: "Ajax Amsterdam (Junior)",
                price: 90,
                recto: '/maillots_hommes/ajax.png',
                verso: '/maillots_hommes/ajax-verso.png',
                description: "Maillot officiel pour junior de l'équipe de l'Ajax d'Amsterdam.",
                sizes: ["S","M","L","XL"]
            },
        ],
        europe: [
            {
                id: uuidv4(),
                anchor: "espagne",
                name: "Espagne (Junior)",
                price: 90,
                recto: '/maillots_hommes/espagne.png',
                verso: '/maillots_hommes/espagne-verso.png',
                description: "Maillot officiel pour junior de l'équipe national d'Espagne.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "france",
                name: "France (Domicile)(Junior)",
                price: 90,
                recto: '/maillots_hommes/france.png',
                verso: '/maillots_hommes/france-verso.png',
                description: "Maillot officiel pour junior de l'équipe national de France.",
                sizes: ["S","M","L","XL"]
                },
            {
                id: uuidv4(),
                anchor: "france-exterieur",
                name: "France (Extérieur)(Junior) ",
                price: 90,
                recto: '/maillots_hommes/france-exterieur.png',
                verso: '/maillots_hommes/france-exterieur-verso.png',
                description: "Maillot officiel pour junior de l'équipe national de France.",
                sizes: ["S","M","L","XL"]
            },
        ],
        afrique: [
            {
                id: uuidv4(),
                anchor: "cameroun",
                name: "Cameroun (Junior)",
                price: 90,
                recto: '/maillots_hommes/cameroun.png',
                verso: '/maillots_hommes/cameroun-verso.png',
                description: "Maillot officiel pour junior de l'équipe national du Cameroun.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "ivoire",
                name: "Côte d'Ivoire (Junior)",
                price: 90,
                recto: '/maillots_hommes/cote-ivoire.png',
                verso: '/maillots_hommes/cote-ivoire-verso.png',
                description: "Maillot officiel pour junior de l'équipe national de la Côte d'Ivoire.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "senegal",
                name: "Sénégal (Junior)",
                price: 90,
                recto: '/maillots_hommes/senegal.png',
                verso: '/maillots_hommes/senegal-verso.png',
                description: "Maillot officiel pour junior de l'équipe national du Sénégal.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "algerie",
                name: "Algérie (Junior)",
                price: 90,
                recto: '/maillots_hommes/algerie.png',
                verso: '/maillots_hommes/algerie-verso.png',
                description: "Maillot officiel pour junior de l'équipe national de l'Algérie.",
                sizes: ["S","M","L","XL"]
            }, 
            {
                id: uuidv4(),
                anchor: "maroc",
                name: "Maroc (Junior)",
                price: 90,
                recto: '/maillots_hommes/maroc.png',
                verso: '/maillots_hommes/maroc-verso.png',
                description: "Maillot officiel pour junior de l'équipe national du Maroc.",
                sizes: ["S","M","L","XL"]
            },
            {
                id: uuidv4(),
                anchor: "tunisie",
                name: "Tunisie (Junior)",
                price: 90,
                recto: '/maillots_hommes/tunisie.png',
                verso: '/maillots_hommes/tunisie-verso.png',
                description: "Maillot officiel pour junior de l'équipe national de la Tunisie.",
                sizes: ["S","M","L","XL"]
            },
        ],
}
