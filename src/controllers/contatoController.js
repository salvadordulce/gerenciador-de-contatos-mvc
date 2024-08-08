const contatoModel = require('../models/contatoModel');

function exibirContatos(request, response) {
    const contatos = contatoModel.listarContatos();
    console.log('Contatos:', contatos);
    response.render('index');
}

function adicionarNovoContato(request, response) {
    response.render('adicionarContato');
}

function exibirNovoContato(request, response) {
    console.log('Chegou na adcionarContato')
    console.log(request.body);
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const email = request.body.email;
    contatoModel.adicionarContato(nome,telefone,email);
    response.redirect('/')
}

module.exports = {
    exibirContatos,
    adicionarNovoContato,
    exibirNovoContato
}