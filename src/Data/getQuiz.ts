import { Quiz } from "./quiz.types";
const quizOne: Quiz = {
  id: 1,
  quizName: "Marvel Cinematic Universe",
  description:
    "Now is your chance to prove to us that you are a true Marvel Cinematic Universe fan by taking this quiz",
  image: "https://parade.com/wp-content/uploads/2020/03/avengers-marvel.jpg",
  questions: [
    {
      question:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 1,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "5",
          isRight: false
        },
        {
          text: "6",
          isRight: true
        },
        {
          text: "7",
          isRight: false
        },
        {
          text: "8",
          isRight: false
        }
      ]
    },
    {
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 2,
      answer: null,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true
        },
        {
          text: "getting drunk in a bar",
          isRight: false
        },
        {
          text: "having a car accident",
          isRight: false
        }
      ]
    },
    {
      question: "How many Infinity Stones are there?",
      points: 3,
      answer: null,
      options: [
        {
          text: "7",
          isRight: false
        },
        {
          text: "5",
          isRight: false
        },
        {
          text: "6",
          isRight: true
        },
        {
          text: "8",
          isRight: false
        }
      ]
    },
    {
      question: "What is Captain America’s shield and Bucky's arm made of?",
      points: 4,
      answer: null,
      options: [
        {
          text: "Adamantium",
          isRight: false
        },
        {
          text: "Promethium",
          isRight: false
        },
        {
          text: "Carbonadium",
          isRight: false
        },
        {
          text: "Vibranium",
          isRight: true
        }
      ]
    },
    {
      question: "What type of doctor is Stephen Strange?",
      points: 5,
      answer: null,
      options: [
        {
          text: "Neurosurgeon",
          isRight: true
        },
        {
          text: "Cardiothoracic Surgeon",
          isRight: false
        },
        {
          text: "Trauma Surgeon",
          isRight: false
        },
        {
          text: "Plastic Surgeon",
          isRight: false
        }
      ]
    }
  ]
};

const quizTwo: Quiz = {
  id: 2,
  quizName: "Indian Premier League",
  description:
    "How closely do you follow Indian Premier League? Take our quiz and find out what you know about IPL.",
  image:
    "https://resources.platform.iplt20.com/photo-resources/2020/08/20/8ab72598-0ed5-411d-9b91-7fc371ae2812/IPL_v1.jpg?width=1900&height=1190",
  questions: [
    {
      question: "Which player holds the record for the fastest fifty in IPL?",
      points: 1,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "K.L. Rahul",
          isRight: true
        },
        {
          text: "Nicholas Pooran",
          isRight: false
        },
        {
          text: "Chris Gayle",
          isRight: false
        },
        {
          text: "Yuvraj Singh",
          isRight: false
        }
      ]
    },
    {
      question: "Who was the captain of the Mumbai Indians in IPL 2012?",
      points: 2,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "Rohit Sharma",
          isRight: false
        },
        {
          text: "Harbhajan Singh",
          isRight: true
        },
        {
          text: "Sachin Tendulkar",
          isRight: false
        },
        {
          text: "Ambati Rayudu",
          isRight: false
        }
      ]
    },
    {
      question:
        "Which Indian player has scored the fastest hundred in the IPL?",
      points: 3,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "Virender Sehwag",
          isRight: false
        },
        {
          text: "Chris Gayle",
          isRight: false
        },
        {
          text: "Yusuf Pathan",
          isRight: true
        },
        {
          text: "Virat Kohli",
          isRight: false
        }
      ]
    },
    {
      question:
        "Which pacer has bowled the highest number of dot balls in the IPL?",
      points: 4,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "Jasprit Bumrah",
          isRight: false
        },
        {
          text: "Lasith Malinga",
          isRight: false
        },
        {
          text: "Bhuvneshwar Kumar",
          isRight: true
        },
        {
          text: "Umesh Yadav",
          isRight: false
        }
      ]
    },
    {
      question: "Who has the highest all-time strike rate in the IPL?",
      points: 5,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "Chris Gayle",
          isRight: false
        },
        {
          text: "Virender Sehwag",
          isRight: false
        },
        {
          text: "Kieran Pollard",
          isRight: false
        },
        {
          text: "Andre Russell",
          isRight: true
        }
      ]
    }
  ]
};

export { quizOne };
export { quizTwo };
