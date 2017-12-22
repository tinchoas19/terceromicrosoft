jQuery(document).ready(function($){
  $(window).load(function(){
      var acc = document.getElementsByClassName('collapse-section');
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
          this.classList.toggle('active');
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        }
        if (i==0){
          if ($(acc[i]).parents('#disclaimer').length==0) {
            acc[i].classList.toggle('active');
            var panel = acc[i].nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          }
        }
      }

  });
});