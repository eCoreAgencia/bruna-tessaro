$(document).ajaxStop(function(){
    $('.prateleira li').each(function(){
        // Preco na Prateleira //

            var precoPor = $(this).find('.bestPrice');
            var precoDe = $(this).find('.oldPrice');

            if($(precoDe).length == 0) {
                var precoAnterior = $(this).find('.bestPrice').text();

                var precoFinal = $('<span class="discount-price"></span>');
                var ondeInserir = $(this).find('.installment');
                precoFinal.insertAfter(ondeInserir);

                var valorRedondo = precoAnterior.toString().replace(/\./g, '');
                var valorRedondoDois = valorRedondo.toString().replace(/\,/g, '.');

                var retiraCifrao = valorRedondoDois.split(/\$/)[1];

                var convertRetiraCrifrao = parseInt(retiraCifrao);

                var guardaPercent = $(this).find('.flag-discount p').text();
                var percentReal = guardaPercent.split(/\%/)[0];

                var calculoPercent = convertRetiraCrifrao * percentReal/100;

                var final = convertRetiraCrifrao - calculoPercent;
                var shelfPrice = final;

                var shelfPrice = shelfPrice.toFixed(2);
                var shelfFinalPrice = shelfPrice.toString().replace(/\./g, ',');

                precoFinal.text('R$ '+shelfFinalPrice);

                var opa = $(this).find('.discount-price');
                var eita = opa.first();
                eita.nextAll().remove();

            } else {
                var precoAnterior = $(this).find('.oldPrice').text();

                var precoFinal = $('<span class="discount-price"></span>');
                var ondeInserir = $(this).find('.installment');
                precoFinal.insertAfter(ondeInserir);

                var valorRedondo = precoAnterior.toString().replace(/\./g, '');
                var valorRedondoDois = valorRedondo.toString().replace(/\,/g, '.');

                var retiraCifrao = valorRedondoDois.split(/\$/)[1];

                var convertRetiraCrifrao = parseInt(retiraCifrao);

                var guardaPercent = $(this).find('.flag-discount p').text();
                var percentReal = guardaPercent.split(/\%/)[0];

                var calculoPercent = convertRetiraCrifrao * percentReal/100;

                var final = convertRetiraCrifrao - calculoPercent;
                var shelfPrice = final;

                var shelfPrice = shelfPrice.toFixed(2);
                var shelfFinalPrice = shelfPrice.toString().replace(/\./g, ',');

                precoFinal.text('R$ '+shelfFinalPrice);

                var encontra = $(this).find('.discount-price:contains("NaN")');
                encontra.hide();

                var opa = $(this).find('.discount-price');
                var eita = opa.first();
                eita.nextAll().remove();
            }
        // Preco na Prateleira //
    });
});

$(document).ready(function(){
    if($('body.depCatBus.Alianças').length > 0){
        $('.prateleira li').each(function(){
            // Preco na Prateleira //

                $(this).addClass('aliancas');
                var precoPor = $(this).find('.bestPrice');
                var precoDe = $(this).find('.oldPrice');

                if($(precoDe).length == 0) {
                    var precoAnterior = $(this).find('.bestPrice').text();

                    var precoFinal = $('<span class="discount-price"></span>');
                    var ondeInserir = $(this).find('.installment');
                    precoFinal.insertAfter(ondeInserir);

                    var valorRedondo = precoAnterior.toString().replace(/\./g, '');
                    var valorRedondoDois = valorRedondo.toString().replace(/\,/g, '.');

                    var retiraCifrao = valorRedondoDois.split(/\$/)[1];

                    var convertRetiraCrifrao = parseInt(retiraCifrao);

                    var guardaPercent = $(this).find('.flag-discount p').text();
                    var percentReal = guardaPercent.split(/\%/)[0];

                    var calculoPercent = convertRetiraCrifrao * percentReal/100;

                    var final = convertRetiraCrifrao - calculoPercent;
                    var shelfPrice = final;

                    var shelfPrice = shelfPrice.toFixed(2);
                    var shelfFinalPrice = shelfPrice.toString().replace(/\./g, ',');

                    precoFinal.text('R$ '+shelfFinalPrice);

                    var encontra = $(this).find('.discount-price:contains("NaN")');
                    encontra.hide();

                    var opa = $(this).find('.discount-price');
                    var eita = opa.first();
                    eita.nextAll().remove();

                } else {
                    var precoAnterior = $(this).find('.oldPrice').text();

                    var precoFinal = $('<span class="discount-price"></span>');
                    var ondeInserir = $(this).find('.installment');
                    precoFinal.insertAfter(ondeInserir);

                    var valorRedondo = precoAnterior.toString().replace(/\./g, '');
                    var valorRedondoDois = valorRedondo.toString().replace(/\,/g, '.');

                    var retiraCifrao = valorRedondoDois.split(/\$/)[1];

                    var convertRetiraCrifrao = parseInt(retiraCifrao);

                    var guardaPercent = $(this).find('.flag-discount p').text();
                    var percentReal = guardaPercent.split(/\%/)[0];

                    var calculoPercent = convertRetiraCrifrao * percentReal/100;

                    var final = convertRetiraCrifrao - calculoPercent;
                    var shelfPrice = final;

                    var shelfPrice = shelfPrice.toFixed(2);
                    var shelfFinalPrice = shelfPrice.toString().replace(/\./g, ',');

                    precoFinal.text('R$ '+shelfFinalPrice);

                    var encontra = $(this).find('.discount-price:contains("NaN")');
                    encontra.hide();

                    var opa = $(this).find('.discount-price');
                    var eita = opa.first();
                    eita.nextAll().remove();
                }
            // Preco na Prateleira //
        });
    }
});
