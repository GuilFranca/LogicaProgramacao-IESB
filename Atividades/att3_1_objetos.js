// ======= CRIAÇÃO DE 5 OBJETOS COM 4 ATRIBUTOS CADA =======

const estudante1 = {
    matricula: "202301",
    nome: "João Silva",
    DN: "2005-08-15",
    UF: "SP"
};

const estudante2 = {
    matricula: "202302",
    nome: "Maria Oliveira",
    DN: "2004-12-10",
    UF: "RJ"
};

const estudante3 = {
    matricula: "202303",
    nome: "Carlos Pereira",
    DN: "2006-07-25",
    UF: "MG"
};

const estudante4 = {
    matricula: "202304",
    nome: "Ana Souza",
    DN: "2005-03-30",
    UF: "BA"
};

const estudante5 = {
    matricula: "202305",
    nome: "Lucas Costa",
    DN: "2003-11-05",
    UF: "RS"
};

// ======= FUNÇÃO PARA MOSTRAR ATRIBUTOS E INFORMAÇÕES =======

function mostrarInfo(estudante) {
    console.log(estudante);
    console.log(estudante.matricula);
    console.log(estudante.nome);
    console.log(estudante.DN);
    console.log(estudante.UF);
    console.log(Object.keys(estudante));
    console.log(Object.values(estudante));
    console.log(Object.entries(estudante));
}

// ======= EXIBINDO AS INFORMAÇÕES DE CADA OBJETO =======

mostrarInfo(estudante1);
mostrarInfo(estudante2);
mostrarInfo(estudante3);
mostrarInfo(estudante4);
mostrarInfo(estudante5);

// ======= USANDO for...in PARA EXIBIR CHAVE:VALOR DE CADA OBJETO =======

function mostrarForIn(estudante) {
    for (const propriedade in estudante) {
        console.log(`${propriedade}: ${estudante[propriedade]}`);
    }
}

mostrarForIn(estudante1);
mostrarForIn(estudante2);
mostrarForIn(estudante3);
mostrarForIn(estudante4);
mostrarForIn(estudante5);
