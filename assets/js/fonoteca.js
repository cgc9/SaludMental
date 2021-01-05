$(document).ready(function() {
    var table =$('#tblradio').DataTable({
                   "destroy":true,
                   "language":{
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                        "sFirst":    "Primero",
                        "sLast":     "Último",
                        "sNext":     "Siguiente",
                        "sPrevious": "Anterior"} 
               },
       "oAria": {
           "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
           "sSortDescending": ": Activar para ordenar la columna de manera descendente"
       }
           });
   
     $('#fechinput').on( 'keyup', function () {
                   table
                   .columns(0)
                   .search( this.value )
                   .draw();
               } );
     $('#temainput').on( 'keyup', function () {
                   table
                   .columns(1)
                   .search( this.value )
                   .draw();
               } );
     $('#invinput').on( 'keyup', function () {
                   table
                   .columns(2)
                   .search( this.value )
                   .draw();
               } );
     $('#btnmas').click(function(){
               $('#fecha_grab').val('');
               $('#intema').val('');
               $('#ininvitados').val('');
     });
     $("#btnbuscar").on("click",function(e)
           {    e.preventDefault();   
               var buscar = $("#inpubus");
               buscar.val(buscar.val().replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*")); 
               var textarea = $('#formdocumentacion');    
               var enew = '';  
               if(buscar.val()!="")
               {
                       enew = textarea.html().replace(/(<mark>|<\/mark>)/ig, "");    
                   textarea.html(enew);  
                   var query = new RegExp("("+buscar.val()+")", "gi");    
                   newtext= textarea.html().replace(query, "<mark>$1</mark>");    
                   newtext= newtext.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"</mark><mark>");    
       
                   textarea.html(newtext); 
               }
               else
               {    
                   enew = textarea.html().replace(/(<mark>|<\/mark>)/ig, "");    
                   textarea.html(enew);
                   location.reload();  
               }
   
   
               
               
           });
   
     $('#tblradio').on('click','.btndescarga', function(){
     //table.row($(this).parents('tr')).remove().draw(false);
     // var src = $(this).closest("tr").find("td:nth-child(4) audio").attr("src");
     // $(this).attr("href",src);
     var link = document.createElement('a');
   link.href = "audio.MP3";
   link.setAttribute('download', "DownloadedFilenameHere.mp3");
   document.getElementsByTagName("body")[0].appendChild(link);
   // Firefox
   if (document.createEvent) {
       var event = document.createEvent("MouseEvents");
       event.initEvent("click", true, true);
       link.dispatchEvent(event);
   }
   // IE
   else if (link.click) {
       link.click();
   }
   link.parentNode.removeChild(link);
   });
     
     var myplayist =new jPlayerPlaylist({
           jPlayer: "#jquery_jplayer_2",
           cssSelectorAncestor: "#jp_container_2"
       }, [
           {
               title:"La salud, el medio ambiente y enfermedades asociadas a la pobreza",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/feb/spm03022017.mp3"
           },
           {
               title:"Alternativas al uso de plaguicidas",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/feb/spp10022017.mp3"
           },
           {
               title:"Contaminación del aire",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/feb/spc17022017.mp3"
           },
           {
               title:"Cuidado y protección de las microcuencas",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/feb/spc24020217.mp3"
           },
           {
               title:"Salud mental y posconflicto",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/mar/ssm03032017.mp3"
           },
           {
               title:"Salud mental indígena",
               free:true,
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/mar/ssm10032017.mp3"
           },
           {
               title:"Salud mental, paz y posconflicto",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/mar/spp24032017.mp3"
           },
           {
               title:"Capacitación a grupos especiales de población para desarrollar actividades educativas y formativas en promoción y prevención de la salud en el marco de la estrategia de rehabilitación basada en comunidad",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/abr/spe0704207.mp3"
           },
           {
               title:"Proyecto de Inclusión: 'Crecer con Dignidad'",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/abr/spn21042017.mp3"
           },
           {
               title:"Sistema de atención y protección a mujeres víctimas de violencia basada en género",
               free:true,
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/abr/sdm28042017.mp3"
           },
           {
               title:"El derecho a la salud el caso de un establecimiento penitenciario y carcelario en Antioquia 2014",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/may/spp12052017.mp3"
           },
           {
               title:"Salud pública en establecimientos carcelarios",
               free: true,
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/may/sps19052017.mp3"
           },
           {
               title:"La ESCNNA en Medellín, Panorama sobre la situación",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/jun/ses0206207.mp3"
           },
           {
               title:"Turismo responsable. La ESCNNA en el contexto de viajes y turismo",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/jun/spm08062017.mp3"
           },
           {
               title:"Centro Casa Vida de la Secretaría de Inclusión Social de Medellín",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/jun/sps16062017.mp3"
           },
           {
               title:"Acciones Plantón en el Museo Botero&nbsp;",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/jun/ssp23062017.mp3"
           },
           {
               title:"La experiencia de GIDI",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/jun/spg30062017.mp3"
           },
           {
               title:"Alternativas de desarrollo en territorios mineros",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/jul/spp18072017.mp3"
           },
           {
               title:"Primera parte: Proyecto ASVA- Gobernación de Antioquia y Facultad Nacional de Salud Pública - Universidad de Antioquia para Seguridad Vial. Forensis Antioquia 2016&nbsp;",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/ago/ssv04082017.mp3"
           },
           {
               title:"Condiciones de salud ambiental en las zonas rurales de explotación aurífera de subsistencia: caso del Departamento de Antioquia",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/sep/spm08092017.mp3"
           },
           {
               title:"El derecho a la salud y la paz",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/sep/spp22092017.mp3"
           },
           {
               title:"10° Congreso Internacional de Salud Pública: Salud, paz y equidad social.",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/sep/spp29092017.mp3"
           },
           {
               title:"10° Congreso Internacional de Salud Pública: Salud, paz y equidad social.",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/oct/cpc06102017.mp3"
           },
           {
               title:"Primera parte: 10° Congreso Internacional de Salud Pública: Salud, paz y equidad social.",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/oct/spc13102017.mp3"
           },
           {
               title:"Segunda parte:10° Congreso Internacional de Salud Pública: Salud, paz y equidad social.",
               mp3:"http://saludpublicavirtual.udea.edu.co/audio/radio/2017/oct/cpc27102017.mp3"
           }
       ], {
           swfPath: "assests/js",
           supplied: "oga, mp3",
           wmode: "window",
           useStateClassSkin: true,
           autoBlur: false,
           smoothPlayBar: true,
           keyEnabled: false
       });
   
    $('#btnenviarrad').click(function(){
       var fecha = $('#fecha_grab').val();
       var tema =  $('#intema').val();
       var invitado =$('#ininvitados').val();
       var musica = "http://saludpublicavirtual.udea.edu.co/audio/radio/2017/oct/cpc27102017.mp3";
       myplayist.add({title:tema,artist:invitado,mp3:musica});
       // table.row.add([fecha,tema,invitado,'<a href="#" title="'+tema+'" target="_blank" class="btn btn-success btn-xs" >Ver</a>']).draw(true);
      
   $('#md_radio').modal("hide");
   
     });
    //comentarios plugin
       var commentsArray = [{
      "id": 1,
      "parent": null,
      "created": "2015-01-01",
      "modified": "2015-01-01",
      "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "pings": [],
      "creator": 6,
      "fullname": "Simon Powell",
      "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 3,
      "user_has_upvoted": false,
      "is_new": false
   },
   // ...
   ]
   
   var usersArray = [{
       id: 1,
       fullname: "Current User",
       email: "current.user@viima.com",
       profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
      },
      // ...
   ]
               
                   var saveComment = function(data) {
   
                       // Convert pings to human readable format
                       $(Object.keys(data.pings)).each(function(index, userId) {
                           var fullname = data.pings[userId];
                           var pingText = '@' + fullname;
                           data.content = data.content.replace(new RegExp('@' + userId, 'g'), pingText);
                       });
   
                       return data;
                   }
                   $('#comments-container').comments({
                       profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png',
                       currentUserId: 1,
                       roundProfilePictures: true,
                       textareaRows: 1,
                       enableAttachments: true,
                       enableHashtags: true,
                       enablePinging: true,
                       searchUsers: function(term, success, error) {
                           setTimeout(function() {
                               success(usersArray.filter(function(user) {
                                   var containsSearchTerm = user.fullname.toLowerCase().indexOf(term.toLowerCase()) != -1;
                                   var isNotSelf = user.id != 1;
                                   return containsSearchTerm && isNotSelf;
                               }));
                           }, 500);
                       },
                       getComments: function(success, error) {
                           setTimeout(function() {
                               success(commentsArray);
                           }, 500);
                       },
                       postComment: function(data, success, error) {
                           setTimeout(function() {
                               success(saveComment(data));
                           }, 500);
                       },
                       putComment: function(data, success, error) {
                           setTimeout(function() {
                               success(saveComment(data));
                           }, 500);
                       },
                       deleteComment: function(data, success, error) {
                           setTimeout(function() {
                               success();
                           }, 500);
                       },
                       upvoteComment: function(data, success, error) {
                           setTimeout(function() {
                               success(data);
                           }, 500);
                       },
                       uploadAttachments: function(dataArray, success, error) {
                           setTimeout(function() {
                               success(dataArray);
                           }, 500);
                       },
                   });
   
   
   });