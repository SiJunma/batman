$(document).ready(function () {
   let tabsItem = $('.nav-item');
   let btn = $('.nav-btn');

   tabsItem.on('click', function(event) {
      event.preventDefault();
      if ($(this).attr("class") !== $(btn).attr("class")) {
         let content = $(this).html();
         let activeContent = $(content).attr('href');

         $('.visible').toggleClass('visible');
         $(activeContent).toggleClass('visible');
         $('.active').toggleClass('active');
         $(this).toggleClass('active');
      }
   });
});
