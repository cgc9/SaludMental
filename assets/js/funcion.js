window.onload = function() { 
    var data= 
                  "<div class='container' style='padding-left:50px'>"+
                  "<div class='row'>"+
                      "<div class='col-md-3'>"+
                          "<img src='assets/img/logofnsp.png' alt='Universidad de Antioquia - Facultad Nacional de Salud Pública' style='width: 230px;'>"+
                      "</div>"+
                      "<div class='col-md-5' align='right'>S&iacute;guenos:&nbsp;&nbsp;"+
                          "<a class='fab fa-facebook-f circle facebook' data-toggle='tooltip' data-placement='bottom' title='Facebook'></a>"+
                          "<a class='fab fa-twitter circle twitter' data-toggle='tooltip' data-placement='bottom' title='Twitter'></a>"+
                          "<a class='fab fa-youtube circle youtube' data-toggle='tooltip' data-placement='bottom' title='Youtube'></a>"+
                      "</div>"+
                      "<div class='col-md-4' align='right'>"+
                          "<form class='navbar-form navbar-left'>"+
                              "<div class='form-group'>"+
                                  "<input type='text' class='form-control' placeholder='Escriba aquí su búsqueda'>"+
                              "</div>"+
                              "<button type='submit' class='btn btn-success'>Buscar</button>"+
                          "</form>"+
                      "</div>"+
                      "<div class='col-md-4'>"+
                          "<div id='cssmenu'>"+
                              "<ul>"+
                                  "<li class='active'><a href='#'>Ingresar</a>"+
                                      "<ul>"+
                                          "<li><a href='iniciarsesion.html'>Iniciar sesion</a></li>"+
                                          "<li><a href='#'>Registrarse</a></li>"+
                                          "<li><a href='#'>Obtener/ Recuperar</a></li>"+
                                      "</ul>"+
                                  "</li>"+
                              "</ul>"+
                          "</div>"+
                      "</div>"+
                  "</div>"+
              "</div>"
      $('#custom-head').append(data);
  
      var men=
                '<div class="container">'+
                '<nav class="navbar navbar-default navbar-expand-md ">'+
                    '<div class="container-fluid">'+
                        '<div class="navbar-header">'+
                            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'+
                                '<span class="icon-bar"></span>'+
                                '<span class="icon-bar"></span>'+
                                '<span class="icon-bar"></span>'+
                            '</button>'+
                        '</div>'+
                        '<div class="collapse navbar-collapse" style="padding-right:px;" id="myNavbar">'+
                          
                            '<ul class="nav navbar-nav ">'+
                                '<li class="dropdown">'+
                                    '<a style="color:white"  href="index.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inicio</a>'+
                                '</li>'+
                                '<li class="dropdown">'+
                                    '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Apropiación social <span class="caret"></span></a>'+
                                    '<ul class="dropdown-menu">'+
                                        '<li><a href="webinar.html"><i class=""></i>Webinars</a></li>'+
                                        '<li><a href="fonoteca.html"><i class=""></i>Fonotecas</a></li>'+
                                    '</ul>'+
                                '</li>'+
                                '<li class="dropdown">'+
                                    '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Salud mental online<span class="caret"></span></a>'+
                                    '<ul class="dropdown-menu">'+
                                        '<li><a href=""><i class=""></i>Telesalud</a></li>'+
                                        '<li><a href=""><i class=""></i>Línea de la felicidad</a></li>'+
                                        '<li><a href=""><i class=""></i>App SAMU</a></li>'+
                                    '</ul>'+
                                '</li>'+
                                '<li class="dropdown">'+
                                    '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Educación<span class="caret"></span></a>'+
                                    '<ul class="dropdown-menu">'+
                                        '<li><a href=""><i class=""></i>Educación no formal</a></li>'+
                                    
                                    '</ul>'+
                                '</li>'+
                                
                                
                                // <!-- <li class="dropdown">
                                //     <a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"
                                //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                //         Opción 4 <span class="caret"></span>
                                //     </a>
                                //     <ul class="dropdown-menu">
                                //         <li><a href=""><i class=""></i>Op1</a></li>
                                //     </ul>
                                // </li>
                                // <li class="dropdown">
                                //     <a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"
                                //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                //         Opción 5 <span class="caret"></span>
                                //     </a>
                                //     <ul class="dropdown-menu">
                                //         <li><a href=""><i class=""></i>Op1</a></li>
                                //     </ul>
                                // </li> -->
                           '</ul>'+
                            '<ul class="nav navbar-nav navbar-right">'+
                                '<li class="dropdown">'+
                                    '<a style="color:white"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Datos & software</a>'+
                                '</li>'+
                                '<li><a id="ocultaMain" style="color:aliceblue; " class="btn btn-sm-1" role="button" aria-haspopup="true" aria-expanded="false"><span id="abajo" class="fa fa-angle-double-up"></span></a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</nav>'+
            '</div>'

        $('menu').append(men)
  
  }
  
  
  
  
  
  
  