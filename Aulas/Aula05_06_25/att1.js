function semaforno() {

    const prompt = require('prompt-sync')({ sigint: true });

    let cor = prompt('Qual a cor do semáforno? ');

    cor.toLowerCase();

    switch (cor) {

        case 'vermelho':
            console.log('Pare!!!');
            break;

        case 'amarelo':
            console.log('Atenção!!');
            break;

        case 'verde':
            console.log('Siga!');
            break;

        default: console.log('Cor inválida...');

    }

}

semaforno();