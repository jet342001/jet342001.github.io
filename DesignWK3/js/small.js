(function() {

    'use strict';
  
    var menuToggle = document.getElementById('menu-toggle');
    var sideMenu = document.getElementById('side-menu');
    var closeMenu = document.getElementById('menu-close');
  
    menuToggle.addEventListener('click', function() {
      var menu = document.getElementById('side-menu');
      menu.classList.add('sideMenuToggle');
    });
  
    closeMenu.addEventListener('click', function() {
      var menu = document.getElementById('side-menu');
      menu.classList.remove('sideMenuToggle');
    });
  })();
  
  (function(easing, duration, increment) {
  
    'use strict';
  
    var menuItems = document.getElementsByClassName('scrollable-link');
    var duration = duration || 1000;
    var increment = increment || 25;
    var destinationHash = '';
    var destination = null;
    var easingPatterns = {
      'easeInQuad': function(time) {
        return time * time;
      }, // accelerating from zero velocity
      'easeOutQuad': function(time) {
        return time * (2 - time);
      }, // decelerating to zero velocity
      'easeInOutQuad': function(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
      }, // acceleration until halfway, then deceleration
      'easeInCubic': function(time) {
        return time * time * time;
      }, // accelerating from zero velocity
      'easeOutCubic': function(time) {
        return (--time) * time * time + 1;
      }, // decelerating to zero velocity
      'easeInOutCubic': function(time) {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
      }, // acceleration until halfway, then deceleration
      'easeInQuart': function(time) {
        return time * time * time * time;
      }, // accelerating from zero velocity
      'easeOutQuart': function(time) {
        return 1 - (--time) * time * time * time;
      }, // decelerating to zero velocity
      'easeInOutQuart': function(time) {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
      }, // acceleration until halfway, then deceleration
      'easeInQuint': function(time) {
        return time * time * time * time * time;
      }, // accelerating from zero velocity
      'easeOutQuint': function(time) {
        return 1 + (--time) * time * time * time * time;
      }, // decelerating to zero velocity
      'easeInOutQuint': function(time) {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
      }, // acceleration until halfway, then deceleration
      'linear': function(time) {
          return time;
        } // no easing, no acceleration
    };
    var easingPattern = easingPatterns[easing || 'easeInOutQuad'];
  
    function scrollTo(to, duration, increment) {
      var start = window.pageYOffset;
      var change = to - start;
  
      var animateScroll = function(elapsedTime) {
        elapsedTime += increment;
        var position = ease(elapsedTime, start, change, duration);
        document.body.scrollTop = position;
        if (elapsedTime < duration) {
          setTimeout(function() {
            animateScroll(elapsedTime);
          }, increment);
        }
      };
  
      animateScroll(0);
    };
  
    function ease(currentTime, start, change, duration) {
      currentTime /= duration;
      if (currentTime < 1) {
        return start + change * easingPattern(currentTime);
      } else {
        return start + change;
      }
    };
  
    Array.prototype.forEach.call(menuItems, function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        destinationHash = e.srcElement.hash;
        destination = document.getElementById(destinationHash.replace('#', ''));
        if (destination) {
          scrollTo(destination.offsetTop, duration, increment);
        }
      });
    });
  })();
  
  (function() {
  
    'use strict';
  
    var sectionTags = document.getElementsByTagName("section");
    var sections = [];
    var i = 0;
  
    Array.prototype.forEach.call(sectionTags, function(section) {
      sections[section.id] = section.offsetTop;
    });
    
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active').classList.remove('active');
          document.querySelector('a[href*=' + i + ']').classList.add('active');
        }
      }
    };
  })();
  
  
  Resources