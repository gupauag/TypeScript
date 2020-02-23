var a = [
    ['url', 'http://localhost'],
    ['port', '8080']
];
var CardSuits;
(function (CardSuits) {
    CardSuits[CardSuits["Clubs"] = 0] = "Clubs";
    CardSuits[CardSuits["Hearts"] = 1] = "Hearts";
    CardSuits[CardSuits["Spades"] = 2] = "Spades";
    CardSuits[CardSuits["Diamonds"] = 3] = "Diamonds";
})(CardSuits || (CardSuits = {}));
;
function funcao() {
    a.forEach(function (element) {
        console.log(element[0]);
        console.log(element[1]);
    });
    console.log(CardSuits.Clubs);
    var x = 2;
    if (x === CardSuits.Clubs)
        alert("true");
    else
        alert("false");
}
funcao();
