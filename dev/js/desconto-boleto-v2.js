            function descBoleto(){
            	$('.buy-box').each(function(){
			        var desconto = parseFloat($('#boleto-discount i').text()) / 100;
			        var preco = $(this).find('.skuListPrice').text().replace(' ','').split('$')[1];
			        preco = preco.replace('.','').replace(',','.');
			        var precoDesc = (preco*desconto).toFixed(2);
			        var total = (preco - precoDesc).toFixed(2);
			        total = total.replace('.',',');
			        total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			        $(this).find('.skuPrice').after('<div id="valor-boleto"> R$ '+total+'</div>');
			    });
            }
            $(window).load(function(){
			    descBoleto();
            });


			var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
			var elementChange    = new MutationObserver (function(){
			    descBoleto();
			});
			$(".buy-box .productName").each ( function () {
			    elementChange.observe (this, {childList: true, characterData: true, attributes: true, subtree: true });
			});
