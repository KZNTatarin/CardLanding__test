   var count = ['1', '2', '3', '4'];
   var sectionName = ['About', 'Technology', 'portfolio', 'Contacts'];
   var swiper = new Swiper(".mySwiper", {
       direction: "vertical",
       spaceBetween: 160,
       mousewheel: true,
       pagination: {
           el: ".swiper-pagination",
           clickable: true,
           renderBullet: function (index, className) {
               return '<p class="' + className + '">' + ('#' + (count[index])) + '<br>' + (sectionName[index]) + '</br>' + "</p>";
           },
       },
       speed: 1000,
   });

  