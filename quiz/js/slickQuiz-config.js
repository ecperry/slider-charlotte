// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Art through the Ages quiz",
        "main":    "<p>Think you know your stuff? <br>Get ready to test your skills.</p>",
        "results": "<h5>Learn more</h5><p>The Art through the Ages timeline is only a starting point. Visit your local art museum, library or gallery to keep learning about art and artists past those listed in this resource.</p>",
        "level1":  "You're an art historian already!",
        "level2":  "Whoa! Watch out world, you know your art history!",
        "level3":  "Great effort! Almost there!",
        "level4":  "You could use a refresher. Keep studying",
        "level5":  "Yikes! Time to study." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What does Renaissance mean?",
            "a": [
                {"option": "rich people",      "correct": false},
                {"option": "renewal",     "correct": false},
                {"option": "rebirth",      "correct": true},
                {"option": "red sauce",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Renaissance represented a rebirth of classical thought and idealogy.</p>",
            "incorrect": "<p><span>Uhh no.</span> That's not it! Better luck next time.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Monet was one of which of the following movements?",
            "a": [
                {"option": "Realism",               "correct": false},
                {"option": "Impressionism",   "correct": true},
                {"option": "Renaissance",               "correct": false},
                {"option": "Rococo", "correct": false} // no comma here
            ],
            "select_any": false,
            "correct": "<p><span>Nice!</span> The movement was practically named after him. </p>",
            "incorrect": "<p><span>Hmmm.</span> Think again.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Realism depicted which of the following. Select ALL that apply.",
            "a": [
                {"option": "the everyday",           "correct": true},
                {"option": "rich aristocracy",                  "correct": false},
                {"option": "hard work",  "correct": true},
                {"option": "rural scenes",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Realism was quite the opposite of the Rococo art that preceded it. </p>",
            "incorrect": "<p><span>Not Quite.</span>Take a second look next time.</p>" // no comma here
        },
        { // Question 4
            "q": "Where did the Abstract Expressionist movement begin?",
            "a": [
                {"option": "Toronto, Canada",    "correct": false},
                {"option": "New York, NY",     "correct": true},
                {"option": "Paris, France",      "correct": false},
                {"option": "Siena, Italy",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Yep!</span> It all started in the Big Apple. </p>",
            "incorrect": "<p><span>Fail.</span> Sorry. Wrong city!</p>" // no comma here
        },
        { // Question 5
            "q": "True of false, Duccio was likely the ONLY one who worked on The Maesta",
            "a": [
                {"option": "False",    "correct": true},
                {"option": "True",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
