export const quizData = {
    categories: [
        { id: 'web-dev', name: 'Web Development', icon: 'Code2' },
        { id: 'math', name: 'Mathematics', icon: 'Calculator' },
        { id: 'gk', name: 'General Knowledge', icon: 'Globe2' }
    ],
    difficulties: [
        { id: 'easy', name: 'Easy', color: '#22c55e' },
        { id: 'medium', name: 'Medium', color: '#eab308' },
        { id: 'hard', name: 'Hard', color: '#ef4444' }
    ],
    questions: {
        'web-dev': {
            easy: [
                {
                    id: 1,
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
                    answer: "Hyper Text Markup Language"
                },
                {
                    id: 2,
                    question: "Which property is used to change the background color in CSS?",
                    options: ["color", "bg-color", "background-color", "bgcolor"],
                    answer: "background-color"
                },
                {
                    id: 3,
                    question: "What is the correct HTML element for the largest heading?",
                    options: ["<heading>", "<h6>", "<head>", "<h1>"],
                    answer: "<h1>"
                },
                {
                    id: 4,
                    question: "Which character is used to indicate an end tag?",
                    options: ["/", "<", "*", "^"],
                    answer: "/"
                },
                {
                    id: 5,
                    question: "How do you create a function in JavaScript?",
                    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create myFunction()"],
                    answer: "function myFunction()"
                }
            ],
            medium: [
                {
                    id: 6,
                    question: "Which of the following is NOT a JavaScript framework/library?",
                    options: ["React", "Vue", "Django", "Angular"],
                    answer: "Django"
                },
                {
                    id: 7,
                    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                    options: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>", "<script file='xxx.js'>"],
                    answer: "<script src='xxx.js'>"
                },
                {
                    id: 8,
                    question: "How do you write 'Hello World' in an alert box?",
                    options: ["msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')", "msgBox('Hello World')"],
                    answer: "alert('Hello World')"
                },
                {
                    id: 9,
                    question: "How do you call a function named 'myFunction'?",
                    options: ["call myFunction()", "myFunction()", "call function myFunction()", "window.myFunction()"],
                    answer: "myFunction()"
                },
                {
                    id: 10,
                    question: "How to write an IF statement in JavaScript?",
                    options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"],
                    answer: "if (i == 5)"
                }
            ],
            hard: [
                {
                    id: 11,
                    question: "What is the result of '2' + 2 in JavaScript?",
                    options: ["4", "22", "undefined", "NaN"],
                    answer: "22"
                },
                {
                    id: 12,
                    question: "How do you round the number 7.25, to the nearest integer?",
                    options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "round(7.25)"],
                    answer: "Math.round(7.25)"
                },
                {
                    id: 13,
                    question: "Which operator is used to assign a value to a variable?",
                    options: ["*", "=", "x", "-"],
                    answer: "="
                },
                {
                    id: 14,
                    question: "What will the following code return: Boolean(10 > 9)?",
                    options: ["false", "true", "NaN", "undefined"],
                    answer: "true"
                },
                {
                    id: 15,
                    question: "Is JavaScript case-sensitive?",
                    options: ["No", "Yes", "Depends on the browser", "Only for variables"],
                    answer: "Yes"
                }
            ]
        },
        'math': {
            easy: [
                {
                    id: 16,
                    question: "What is 5 + 7?",
                    options: ["10", "11", "12", "13"],
                    answer: "12"
                },
                {
                    id: 17,
                    question: "What is 10 - 4?",
                    options: ["5", "6", "7", "8"],
                    answer: "6"
                },
                {
                    id: 18,
                    question: "What is 3 x 4?",
                    options: ["10", "11", "12", "14"],
                    answer: "12"
                },
                {
                    id: 19,
                    question: "What is 20 / 5?",
                    options: ["3", "4", "5", "6"],
                    answer: "4"
                },
                {
                    id: 20,
                    question: "What is 15 + 15?",
                    options: ["20", "25", "30", "35"],
                    answer: "30"
                }
            ],
            medium: [
                {
                    id: 21,
                    question: "What is the square root of 144?",
                    options: ["10", "12", "14", "16"],
                    answer: "12"
                },
                {
                    id: 22,
                    question: "What is 12 x 12?",
                    options: ["124", "144", "164", "184"],
                    answer: "144"
                },
                {
                    id: 23,
                    question: "What is 15% of 200?",
                    options: ["20", "25", "30", "35"],
                    answer: "30"
                },
                {
                    id: 24,
                    question: "Solve for x: 2x + 5 = 15",
                    options: ["x = 5", "x = 10", "x = 7.5", "x = 2"],
                    answer: "x = 5"
                },
                {
                    id: 25,
                    question: "How many sides does a hexagon have?",
                    options: ["5", "6", "7", "8"],
                    answer: "6"
                }
            ],
            hard: [
                {
                    id: 26,
                    question: "What is the value of Pi to 2 decimal places?",
                    options: ["3.12", "3.14", "3.16", "3.18"],
                    answer: "3.14"
                },
                {
                    id: 27,
                    question: "What is 2 to the power of 10?",
                    options: ["512", "1024", "2048", "4096"],
                    answer: "1024"
                },
                {
                    id: 28,
                    question: "What is the derivative of x^2?",
                    options: ["x", "2x", "x^3", "2"],
                    answer: "2x"
                },
                {
                    id: 29,
                    question: "What is the area of a circle with radius 7? (Use Pi = 22/7)",
                    options: ["154", "49", "44", "144"],
                    answer: "154"
                },
                {
                    id: 30,
                    question: "What is the value of log10(100)?",
                    options: ["1", "2", "3", "10"],
                    answer: "2"
                }
            ]
        },
        'gk': {
            easy: [
                {
                    id: 31,
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    answer: "Mars"
                },
                {
                    id: 32,
                    question: "Who is the Prime Minister of India? (As of 2024)",
                    options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Droupadi Murmu"],
                    answer: "Narendra Modi"
                },
                {
                    id: 33,
                    question: "What is the capital of France?",
                    options: ["Berlin", "Madrid", "Paris", "Rome"],
                    answer: "Paris"
                },
                {
                    id: 34,
                    question: "Which is the largest animal on Earth?",
                    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                    answer: "Blue Whale"
                },
                {
                    id: 35,
                    question: "How many colors are there in a rainbow?",
                    options: ["5", "6", "7", "8"],
                    answer: "7"
                }
            ],
            medium: [
                {
                    id: 36,
                    question: "Which is the largest ocean on Earth?",
                    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    answer: "Pacific Ocean"
                },
                {
                    id: 37,
                    question: "In which year did India get independence?",
                    options: ["1942", "1945", "1947", "1950"],
                    answer: "1947"
                },
                {
                    id: 38,
                    question: "Who wrote 'Romeo and Juliet'?",
                    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                    answer: "William Shakespeare"
                },
                {
                    id: 39,
                    question: "What is the chemical symbol for gold?",
                    options: ["Ag", "Au", "Pb", "Fe"],
                    answer: "Au"
                },
                {
                    id: 40,
                    question: "Which country is also known as the Land of the Rising Sun?",
                    options: ["China", "Korea", "Japan", "Thailand"],
                    answer: "Japan"
                }
            ],
            hard: [
                {
                    id: 41,
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                    answer: "Leonardo da Vinci"
                },
                {
                    id: 42,
                    question: "What is the smallest unit of life?",
                    options: ["Atom", "Molecule", "Cell", "Organ"],
                    answer: "Cell"
                },
                {
                    id: 43,
                    question: "Which element has the atomic number 1?",
                    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
                    answer: "Hydrogen"
                },
                {
                    id: 44,
                    question: "Who was the first person to step on the Moon?",
                    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
                    answer: "Neil Armstrong"
                },
                {
                    id: 45,
                    question: "What is the currency of Japan?",
                    options: ["Yuan", "Won", "Yen", "Ringgit"],
                    answer: "Yen"
                }
            ]
        }
    }
};
