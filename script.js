var quote = ["“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”"]

var quoter = ["― Oscar Wilde",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Mae West",
    "― Mahatma Gandhi"
]

var pervNum = -1

function generateNum() {

    var random = Math.floor(Math.random() * 5);

    while (pervNum == random) {
        random = Math.floor(Math.random() * 5);
        console.log('true')
    }

    console.log('hi');

    document.getElementById("p1").innerHTML = quote[random];
    document.getElementById("p2").innerHTML = quoter[random];

    pervNum = random
}

