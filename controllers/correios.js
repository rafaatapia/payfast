module.exports = function (app) {

    app.post('/correios/calculo-prazo', function (req, res) {
        var dadosEntrega = req.body;

        var correiosSOAPClient = new app.servicos.correiosSOAPClient();
        correiosSOAPClient.calculaPrazo(dadosEntrega, function (error, resultado) {
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Prazo calculado!');
            res.status(200).json(resultado);
        });

    });
}