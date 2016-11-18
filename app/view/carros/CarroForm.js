Ext.define('ContaAzul.view.carros.CarroForm', {
    extend: 'Ext.form.Panel',

    config: {
        id: 'CarroForm',
        cls: 'carro-form',
        height: 380,
        width: 300,
        modal: true,
        centered: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true,
            indicators: {
                y: {
                    autoHide: true
                }
            }
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation:{
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        items: [
            {
                xtype: 'container',
                itemId: 'ImagemContainer',
                html: '<div style="width: 250px; height:130px;"><img width="250px" height="130px" src=""></div>',
            },
            {
                xtype: 'label',
                hidden: true,
                hideAnimation: 'fadeOut',
                html: 'Por favor, insira dados<br>nos campos obrigatórios!',
                itemId: 'failmsg',
                showAnimation: 'fadeIn',
                style: 'color: ##FFFFFF; margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                margin: '5 5 5 5',
                defaults: {
                    labelAlign: 'top'
                },
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'CarroFormId',
                        hidden:true
                    },
                    {
                        label: 'Imagem',
                        xtype: 'textfield',
                        itemId: 'CarroFormImagem',
                        placeHolder: 'digite a url da imagem'
                    },
                    {
                        label: 'Marca',
                        xtype: 'textfield',
                        required: true,
                        itemId: 'CarroFormMarca',
                        placeHolder: 'marca do carro'
                    },
                    {
                        label: 'Modelo',
                        xtype: 'textfield',
                        //id: 'userlogin',
                        itemId: 'CarroFormModelo',
                        required: true,
                        placeHolder: 'modelo do carro'
                    },
                    {
                        label: 'Cor',
                        xtype: 'textfield',
                        itemId: 'CarroFormCor',
                        placeHolder: 'cor do carro'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Escolha um combustível',
                        itemId: 'CarroFormCombustivel',
                        placeHolder: 'tipo de combustível',
                        options: [
                            { text: 'Gasolina', value: 'gasolina' },
                            {text: 'Alcool', value: 'alcool'},
                            {text: 'flex',  value: 'flex'}
                        ]
                    },
                    {
                        label: 'Placa',
                        xtype: 'textfield',
                        required: true,
                        itemId: 'CarroFormPlaca',
                        placeHolder: 'AAA-9999'
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                margin: '5 0 0 0',
                docked: 'bottom',
                items: [
                    {
                        flex: 1,
                        text: 'Voltar',
                        itemId: 'CarroFormBtnVoltar',
                        action: 'voltar'
                    },
                    {
                        flex: 1,
                        itemId: 'CarroFormBtnDeletar',
                        text: 'Deletar',
                        ui: 'decline',
                        action: 'delete'
                    },
                    {
                        flex: 1,
                        itemId: 'CarroFormBtnAlterar',
                        text: 'Alterar',
                        ui: 'action',
                        action: 'update'
                    },
                    {
                        flex: 1,
                        itemId: 'CarroFormBtnCriar',
                        text: 'Criar',
                        hidden: true,
                        ui: 'confirm',
                        action: 'create'
                    }
                ]
            }
        ]
    },

    showSignInFailedMessage: function (message) {
        var label = this.down('#failmsg');
        label.setHtml(message);
        label.show();
    }

});