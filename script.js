
const listUser = [
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meirles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' }
];


function showPersonTable() {
    const actualTable = document.querySelector('table');
    if (actualTable) {
        actualTable.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnUsername = document.createElement('th');
    const columnBotao = document.createElement('th');


    columnName.innerText = 'Nome';
    columnUsername.innerText = 'Username'
    columnBotao.innerText = 'Botão'
    row.appendChild(columnName);
    row.appendChild(columnUsername);
    row.appendChild(columnBotao)
    table.appendChild(row);

    listUser.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.userName);

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);
}

function getPersonTableRow(name, userName) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnUsername = document.createElement('td');
    const columnBotao = document.createElement('td')
    var botao = document.createElement('button')
    botao.innerText = 'Ver dados'
    columnName.innerText = name;
    columnUsername.innerText = userName;
    columnBotao.appendChild(botao)

    botao.addEventListener('click', function(){
        let nomeEscolhido = userName;
    location.href = './user./user.html?' + nomeEscolhido;
    })
    

    row.appendChild(columnName);
    row.appendChild(columnUsername);
    row.appendChild(columnBotao);
    return row;
    
}
// function onclickButton() {
//     let nomeEscolhido = userName;
//     location.href = './user./user.html?' + nomeEscolhido;
// }

showPersonTable();



