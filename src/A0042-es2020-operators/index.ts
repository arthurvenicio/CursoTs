// Encadeamento opcional e Operador de coalescência nula

// Encadeamento opcional = ? // ex: documento.data?.toDateString()
// Operador de coalescência nula = Checar se o valor recebido no lado esquerdo é um não valor : null e undefined
// ex: documento.data?.toDateString() ?? 'Não existe data' // quando não tiver executa a opção ao lado nesse caso o 'Não...'

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
    // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data!');
