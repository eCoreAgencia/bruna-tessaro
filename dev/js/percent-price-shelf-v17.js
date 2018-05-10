function descBoleto(preco, desconto){
    preco = preco.replace('.','').replace(',','.');
    var precoDesc = (preco*desconto).toFixed(2);
    var total = (preco - precoDesc).toFixed(2);
    total = total.replace('.',',');
    total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return total;
}

$(document).ajaxStop(function(){
    // Desconto Boleto //
        $('.prateleira li').each(function(){
            if($(this).find('.bestPrice').length){
                var total;
                var preco = $(this).find('.bestPrice').text().replace(' ','').split('$ ')[1].split(' ')[0];
                if($(this).find('.flag-discount p').length){
                    var desconto =  $(this).find('.flag-discount p').text().split(/\%/)[0]/100;
                    console.log('discount', desconto);
                    total = descBoleto(preco, desconto);
                }else{
                    total = preco;
                }
                $(this).find('.installment').after('<span class="discount-price">R$ '+total+'</span>');
            }
        });
        // $('body.produto .buy-box').each(function(){
        //     var $this = $(this);
        //     if($(this).find('.desconto-box').length){
        //         var total;
        //         var preco = $(this).find('.skuBestPrice').text().replace(' ','').split('$')[1];
        //         if($(this).find('.desconto-box .flag.30-').length){
        //             var desconto = $(this).find('.desconto-box .flag.30-').text().split(/\%/)[0]/100;
        //             total = descBoleto(preco, desconto);
        //         }else{
        //             total = preco;
        //         }
        //         $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
        //     }
        // });
        // // Alteração sku //
        //     if($('body.produto .buy-box .skuBestPrice').length){
        //         var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        //         var elementChange    = new MutationObserver (function(){
        //             $('.buy-box').each(function(){
        //                 var total;
        //                 var preco = $(this).find('.skuBestPrice').text().replace(' ','').split('$')[1];
        //                 if($(this).find('.desconto-box .flag.30-').length){
        //                     var desconto = $(this).find('.desconto-box .flag.30-').text().split(/\%/)[0]/100;
        //                     var total = descBoleto(preco, desconto);
        //                 }else{
        //                     total = preco;
        //                 }
        //                 $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
        //             });
        //         });
        //         $(".buy-box .productName").each ( function () {
        //             elementChange.observe (this, {childList: true, characterData: true, attributes: true, subtree: true });
        //         } );
        //     }
        // // Alteração sku //
        
    // Desconto Boleto //
});
$(document).ready(function(){
     // Scripts Modal //
    $('body.produto .buy-box').each(function(){
        var $this = $(this);
        if($(this).find('.desconto-box').length){
            var total;
            var preco = $(this).find('.skuBestPrice').text().replace(' ','').split('$')[1];
            if($(this).find('.desconto-box .flag').length){
                var desconto = $(this).find('.desconto-box .flag').text().split(/\%/)[0]/100;
                total = descBoleto(preco, desconto);
            }else{
                total = preco;
            }
            $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
        }
    });
    // Alteração sku //
        if($('body.produto .buy-box .skuBestPrice').length){
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            var elementChange    = new MutationObserver (function(){
                $('.buy-box').each(function(){
                    var total;
                    var preco = $(this).find('.skuBestPrice').text().replace(' ','').split('$')[1];
                    if($(this).find('.desconto-box .flag').length){
                        var desconto = $(this).find('.desconto-box .flag').text().split(/\%/)[0]/100;
                        var total = descBoleto(preco, desconto);
                    }else{
                        total = preco;
                    }
                    $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
                });
            });
            $(".buy-box .productName").each ( function () {
                elementChange.observe (this, {childList: true, characterData: true, attributes: true, subtree: true });
            } );
        }
    // Alteração sku //
});