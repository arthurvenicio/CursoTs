/*eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
    export const nomeDoNamespace = 'Luiz';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Luiz');
    console.log(pessoaDoNamespace);

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome do outro namespace';
    }
}

const pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('Luiz');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace);
