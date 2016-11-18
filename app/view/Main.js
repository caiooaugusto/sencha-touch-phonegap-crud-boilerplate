Ext.define('ContaAzul.view.Main', {
    extend: 'Ext.Container',
    config: {
        id: 'Main',
        cls: 'main-background',
        layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
        },
        fullscreen: true,
        scrollable: null,
        items: [
            {
                docked: 'bottom',
                width: '100%',
                ui: 'light',
                xtype: 'toolbar',
                items: [
                    {
                        flex: 1,
                        text: 'Inserir novo ve&iacute;culo',
                        action: 'createbtntap',
                        ui: 'action',
                    }
                ]
            }
        ]
    }
});