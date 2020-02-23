export {};
let a: [string, any][] = [
    ['url', 'http://localhost'],
    ['port', '8080']
]

enum CardSuits{Clubs, Hearts, Spades, Diamonds};

function funcao() {
    a.forEach(element => { 
        console.log(element[0]);
        console.log(element[1]);

    })
    console.log(CardSuits.Clubs);
    let x = 2;
    if(x === CardSuits.Clubs) alert("true");
    else alert("false");
}

funcao();