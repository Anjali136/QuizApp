const{v4:uuid}=require("uuid");
const quizzes={
    "data":[
        {
            id:uuid(),
            category:"marvel",
            image: "https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg",
            Title:"Marvel",
            description:"American superhero television shows based on characters that appear in publications by Marvel Comics",
            quiz:[
                {
                    id:uuid(),
                    question:"Black Panther is set in which fictional country?",
                    options:[
                        {id:uuid(),Option:"Wakanda",isCorrect:true},
                        {id:uuid(),Option:"Takanda",isCorrect:false},
                        {id:uuid(),Option:"Makanda",isCorrect:false},
                        {id:uuid(),Option:"Zakanda",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Who rescued Tony Stark and Nebula from space?",
                    options:[
                        {id:uuid(),Option:"Hulk",isCorrect:false},
                        {id:uuid(),Option:"Thor",isCorrect:false},
                        {id:uuid(),Option:"Captain America",isCorrect:false},
                        {id:uuid(),Option:"Captain Marvel",isCorrect:true},
                    ]
                },
                {
                    id:uuid(),
                    question:" In which movie did the character Black Widow make her first appearance in the MCU?",
                    options:[
                        {id:uuid(),Option:" Iron Man",isCorrect:false},
                        {id:uuid(),Option:"Captain America: The First Avenger",isCorrect:false},
                        {id:uuid(),Option:"Thor",isCorrect:false},
                        {id:uuid(),Option:"The Avengers",isCorrect:true},
                    ]
                },
                {
                    id:uuid(),
                    question:" What is the real name of the Norse God of Mischief, commonly known as Loki?",
                    options:[
                        {id:uuid(),Option:"Laufeyson",isCorrect:true},
                        {id:uuid(),Option:"Odinson",isCorrect:false},
                        {id:uuid(),Option:"Friggson",isCorrect:false},
                        {id:uuid(),Option:"Thorsdottir",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:" Which Infinity Stone is embedded in Vision's forehead, giving him his powers?",
                    options:[
                        {id:uuid(),Option:"Time Stone",isCorrect:false},
                        {id:uuid(),Option:" Power Stone",isCorrect:false},
                        {id:uuid(),Option:" Mind Stone",isCorrect:true},
                        {id:uuid(),Option:"Reality Stone",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the name of Tony Stark's personal artificial intelligence system in the Iron Man suits?",
                    options:[
                        {id:uuid(),Option:"J.A.R.V.I.S.",isCorrect:true},
                        {id:uuid(),Option:"H.A.L.",isCorrect:false},
                        {id:uuid(),Option:"S.H.I.E.L.D.",isCorrect:false},
                        {id:uuid(),Option:"F.R.I.D.A.Y.",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Which actor plays the role of Captain America in the MCU?",
                    options:[
                        {id:uuid(),Option:"Chris Pratt",isCorrect:false},
                        {id:uuid(),Option:"Chris Evans",isCorrect:true},
                        {id:uuid(),Option:"Chris Hemsworth",isCorrect:false},
                        {id:uuid(),Option:"Chris pine",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:" What is the name of the African nation ruled by T'Challa, also known as the Black Panther?",
                    options:[
                        {id:uuid(),Option:"Zamunda",isCorrect:false},
                        {id:uuid(),Option:"Wakanda",isCorrect:true},
                        {id:uuid(),Option:"Genovia",isCorrect:false},
                        {id:uuid(),Option:"Sokovia",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Who rescued Tony Stark and Nebula from space?",
                    options:[
                        {id:uuid(),Option:"Hulk",isCorrect:false},
                        {id:uuid(),Option:"Thor",isCorrect:false},
                        {id:uuid(),Option:"Captain America",isCorrect:false},
                        {id:uuid(),Option:"Captain Marvel",isCorrect:true},
                    ]
                },
                {
                    id:uuid(),
                    question:"In Guardians of the Galaxy, what is the name of the criminal organization led by the main antagonist, Ronan the Accuser?",
                    options:[
                        {id:uuid(),Option:"The Ravagers",isCorrect:false},
                        {id:uuid(),Option:" The Nova Corps",isCorrect:false},
                        {id:uuid(),Option:"The Kree Empire",isCorrect:true},
                        {id:uuid(),Option:"The Black Order",isCorrect:false},
                    ]
                }
            ]
        },
        {
            id:uuid(),
            category:"Cartoons",
            image:"https://wallpapers.com/images/hd/cartoon-pictures-q3hxkk0gmw6vnivj.jpg",
            Title:"Cartoons",
            description:"A cartoon is a type of visual art that is typically drawn, frequently animated, in an unrealistic or semi-realistic style.",
            quiz:[
                {
                    id:uuid(),
                    question:"Which is one of the most famous catoon?",
                    options:[
                        {id:uuid(),Option:"Tom & Jerry",isCorrect:true},
                        {id:uuid(),Option:"Bablu Dablu",isCorrect:false},
                        {id:uuid(),Option:"Happy Luckey",isCorrect:false},
                        {id:uuid(),Option:"Dora",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"In motu Patlu which chracter likes samosa very much?",
                    options:[
                        {id:uuid(),Option:"Patlu",isCorrect:false},
                        {id:uuid(),Option:"Motu",isCorrect:true},
                        {id:uuid(),Option:"Boxer",isCorrect:false},
                        {id:uuid(),Option:"John",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the name of the adventurous dog in the animated series Adventure Time?",
                    options:[
                        {id:uuid(),Option:"Jake",isCorrect:true},
                        {id:uuid(),Option:"Finn",isCorrect:false},
                        {id:uuid(),Option:"Ice King",isCorrect:false},
                        {id:uuid(),Option:" Princess Bubblegum",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"In the cartoon SpongeBob SquarePants, who is SpongeBob's best friend and coworker at the Krusty Krab?uch?",
                    options:[
                        {id:uuid(),Option:"Patrick Star",isCorrect:true},
                        {id:uuid(),Option:" Squidward Tentacles",isCorrect:false},
                        {id:uuid(),Option:" Sandy Cheeks",isCorrect:false},
                        {id:uuid(),Option:"Mr. Krabs",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Which cartoon character is known for saying, What's up, Doc?",
                    options:[
                        {id:uuid(),Option:" Mickey Mouse",isCorrect:false},
                        {id:uuid(),Option:"Bugs Bunny",isCorrect:true},
                        {id:uuid(),Option:"SpongeBob SquarePants",isCorrect:false},
                        {id:uuid(),Option:"Scooby-Doo",isCorrect:false},
                    ]
                }
            ]
        },
        {
            id:uuid(),
            category:"novels",
            image:"https://th-thumbnailer.cdn-si-edu.com/Z1IdB5_H4P7jnQ6G4ex9lEeoLuU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/c2/19/c219ea2f-a154-46c0-93c0-dbb05d2cd6d9/8314929977_4d7e817d68_h.jpg",
            Title:"Novel",
            description:"A novel is a piece of long narrative in literary prose. Narrative prose is meant to entertain and tell a story",
            quiz:[
                {
                    id:uuid(),
                    question:"Which is one of the most famous novel of Rabindranath Tagore?",
                    options:[
                        {id:uuid(),Option:"Kedarnath",isCorrect:false},
                        {id:uuid(),Option:"Pushpanjali",isCorrect:false},
                        {id:uuid(),Option:"Gitanjali",isCorrect:true},
                        {id:uuid(),Option:"Ramayan",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Munshi premchand is also known as?",
                    options:[
                        {id:uuid(),Option:"Rajesh",isCorrect:false},
                        {id:uuid(),Option:"Prem",isCorrect:false},
                        {id:uuid(),Option:"Gurudev",isCorrect:false},
                        {id:uuid(),Option:"Nawab",isCorrect:true},
                    ]
                },
                {
                    id:uuid(),
                    question:"In which novel does a young orphan discover he's a wizard and attends Hogwarts School of Witchcraft and Wizardry?",
                    options:[
                        {id:uuid(),Option:"The Hobbit",isCorrect:false},
                        {id:uuid(),Option:"The Chronicles of Narnia",isCorrect:false},
                        {id:uuid(),Option:"Harry Potter and the Philosopher's Stone",isCorrect:true},
                        {id:uuid(),Option:"Eragon",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:" In which classic novel is the protagonist, along with his loyal friend Jim, on a quest to find a buried treasure marked by a pirate's map?",
                    options:[
                        {id:uuid(),Option:"Moby-Dick",isCorrect:false},
                        {id:uuid(),Option:"Treasure Island",isCorrect:true},
                        {id:uuid(),Option:"The Adventures of Huckleberry Finn",isCorrect:false},
                        {id:uuid(),Option:" The Count of Monte Cristo",isCorrect:false
                    },
                    ]
                },
                {
                    id:uuid(),
                    question:"Question: Who is the eccentric character known for his love of riddles and puzzles in a popular fantasy novel series, helping the protagonist on their quest to destroy the One Ring?",
                    options:[
                        {id:uuid(),Option:"Albus Dumbledore",isCorrect:false},
                        {id:uuid(),Option:"Gollum",isCorrect:false},
                        {id:uuid(),Option:"Hagrid",isCorrect:false},
                        {id:uuid(),Option:"Tom Bombadil",isCorrect:true},
                    ]
                }
            ]
        },
        {
            id:uuid(),
            category:"sports",
            image:"https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg",
            Title:"Sports",
            description:" A game, or activity needing physical effort that is played or done according to rules, for enjoyment and/or as a job.",
            quiz:[
                {
                    id:uuid(),
                    question:"Who is one of the most famous criketor of india?",
                    options:[
                        {id:uuid(),Option:"Vishwanathan Aanad",isCorrect:false},
                        {id:uuid(),Option:" Sachin Tendulkar",isCorrect:true},
                        {id:uuid(),Option:"PV Sindhu",isCorrect:false},
                        {id:uuid(),Option:"P.T Usha",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Which is National Game of India?",
                    options:[
                        {id:uuid(),Option:"Cricket",isCorrect:false},
                        {id:uuid(),Option:"Chess",isCorrect:false},
                        {id:uuid(),Option:"Hockey",isCorrect:true},
                        {id:uuid(),Option:"Gilli Danta",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:" In which year did Serena Williams win her first Grand Slam singles title?",
                    options:[
                        {id:uuid(),Option:"1990",isCorrect:false},
                        {id:uuid(),Option:"2000",isCorrect:false},
                        {id:uuid(),Option:"1999",isCorrect:true},
                        {id:uuid(),Option:"1998",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
                    options:[
                        {id:uuid(),Option:"Lionel Messi",isCorrect:false},
                        {id:uuid(),Option:"Cristiano Ronaldo",isCorrect:false},
                        {id:uuid(),Option:"pele",isCorrect:true},
                        {id:uuid(),Option:"Diego Maradona",isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"Which country hosted the Summer Olympics in 2016?",
                    options:[
                        {id:uuid(),Option:"Brazil",isCorrect:true},
                        {id:uuid(),Option:"China",isCorrect:false},
                        {id:uuid(),Option:"United States",isCorrect:false},
                        {id:uuid(),Option:"Russia",isCorrect:false},
                    ]
                },
            ]
        },
    ]
}
module.exports=quizzes;