Ext.define('ContaAzul.controller.Carros', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            CarroForm: '#CarroForm',
            Main: '#Main',
            CarrosList: '#CarrosList',
            SearchField: '#SearchField'
        },

        control: {
            "[action=createbtntap]": {
                tap: 'onCreateBtnTap'
            },
            "[action=create]": {
                tap: 'onCreate'
            },
            "[action=read]": {
                tap: 'onRead'
            },
            "[action=update]": {
                tap: 'onUpdate'
            },
            "[action=delete]": {
                tap: 'onDelete'
            },
            "[action=voltar]": {
                tap: 'onVoltarCarroForm'
            },
            "searchfield[id=SearchField]": {
                keyup: 'onSearchKeyUp',
                clearicontap: 'onClearSearch'
            }
        }
    },

    onCreate: function (btn) {
        var me = this;
        var CarroForm = me.getCarroForm();
        var CarrosList = me.getCarrosList();

        var imagemurl = CarroForm.down('#CarroFormImagem').getValue(),
            marca = CarroForm.down('#CarroFormMarca').getValue(),
            modelo = CarroForm.down('#CarroFormModelo').getValue(),
            cor = CarroForm.down('#CarroFormCor').getValue(),
            combustivel = CarroForm.down('#CarroFormCombustivel').getValue(),
            placa = CarroForm.down('#CarroFormPlaca').getValue();

        if (!Ext.isEmpty(placa) && !Ext.isEmpty(marca) && !Ext.isEmpty(modelo)) {
            CarroForm.down('#failmsg').hide();
            Ext.getStore('Carros').add({
                Combustivel: combustivel,
                Imagem: imagemurl,
                Cor: cor,
                Marca: marca,
                Modelo: modelo,
                Placa: placa
            });
            Ext.getStore('Carros').sync();
            CarroForm.destroy();
        } else {
            CarroForm.down('#failmsg').show();
        }
                
    },

    onDelete: function (btn) {
        var me = this;
        var CarroForm = me.getCarroForm();
        var CarrosList = me.getCarrosList();

        var id = CarroForm.down('#CarroFormId').getValue();

        var carrosStore = Ext.getStore('Carros'),
            index = carrosStore.findExact('Id', id),
            record = carrosStore.getAt(index);

        carrosStore.remove(record);

        carrosStore.sync();
        CarroForm.destroy();
    },

    onUpdate: function (btn) {
        var me = this;
        var CarroForm = me.getCarroForm();
        var CarrosList = me.getCarrosList();

        var id = CarroForm.down('#CarroFormId').getValue(),
            imagemurl = CarroForm.down('#CarroFormImagem').getValue(),
            marca = CarroForm.down('#CarroFormMarca').getValue(),
            modelo = CarroForm.down('#CarroFormModelo').getValue(),
            cor = CarroForm.down('#CarroFormCor').getValue(),
            combustivel = CarroForm.down('#CarroFormCombustivel').getValue(),
            placa = CarroForm.down('#CarroFormPlaca').getValue();

      
        if (!Ext.isEmpty(placa) && !Ext.isEmpty(marca) && !Ext.isEmpty(modelo)) {
            CarroForm.down('#failmsg').hide();

            var carrosStore = Ext.getStore('Carros'),
                index = carrosStore.findExact('Id', id),
                record = carrosStore.getAt(index);

            record.set('Combustivel', combustivel);
            record.set('Imagem', imagemurl);
            record.set('Cor', cor);
            record.set('Marca', marca);
            record.set('Modelo', modelo);
            record.set('Placa', placa);

            carrosStore.sync();
            CarroForm.destroy();
        } else {
            CarroForm.down('#failmsg').show();
        }
    },

    onCreateBtnTap: function (btn) {
        var me = this;
        var CarroForm = me.getCarroForm();
        if (!CarroForm)
            CarroForm = Ext.create('ContaAzul.view.carros.CarroForm');

        var voltarBtn = CarroForm.down('#CarroFormBtnVoltar'),
            deletarBtn = CarroForm.down('#CarroFormBtnDeletar'),
            alterarBtn = CarroForm.down('#CarroFormBtnAlterar'),
            criarBtn = CarroForm.down('#CarroFormBtnCriar');   

        voltarBtn.setHidden(true); 
        deletarBtn.setHidden(true); 
        alterarBtn.setHidden(true); 
        criarBtn.setHidden(false);

        var mainView = me.getMain();
        mainView.add(CarroForm);
    },

    onVoltarCarroForm: function(){
        var me = this;
        me.getCarroForm().destroy();
    },

    onCarrosListInitialize: function( carrosList, eOpts ){
        
    },

    onSearchKeyUp: function (searchField, e, eOpts) {
        queryString = searchField.getValue();

        var store = Ext.getStore('Carros');
        store.clearFilter();

        if (queryString) {
            //utiliza expressão regular para encontrar os campos pesquisados
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function (record) {
                if (thisRegEx.test(record.get('Cor')) || thisRegEx.test(record.get('Marca')))
                    return true;
                else
                    return false;
            });
        }
    },

    onClearSearch: function (searchField, input, e, eOpts) {
        var store = Ext.getStore('Carros');
        store.clearFilter();
    }
});