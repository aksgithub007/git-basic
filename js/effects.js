$(document).ready(function(){


        var logo = $('.logo img');
        var main_logo_url = logo.attr('src');
        var new_logo_url = "img/final-logo-1.png";
        console.log(' Image = '+main_logo_url);

        $(window).on('scroll', function(){
          if($(document).scrollTop() >= 50){
            $('.menubar').css({
              'position': 'fixed',
              'width': '100%',
              'top': '0px',
              'left': '0px',
              'z-index': 1000
            });

            change_logo(new_logo_url);

            $('.logo img').attr({'src':'img/final-logo-1.png'});
          }else{
            $('.menubar').css({
              'position': 'static',
              'top': '0px',
              'left': '0px',
              'z-index': 1000
            });

            change_logo(main_logo_url);

          }

        });

        function change_logo(temp_url){

          if(temp_url == main_logo_url){
            temp_width = "120px";
            temp_height = "120px";
          }else if(temp_url == new_logo_url){
            temp_width = "150px";
            temp_height = "auto";
          }

          $('.logo').css({
            'width': temp_width,
            'height': temp_height
          });
          logo.attr('src', temp_url);

        }

      });