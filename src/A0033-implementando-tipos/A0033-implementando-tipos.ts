type Name = {
    firstName: string;
    lastName: string;
    completeName(): string;
};

export class Person implements Name {
    constructor(public firstName: string, public lastName: string) {}

    completeName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

const person = new Person('Arthur', 'Venicio');
console.log(person.completeName());
