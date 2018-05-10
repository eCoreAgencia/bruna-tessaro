function descBoleto(preco, desconto){
    preco = preco.replace('.','').replace(',','.');
    var precoDesc = (preco*desconto).toFixed(2);
    var total = (preco - precoDesc).toFixed(2);
    total = total.replace('.',',');
    total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return total;
}
$(window).load(function(){
    $('body.produto .buy-box').each(function(){
        if($(this).find('.desconto-box').length){
            var desconto = $(this).find('.desconto-box .flag').text().split(/\%/)[0]/100;
            var preco = $(this).find('.skuBestPrice').text().replace(' ','').split('$')[1];
            var total = descBoleto(preco, desconto);
            $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
        }
    });
    // Alteração sku //
        if($('body.produto .buy-box .skuBestPrice').length){
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            var elementChange    = new MutationObserver (function(){
                $('.buy-box').each(function(){
                    var desconto = $(this).find('.desconto-box .flag').text().split(/\%/)[0]/100;
                    var preco = $(this).find('.skuBestPrice').text().replace(' ','').split('$')[1];
                    var total = descBoleto(preco, desconto);
                    $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
                });
            });
            $(".buy-box .productName").each ( function () {
                elementChange.observe (this, {childList: true, characterData: true, attributes: true, subtree: true });
            } );
        }
    // Alteração sku //
});