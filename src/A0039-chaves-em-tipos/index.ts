type Veiculo = {
    marca: string;
    ano: number;
};

type Car = {
    brand: Veiculo['marca'];
    year: Veiculo['ano'];
    name: string;
};

const carro: Car = {
    brand: 'Ford',
    year: 1996,
    name: 'Fiesta',
};

console.log(carro);
