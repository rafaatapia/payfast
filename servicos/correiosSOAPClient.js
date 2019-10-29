var soap = require('soap');

function CorreiosSOAPClient() {
    this._url = 'http://ws.correios.com.br/calculador/calcprecoprazo.asmx?wsdl';
}

module.exports = function () {
    return CorreiosSOAPClient;
};

CorreiosSOAPClient.prototype.calculaPrazo = function (args, callback) {
    soap.createClient(this._url, function (error, client) {
        console.log('client soap criado!');
        client.CalcPrazo(args, callback);
    });

};



