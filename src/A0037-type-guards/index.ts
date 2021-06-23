export function add(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(2, 6));
console.log(add('a', 'b'));

type Pessoa = {
    tipo: 'pessoa';
    nome: string;
};
type Animal = {
    tipo: 'animal';
    cor: string;
};

type PessoalOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoalOuAnimal): void {
    switch (obj.tipo) {
        case 'pessoa':
            console.log(obj.nome);
            break;
        case 'animal':
            console.log('Isso é um animal de cor: ', obj.cor);
            break;
    }
}

mostraNome(new Aluno('João'));
