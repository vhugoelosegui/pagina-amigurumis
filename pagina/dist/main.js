"use strict";!function(){function i(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function n(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function o(){var i=$("#description"),n=i.height();return $(window).scrollTop()>$(window).height()-2*n}var s=!1;$("#sticky-navigation").removeClass("hidde"),$("#sticky-navigation").slideUp(0),console.log($(window).height()),$(window).scroll(function(){var e=o();e&&!s&&(s=!0,i()),!e&&s&&(s=!1,n())})}();
//# sourceMappingURL=main.js.map