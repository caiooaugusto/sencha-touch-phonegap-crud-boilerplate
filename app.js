Ext.application({
    name: 'ContaAzul',

    requires: [
        'ContaAzul.utils.SizeMonitor', //TEMP fix, Chrome 43 bug
        'ContaAzul.utils.PaintMonitor' //TEMP fix, Chrome 43 bug
    ],

    views: [
        'ContaAzul.view.Main',
        'ContaAzul.view.carros.CarroForm'
    ],

    models: [
        'Carro'
    ],

    stores: [
        'Carros'
    ],

    controllers: [
        'Carros'
    ],

    launch: function () {
        var me = this;
        me.onDeviceReady();
    },

    onDeviceReady: function () {
        var me = this;
        //add FastClick for 300ms delay fix
        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);
               
        var mainView = Ext.getCmp('Main');
        if(!mainView)
            mainView = Ext.create('ContaAzul.view.Main');
        mainView.setStyle({            
            'background-size': '100% 100%',
            'padding': '0px',
            'margin': '0px',
            'width': '100%',
            'height': '100%'
        });

        mainView.setMasked({
            xtype: 'loadmask',
            message: 'Carregando dados iniciais...'
        });

        var CarrosList = Ext.getCmp('CarrosList');
        if (!CarrosList)
            CarrosList = Ext.create('ContaAzul.view.carros.CarrosList');

        var initialData = Ext.JSON.decode('[{"Combustivel": "Flex","Imagem": null,"Marca": "Volkswagem","Modelo": "Gol","Placa": "FFF­-5498"},{"Combustivel": "Gasolina","Imagem": null,"Marca": "Volkswagem","Modelo": "Fox","Placa": "FOX-­4125"},{"Combustivel": "Alcool","Imagem": "http://www.litoralmania.com.br/wp-content/uploads/2014/12/fusca9.jpg","Marca": "Volkswagen","Modelo": "Fusca","Placa": "PAI­-4121"}]');

        initialData = Object.keys(initialData).map(function (k) { return initialData[k] });

        CarrosList.getStore().setArrayData(initialData, CarrosList);
        mainView.add(CarrosList);

        mainView.setMasked(false);
    }    
});