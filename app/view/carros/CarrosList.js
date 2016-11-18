Ext.define('ContaAzul.view.carros.CarrosList', {
    extend: 'Ext.dataview.List',
    xtype: 'carroslist',
    listtype: '',
    requires: [
        'Ext.plugin.ListPaging'
    ],
    config: {
        id: 'CarrosList',
        store: 'Carros',
        grouped: true,
        title: 'Desafio 1 - ContaAzul Cadastro de Veículos',
        width: '100%',
        infitine: false,
        height: '100%',
        variableHeights: true,
        disclosure: true,
        onItemDisclosure: true,
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true,
                loadMoreText: 'Role para baixo para carregar mais veículos',
                noMoreRecordsText: 'Fim.'
            }
        ],
        preventSelectionOnDisclose: true,
        cls: 'carros-list',

        onItemDisclosure: function (record, btn, index) {
        },
        listeners: {
            'itemtap': function (carrosList, index, target, record, e, eOpts) {
                var mainView = Ext.getCmp('Main');
                if (!mainView)
                    mainView = Ext.create('ContaAzul.view.Main');

                var CarroForm = Ext.getCmp('CarroForm');
                if (!CarroForm)
                    CarroForm = Ext.create('ContaAzul.view.carros.CarroForm');

                imgContainer = CarroForm.down('#ImagemContainer');
                imgContainer.setHtml('<div style="margin: 5px 50px 5px 50px; width: 200px; height:130px;"><img width="200px" height="130px" src="' + record.data.Imagem + '"></div>');

                CarroForm.down('#CarroFormId').setValue(record.id),
                CarroForm.down('#CarroFormImagem').setValue(record.data.Imagem),
                CarroForm.down('#CarroFormMarca').setValue(record.data.Marca),
                CarroForm.down('#CarroFormModelo').setValue(record.data.Modelo),
                CarroForm.down('#CarroFormCor').setValue(record.data.Cor),
                CarroForm.down('#CarroFormCombustivel').setValue(record.data.Combustivel),
                CarroForm.down('#CarroFormPlaca').setValue(record.data.Placa);

                console.log('record on item tap_______________________');
                console.log(record);

                mainView.add(CarroForm);
            }
        },
        itemTpl: '<div class="item">' +
                    '<div style="width: 100%; overflow: hidden;">'+
                        '<div style="width: 140px; height:130px; padding: 0px; float: left;"> <img src="{Imagem}" width="100%" height="100%"> </div>' +
                        '<div style="width: 100%; padding: 5px 5px 5px 145px; text-align: left" font-size: 12px;> Marca: {Marca}<br>Modelo: {Modelo}<br>Cor: {Cor}<br>Combustível: {Combustivel}<br>Placa: {Placa} </div>' +
                    '</div>'+
                 '</div>',
        items: [
            {
                docked: 'top',
                height: 72,
                ui: 'light',
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        minWidth: 320,
                        flex: 1,
                        xtype: 'searchfield',
                        placeHolder: 'Pesquise por cor e/ou marca..',
                        id: 'SearchField'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ]
    }
});