    
$(document).ready(function () {
    /* encabezado*/
    var data = {
        menu: [{

                "link": 'Inicio<span class="sr-only">(current)</span>',
                "value": "index.html",
                "__domenu_params": {}
            },{}
            , 
            {
                "link": 'Apropiación social<span class="caret"></span>',
                "value": "#",
                "__domenu_params": {},
                "children": [{
                        "link": "Webinars",
                        "value": "./webinar.html",
                        "__domenu_params": {}
                    }, {
                        "link": "  Fonotecas",
                        "value": "./fonoteca.html",
                        "__domenu_params": {}
                    }]
            }, {

                "link": 'Salud mental online<span class="caret"></span>',
                "value": "#",
                "__domenu_params": {},
                "children": [{

                        "link": "Telesalud",
                        "value": "./telesalud.html",
                        "__domenu_params": {}
                    }, {

                        "link": "Linea de la felicidad",
                        "value": "./lineaDeLaFelicidad.html",
                        "__domenu_params": {}
                    }, {

                        "link": "App SAMU",
                        "value": "./appSAMU.html",
                        "__domenu_params": {}
                    }]
            },
            {
                "link": 'Educación<span class="caret"></span>',
                "value": "#",
                "__domenu_params": {},
                "children": [{

                        "link": "Educación no formal",
                        "value": "./educacionNoFormal.html",
                        "__domenu_params": {}
                    }]
                },
               
                {
                "link": '<span style="margin-left:100px; padding:80px;">Datos & Software<span class="caret"></span></span>',
                "value": "#",
                "__domenu_params": {},
                "children": [{

                        "link": "Software",
                        "value": "#",
                        "__domenu_params": {},
                       
                    }, {

                        "link": "Datos",
                        "value": "#",
                        "__domenu_params": {},
                       }, {

                        "link": "Modelos",
                        "value": "modelos.html",
                        "__domenu_params": {}
                    }, {

                        "link": "Análisis",
                        "value": "analisis.html",
                        "__domenu_params": {}
                    }]
            },
            {
                "link": '<span id="abajo" class="fa fa-angle-double-up"></span>',
                "value": "#",
                "__domenu_params": {}
            }
        ]
    };

    function makeUL(lst, topLevelUl, rootLvl) {
        var html = [];
        if (topLevelUl) {
            html.push('<ul class="nav navbar-nav" id="menu">');
            topLevelUl = false;
        } else {
            html.push('<ul class="dropdown-menu" role="menu">');
        }

        $(lst).each(function () {
            html.push(makeLI(this, topLevelUl, rootLvl))
        });
        html.push('</ul>');
        rootLvl = true;
        return html.join("\n");
    }

    function makeLI(elem, topLevelUl, rootLvl) {
        var html = [];
        if (elem.children && !rootLvl) {
            html.push('<li class="dropdown">');
        } else {
            html.push('<li class="dropdown">');
            rootLvl = false;
        }
        //html.push(elem.link);
        if (elem.value) {
            html.push('<a href="' + elem.value + '">' + elem.link + '</a>');
        }

        if (elem.children) {
            html.push(makeUL(elem.children, topLevelUl, rootLvl));
        }
        html.push('</li>');
        return html.join("\n");
    }

    var topLevelUl = true;
    $("#bs-example-navbar-collapse-1").html(makeUL(data.menu, topLevelUl, true));


    $(window).scroll(function (event) {

        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if($(this).scrollTop()<$nav.height())
        {
            if($("#custom-head").css("display","none"))
            {
                $("#custom-head").css("display","block");
                $("#ocultaMain").find("span").removeClass().addClass("fa fa-angle-double-up");
            }
        }
    });

   $("#facebook").parent().addClass("facebook");
   $("#twitter").parent().addClass("twitter");
   $("#youtube").parent().addClass("youtube");
   $("#abajo").parent().attr("id","ocultaMain");

    var n = 0;
    $('#ocultaMain').click(function () {
        if (n == '0') {

            document.getElementById("custom-head").style.display = "none";
            $(this).find("span").removeClass().addClass("fa fa-angle-double-down");
            $(".navbar-fixed-top").addClass('scrolled');
            $("#encabezado").css("margin-top", "50px");
            n = 1;
        } else {
            document.getElementById("custom-head").style.display = "block";
            $(this).find("span").removeClass().addClass("fa fa-angle-double-up");
            $(".navbar-fixed-top").removeClass('scrolled');
            $("#encabezado").css("margin-top", "0px");
            n = 0;

        }
    });


    $('#ocultaMain2').click(function () {

        if (n == '0') { //verifica si la opcion de N es igual a cero oculta el menu

            $(".manlistas").css("display", "none");
            document.getElementById("flefooter").className = "fa fa-angle-double-up";
            $("#footer").css("padding", "0");
            n = 1;
        } else {
            $(".manlistas").css("display", "block");
            document.getElementById("flefooter").className = "fa fa-angle-double-down";
            $("#footer").css("padding", "20px");

            n = 0;

        }
    });
    $(".facebook").click(function(){
        window.open("https://www.facebook.com/facultadnacional.saludpublica/","Facebook","width=700,height=400");
    });
    $(".twitter").click(function(){
        window.open("https://twitter.com/FacNSaludPublic","Twitter","width=700,height=400");
    });
    $(".youtube").click(function(){
        window.open("https://www.youtube.com/channel/UCtC4nePZ_rYxLekd_qH0I7g","YouTube","width=700,height=400");
    });

    // $('[data-toggle="tooltip"]').tooltip();
    // $(".js-select-basic-single").select2({placeholder: "Seleccione"});
    // $(".navbar-sidenav li").tooltip();
    // // $.datepicker.regional['es'] = {
    // //     closeText: 'Cerrar',
    // //     prevText: '< Ant',
    // //     nextText: 'Sig >',
    // //     currentText: 'Hoy',
    // //     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    // //     monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    // //     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    // //     dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    // //     dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    // //     weekHeader: 'Sm',
    // //     dateFormat: 'dd/mm/yy',
    // //     firstDay: 1,
    // //     isRTL: false,
    // //     showMonthAfterYear: false,
    // //     yearSuffix: ''
    // // };
    // // $.datepicker.setDefaults($.datepicker.regional['es']);

});

// $('.fecha').datepicker();

// $('.fecha2').datepicker({
//     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
//     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'],
//     changeMonth: true,
//     changeYear: true,
//     yearRange: "c-95:c+1"

// });
// $('.fecha3').datepicker({
//     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
//     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'],
//     changeMonth: true,
//     changeYear: true,
//     dateFormat: 'mm/dd/yy',
//     yearRange: "c-95:c+1"
// });


// $('#radioBtn a').on('click', function () {
//     var sel = $(this).data('title');
//     var tog = $(this).data('toggle');
//     $('#' + tog).prop('value', sel);

//     $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
//     $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
// });





