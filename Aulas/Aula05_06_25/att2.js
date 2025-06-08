function ufArray () {

    const prompt = require ('prompt-sync')({sigint:true});

    let ufs = [];

    let numUf = parseInt(prompt("Digite quantas UF's deseja inserir: "));

    for (let i = 0; i < numUf; i++){
        let msg = prompt(`${i} - Digite uma UF: `);
        ufs.push(msg.toUpperCase());
    }

    console.log(ufs);

}

ufArray();