 $(document).ready(function(){

    var classFormatura = $('.bread-crumb li:nth-child(2)').text();
    $('body').addClass(classFormatura);

    $('.sel-formatura').change(function() {
        //location.href = $(this).attr('value');
        var url = $(this).attr('value');
        $.get(url, function(data) {
            vtexjs.checkout.getOrderForm().done(function(orderForm) {
                console.log(orderForm);
                htmlBody.animate({ scrollTop: 0 }, 300);
            });
        });

        var selected = $(this).find(':selected').attr('datapedra');

        $('.sku-selector-container').addClass('active');
        $('.Pedra .skuList label').hide();
        $('.Pedra .skuList label.skuespec_Pedra_opcao_'+selected+'').show();
    });

    // Verificacao se o usuario deseja comprar o Kit ou o Produto Separado
        $('.container-kit .comprar-kit').click(function(){
            $('body').addClass('comprar-kit');
            $('body').removeClass('modal-active');
        });

        $('.container-kit .comprar-separado').click(function(){
            $('body').addClass('comprar-separado');
            $('body').removeClass('modal-active');
            $('.price-info .buy-button').attr('href', '/checkout/cart');
        });
    // Verificacao se o usuario deseja comprar o Kit ou o Produto Separado

    // Trocando link compra separado //
        $('body.comprar-separado .buy-button').attr('href', '/checkout')
    // Trocando link compra separado //

    // Scripts Parcelamento
        $('#open_parcelamento').click(function() {
        $('#parcelamentoModal').prev().hide();
        $('#parcelamentoModal').addClass('active');

        var url = $('.see-other-payment-method-link').attr('onclick'); //pega url da modal
        url = url.replace("window.open('", ""); // limpa a modal

        $('#parcelamentoModal .modal-body').load(url.split("'")[0] + ' .content', function() { //load para carregar o conteudo da modal
            divBoleto = $("#divBoleto").html();
            var aux = 1;
            $('#ddlCartao option').each(function() {
                var nomeCartao = $(this).text();

                $('#parcelamentoModal .abas').append('<li><div class="aba ' + nomeCartao + '"><span class="' + nomeCartao + '"></span></div></li>');
                $('#tbl' + aux).addClass(nomeCartao);
                $('#parcelamentoModal #content').append('<div class="conteudo ' + nomeCartao + '"></div>');
                $('#parcelamentoModal .conteudo.' + nomeCartao).append($('#tbl' + aux));
                $('#parcelamentoModal table .valor').text('Parcela');
                aux++;
            });

            $('#parcelamentoModal .abas').append('<li><div class="aba boleto"><span class="boleto"></span></div></li>');
            $('#parcelamentoModal #content').append('<div class="conteudo boleto"></div>');
            $('#parcelamentoModal .conteudo.boleto').append(divBoleto);

            $("#content div:nth-child(1)").show();
            $(".abas li:first").addClass("selected");
            $(".abas li:first div").addClass("selected");
            $(".aba").click(function() {
                $(".aba").removeClass("selected");
                $(".abas li").removeClass("selected");
                $(this).addClass("selected");
                $(this).parent().addClass("selected");
                var indice = $(this).parent().index();
                indice++;
                $("#content div").hide();
                $("#content div:nth-child(" + indice + ")").fadeIn();
            });

            $(".aba").hover(
                function() {
                    $(this).addClass("ativa")
                },
                function() {
                    $(this).removeClass("ativa")
                }
            );

            $('.abas li:nth-child(5)').nextAll().hide();
            $('.conteudo.boleto .wrapper').nextAll().hide();
            $('.conteudo.boleto .wrapper:first-child').addClass('first');
            $('.conteudo.boleto .wrapper').first().addClass('first');

        });
        });
    // Scripts Parcelamento


    // Scripts Frete

        $('#open_frete').click(function() {

        jQuery.fn.simulateClick = function() {
            return this.each(function() {
                if ('createEvent' in document) {
                    var doc = this.ownerDocument,
                        evt = doc.createEvent('MouseEvents');
                    evt.initMouseEvent('click', true, true, doc.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                    this.dispatchEvent(evt);
                } else {
                    this.click(); // IE Boss!
                }
            });
        }

        $('.shipping-value').simulateClick('click');
        $('.open_frete .info_label').first().addClass('first');
        $('.modal_content .open_medidor').remove();
        $('#parcelamentoModal').hide().removeClass('active');
        $('.open_frete').appendTo('.modal_content');
        });
    // Scripts Frete


    // Scripts Medidor
        $('#open_medidor').click(function() {
            $('.modal_content iframe').remove();
            $('.modal_content .open_frete').remove();
            $('#parcelamentoModal').hide().removeClass('active');
            $('.open_medidor').clone().appendTo('.modal_content');
        });
    // Scripts Medidor

    // Scripts Caracteristicas
        $('#open_caracteristicas').click(function() {
            $('.modal_content iframe').remove();
            $('.modal_content .open_frete').remove();
            $('#parcelamentoModal').hide().removeClass('active');
            $('#caracteristicas').clone().appendTo('.modal_content');
        });
    // Scripts Caracteristicas

});

// Scripts CEP
    $(document).ajaxStop(function() {
        $('#lnkPubliqueResenha').click(function() {
            $('#publishUserReview').addClass('active');
        });
        $('#publishUserReview .btn-thickbox').click(function() {
            $('#publishUserReview').removeClass('active');
        });

        $('body.produto .user_review #resenha .avalie-produto h5').click(function() {
            $('.rating-avalie-wrapper').addClass('active');
            $('#lnkPubliqueResenha').simulateClick('click');
        });

        $('<span class="info_label">Informe seu Cep</span>').insertBefore('label.prefixo');
        $('<span class="info_label">Quantidade</span>').insertBefore('.quantity input');
    });
// Scripts CEP


// Scripts Modal //
    // Open Modal //
        $('.call_modal').click(function() {
            $('.global_modal').fadeIn(200);
            $('body').addClass('modal_active');
        });
        // Open Modal //

        // Close Modal //
        $('.close_modal, .bg_modal').click(function() {
            $('.global_modal').fadeOut(600);
            $('body').removeClass('modal_active');
            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
            $('#parcelamentoModal').removeClass('active');
            $('#videoModal').removeClass('active');
        });
        $(document).keyup(function(ev) {
            if (ev.keyCode == 27)
                $('.global_modal').fadeOut(500);
            $('body').removeClass('modal_active');
            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
            $('#parcelamentoModal').removeClass('active');
        });
    // Close Modal //
// Scripts Modal //

$('#valor-boleto:contains(".")').addClass("price-zero");
$('#valor-cartao:contains(".")').addClass("price-zero");