$(document).ready(function(){
    // Ajuste SKUList alinhamento //
        $('.skuList').each(function(){
            var encontra = $(this).find('.nomeSku');
            var preco = encontra.text();
            var elemento = encontra.next();
            var opa = elemento.next();
            opa.text(preco);
        });
    // Ajuste SKUList alinhamento //

    // Calculo Boleto //
        if($('.opcao-kit.one .skuListPrice').length > 0){
          var guardaValBoleto = $('.opcao-kit.one .skuListPrice').text();
          var guardaPercentBoleto = $('#boleto-discount i').text();

          var boletoPrev = guardaValBoleto.split(/\$/)[1];

          var convertBoleto = boletoPrev.toString().replace(/\./g, '');

          var convertRetiraCrifrao = parseInt(convertBoleto);

          var calcPercBoleto = convertRetiraCrifrao * guardaPercentBoleto / 100;
          var valorBoleto = convertRetiraCrifrao - calcPercBoleto;
          var arredonda = valorBoleto.toFixed(2);
          var precoCorreto = arredonda.toString().replace(/\./g, ',');

          $('<div id="valor-boleto"></div>').insertAfter('.opcao-kit.one .skuPrice');
          $('.opcao-kit.one #valor-boleto').text('R$ '+precoCorreto+'');
        } else {
          var guardaValBoleto = $('.opcao-kit.one .skuPrice').text();
          var guardaPercentBoleto = $('#boleto-discount i').text();

          var boletoPrev = guardaValBoleto.split(/\$/)[1];

          var convertBoleto = boletoPrev.toString().replace(/\./g, '');

          var convertRetiraCrifrao = parseInt(convertBoleto);

          var calcPercBoleto = convertRetiraCrifrao * guardaPercentBoleto / 100;
          var valorBoleto = convertRetiraCrifrao - calcPercBoleto;
          var arredonda = valorBoleto.toFixed(2);
          var precoCorreto = arredonda.toString().replace(/\./g, ',');

          $('<div id="valor-boleto"></div>').insertAfter('.opcao-kit.one .skuPrice');
          $('.opcao-kit.one #valor-boleto').text('R$ '+precoCorreto+'');
        }
    // Calculo Boleto //

    // Calculo Boleto //
        if($('.opcao-kit.two .skuListPrice').length > 0){
          var guardaValBoleto = $('.opcao-kit.two .skuListPrice').text();
          var guardaPercentBoleto = $('#boleto-discount i').text();

          var boletoPrev = guardaValBoleto.split(/\$/)[1];

          var convertBoleto = boletoPrev.toString().replace(/\./g, '');

          var convertRetiraCrifrao = parseInt(convertBoleto);

          var calcPercBoleto = convertRetiraCrifrao * guardaPercentBoleto / 100;
          var valorBoleto = convertRetiraCrifrao - calcPercBoleto;
          var arredonda = valorBoleto.toFixed(2);
          var precoCorreto = arredonda.toString().replace(/\./g, ',');

          $('<div id="valor-boleto"></div>').insertAfter('.opcao-kit.two .skuPrice');
          $('.opcao-kit.two #valor-boleto').text('R$ '+precoCorreto+'');
        } else {
          var guardaValBoleto = $('.opcao-kit.two .skuPrice').text();
          var guardaPercentBoleto = $('#boleto-discount i').text();

          var boletoPrev = guardaValBoleto.split(/\$/)[1];

          var convertBoleto = boletoPrev.toString().replace(/\./g, '');

          var convertRetiraCrifrao = parseInt(convertBoleto);

          var calcPercBoleto = convertRetiraCrifrao * guardaPercentBoleto / 100;
          var valorBoleto = convertRetiraCrifrao - calcPercBoleto;
          var arredonda = valorBoleto.toFixed(2);
          var precoCorreto = arredonda.toString().replace(/\./g, ',');

          $('<div id="valor-boleto"></div>').insertAfter('.opcao-kit.two .skuPrice');
          $('.opcao-kit.two #valor-boleto').text('R$ '+precoCorreto+'');
        }
    // Calculo Boleto //

   if($('#valor-boleto:contains("NaN")').length > 0) {
       $('#valor-boleto').hide();
   }
});