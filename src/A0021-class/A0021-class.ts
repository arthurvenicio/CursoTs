export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa = new Empresa('Udemy', '29.030.862/0001-49');
const colaborador1 = new Colaborador('Arthur', 'Venicio');
const colaborador2 = new Colaborador('Jose', 'Filho');
const colaborador3 = new Colaborador('Ubirajara', 'Rodrigues');

empresa.adicionarColaborador(colaborador1);
empresa.adicionarColaborador(colaborador2);
empresa.adicionarColaborador(colaborador3);

empresa.mostrarColaboradores();
