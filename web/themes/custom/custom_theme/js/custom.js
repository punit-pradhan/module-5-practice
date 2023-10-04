// (function ($) {
//     $(document).ready(function () {
//       // Add click event listener to dropdown toggles
//       $('.navbar-nav .dropdown-toggle').on('click', function (e) {
//         e.preventDefault(); // Prevent the default link behavior
//         var $dropdownMenu = $(this).siblings('.dropdown-menu');
  
//         // Toggle the "show" class for the clicked dropdown menu
//         $dropdownMenu.toggleClass('show');
  
//         // Close other open dropdown menus at the same level
//         $dropdownMenu.parent().siblings().find('.dropdown-menu.show').removeClass('show');
//       });
  
//       // Close dropdown menus when clicking outside
//       $(document).on('click', function (e) {
//         if (!$('.navbar-nav .dropdown-toggle').is(e.target) && $('.navbar-nav .dropdown-toggle').has(e.target).length === 0 &&
//           !$('button[data-bs-toggle="dropdown"]').is(e.target) && $('button[data-bs-toggle="dropdown"]').has(e.target).length === 0) {
//           $('.navbar-nav .dropdown-menu').removeClass('show');
//         }
//       });
//     });
//   })(jQuery);
  