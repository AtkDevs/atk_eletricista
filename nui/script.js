$(function() {

    window.addEventListener("message", function(event) {
      var item = event.data;

      if (item.showmenu) {
        $(".actionmenu").fadeIn();
        $('body').css('background-color', 'rgba(0, 0, 0, 0.15)')
      }  

      if (item.hidemenu) {
        $(".actionmenu").hide();
        $('body').css('background-color', 'transparent')  
        }

    });
    
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://atk_eletricista/exit', JSON.stringify({}));
        }
    };
});