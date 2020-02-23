export {};
// active ?: o interrogação é considerado propriedade opcional
let obj: { name: string, age: number, active?: boolean } = {
    name: 'Gustavo',
    age: 25
}

let obj2: { [key: string]: any } = {
 name: 25,
 bar: true
}

function func(){
    console.log(obj2.bar);
}
function func2(nome: string, sobrenome: string  ){
    console.log(obj2.bar);
}

func2('nome', 'sobrenome');