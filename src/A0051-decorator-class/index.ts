@decorator
export class Animal {
    constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        color: string;
        name: string;

        constructor(...args: any[]) {
            super(...args);
            this.name = this.invert(args[0]);
            this.color = this.invert(args[1]);
        }

        invert(value: string): string {
            return value.split('').reverse().join('');
        }
    };
}

const animal = new Animal('Leão', 'laranja');
console.log(animal);
