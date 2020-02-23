export interface User{
    name: string;
    idade: number;
    active?: boolean;
}

let usuario: User = {  
    name: 'Gustavo',
    idade: 34,
    active: true
}