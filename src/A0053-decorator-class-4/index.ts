interface Constructor {
    new (...args: any[]): any;
}

function inverteNome(param1: string, param2: string) {
    //Closure
    return function (target: Constructor) {
        console.log('Sou o decororador e recebi', target);
        return class extends target {
            color: string;
            name: string;

            constructor(...args: any[]) {
                super(...args);
                this.name = this.invert(args[0]);
                this.color = this.invert(args[1]);
            }

            invert(value: string): string {
                return (
                    value.split('').reverse().join('') +
                    ' ' +
                    param1 +
                    ' ' +
                    ' ' +
                    param2
                );
            }
        };
    };
}

function outroDecorador(target: Constructor) {
    console.log('Sou o outro decorador');
}

@outroDecorador
@inverteNome('Valor1', 'Valor2')
export class Animal {
    constructor(public name: string, public color: string) {}
}

const animal = new Animal('Leão', 'laranja');
console.log(animal);
