function decorator(classPrototype: any, nome: string | symbol): any {
    let valuePropety: any;
    return {
        get: () => valuePropety,
        set: (value: any) => {
            if (typeof value === 'string') {
                valuePropety = value.split('').reverse().join('');
                return;
            }
            valuePropety = value;
        },
    };
}
export class UmaPessoa {
    @decorator
    nome: string;
    @decorator
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new UmaPessoa('Arthur', 'Venicio', 19);
const metodo = pessoa.metodo('Olá Mundo!');
console.log(metodo);
