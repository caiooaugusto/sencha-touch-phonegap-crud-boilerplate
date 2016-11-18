Ext.define('ContaAzul.store.Carros', {
    extend: 'Ext.data.Store',

    requires: [
        'ContaAzul.model.Carro'
    ],

    config: {
        model: 'ContaAzul.model.Carro',
        pageSize: 5, 
        autoLoad: false,
        grouper: {
            groupFn: function (record) {
                return record.get('Marca')[0];
            }
        },
        listeners  : {
            beforeload: function( inStore, operation, eOpts ) {
                var iPageStart = (this.currentPage-1)*this.getPageSize();
                if(iPageStart <= this.myArrayData.length) {
                    var aRecords = inStore.myArrayData.slice(iPageStart, (this.currentPage)*this.getPageSize());
                    inStore.suspendEvents( );
                    this.setData(aRecords);
                    inStore.resumeEvents(true);                     
                    //remove loading-text if no more records follow
                    var sLoadMoreText = 'Role para baixo para carregar mais veículos';
                    if (iPageStart + this.getPageSize() > this.myArrayData.length) sLoadMoreText = 'Fim.';
                    this.listPlugin.setLoadMoreText(sLoadMoreText);
                } else {
                    return false;
                }
            }
        },
    },
    
    setArrayData: function (inArrayData, inList) {
        this.listPlugin = null;
        var aListPlugins = inList.getPlugins();
        for(var i=0; i<aListPlugins.length; i++) {
            if(aListPlugins[i].getId().indexOf('listpaging') > -1) this.listPlugin = aListPlugins[i];
        }
        this.myArrayData = inArrayData;
        this.removeAll();
        this.currentPage = 1;
        this.load();
    }
});