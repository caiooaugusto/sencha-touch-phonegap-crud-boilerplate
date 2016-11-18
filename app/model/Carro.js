Ext.define('ContaAzul.model.Carro', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'Id',
        identifier: 'uuid',
        fields: [ 'Id', 'Placa', 'Imagem', 'Marca', 'Modelo', 'Combustivel' ],
        validations: [
            { type: 'presence', field: 'Placa' },
            { type: 'presence', field: 'Marca' },
            { type: 'presence', field: 'Modelo' }
        ]
    }
});