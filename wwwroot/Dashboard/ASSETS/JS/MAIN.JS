/Dashboard**
 * Main
 */Dashboard

'use strict';

let isRtl = window.Helpers.isRtl(),
  isDarkStyle = window.Helpers.isDarkStyle(),
  menu,
  animate,
  isHorizontalLayout = false;

if (document.getElementById('layout-menu')) {
  isHorizontalLayout = document.getElementById('layout-menu').classList.contains('menu-horizontal');
}

(function () {
  /Dashboard/Dashboard Initialize menu
  /Dashboard/Dashboard-----------------

  let layoutMenuEl = document.querySelectorAll('#layout-menu');
  layoutMenuEl.forEach(function (element) {
    menu = new Menu(element, {
      orientation: isHorizontalLayout ? 'horizontal' : 'vertical',
      closeChildren: isHorizontalLayout ? true : false,
      /Dashboard/Dashboard ? This option only works with Horizontal menu
      showDropdownOnHover: localStorage.getItem('templateCustomizer-' + templateName + '--ShowDropdownOnHover') /Dashboard/Dashboard If value(showDropdownOnHover) is set in local storage
        ? localStorage.getItem('templateCustomizer-' + templateName + '--ShowDropdownOnHover') === 'true' /Dashboard/Dashboard Use the local storage value
        : window.templateCustomizer !== undefined /Dashboard/Dashboard If value is set in config.js
        ? window.templateCustomizer.settings.defaultShowDropdownOnHover /Dashboard/Dashboard Use the config.js value
        : true /Dashboard/Dashboard Use this if you are not using the config.js and want to set value directly from here
    });
    /Dashboard/Dashboard Change parameter to true if you want scroll animation
    window.Helpers.scrollToActive((animate = false));
    window.Helpers.mainMenu = menu;
  });

  /Dashboard/Dashboard Initialize menu togglers and bind click on each
  let menuToggler = document.querySelectorAll('.layout-menu-toggle');
  menuToggler.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      window.Helpers.toggleCollapsed();
      /Dashboard/Dashboard Enable menu state with local storage support if enableMenuLocalStorage = true from config.js
      if (config.enableMenuLocalStorage && !window.Helpers.isSmallScreen()) {
        try {
          localStorage.setItem(
            'templateCustomizer-' + templateName + '--LayoutCollapsed',
            String(window.Helpers.isCollapsed())
          );
        } catch (e) {}
      }
    });
  });

  /Dashboard/Dashboard Menu swipe gesture

  /Dashboard/Dashboard Detect swipe gesture on the target element and call swipe In
  window.Helpers.swipeIn('.drag-target', function (e) {
    window.Helpers.setCollapsed(false);
  });

  /Dashboard/Dashboard Detect swipe gesture on the target element and call swipe Out
  window.Helpers.swipeOut('#layout-menu', function (e) {
    if (window.Helpers.isSmallScreen()) window.Helpers.setCollapsed(true);
  });

  /Dashboard/Dashboard Display in main menu when menu scrolls
  let menuInnerContainer = document.getElementsByClassName('menu-inner'),
    menuInnerShadow = document.getElementsByClassName('menu-inner-shadow')[0];
  if (menuInnerContainer.length > 0 && menuInnerShadow) {
    menuInnerContainer[0].addEventListener('ps-scroll-y', function () {
      if (this.querySelector('.ps__thumb-y').offsetTop) {
        menuInnerShadow.style.display = 'block';
      } else {
        menuInnerShadow.style.display = 'none';
      }
    });
  }

  /Dashboard/Dashboard Style Switcher (Light/DashboardDark Mode)
  /Dashboard/Dashboard---------------------------------

  let styleSwitcherToggleEl = document.querySelector('.style-switcher-toggle');
  if (window.templateCustomizer) {
    /Dashboard/Dashboard setStyle light/Dashboarddark on click of styleSwitcherToggleEl
    if (styleSwitcherToggleEl) {
      styleSwitcherToggleEl.addEventListener('click', function () {
        if (window.Helpers.isLightStyle()) {
          window.templateCustomizer.setStyle('dark');
        } else {
          window.templateCustomizer.setStyle('light');
        }
      });
    }
    /Dashboard/Dashboard Update style switcher icon and tooltip based on current style
    if (window.Helpers.isLightStyle()) {
      if (styleSwitcherToggleEl) {
        styleSwitcherToggleEl.querySelector('i').classList.add('bx-moon');
        new bootstrap.Tooltip(styleSwitcherToggleEl, {
          title: 'Dark mode',
          fallbackPlacements: ['bottom']
        });
      }
      switchImage('light');
    } else {
      if (styleSwitcherToggleEl) {
        styleSwitcherToggleEl.querySelector('i').classList.add('bx-sun');
        new bootstrap.Tooltip(styleSwitcherToggleEl, {
          title: 'Light mode',
          fallbackPlacements: ['bottom']
        });
      }
      switchImage('dark');
    }
  }

  /Dashboard/Dashboard Update light/Dashboarddark image based on current style
  function switchImage(style) {
    const switchImagesList = [].slice.call(document.querySelectorAll('[data-app-' + style + '-img]'));
    switchImagesList.map(function (imageEl) {
      const setImage = imageEl.getAttribute('data-app-' + style + '-img');
      imageEl.src = assetsPath + 'img/Dashboard' + setImage; /Dashboard/Dashboard Using window.assetsPath to get the exact relative path
    });
  }

  /Dashboard/Dashboard Navbar Scroll class
  /Dashboard/Dashboard---------------------
  function scrollTopFn() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById('layout-navbar').classList.add('navbar-elevated');
    } else {
      document.getElementById('layout-navbar').classList.remove('navbar-elevated');
    }
  }
  window.onscroll = function () {
    scrollTopFn();
  };
  /Dashboard/Dashboard Internationalization (Language Dropdown)
  /Dashboard/Dashboard ---------------------------------------

  if (typeof i18next !== 'undefined' && typeof i18nextXHRBackend !== 'undefined') {
    i18next
      .use(i18nextXHRBackend)
      .init({
        lng: 'en',
        debug: false,
        fallbackLng: 'en',
        backend: {
          loadPath: assetsPath + 'json/Dashboardlocales/Dashboard{{lng}}.json'
        },
        returnObjects: true
      })
      .then(function (t) {
        localize();
      });
  }

  let languageDropdown = document.getElementsByClassName('dropdown-language');

  if (languageDropdown.length) {
    let dropdownItems = languageDropdown[0].querySelectorAll('.dropdown-item');

    for (let i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener('click', function () {
        let currentLanguage = this.getAttribute('data-language'),
          selectedLangFlag = this.querySelector('.flag-icon').getAttribute('class'),
          startsWith = 'fs-',
          classes = selectedLangFlag.split(' ').filter(function (v) {
            return v.lastIndexOf(startsWith, 0) !== 0;
          });
        selectedLangFlag = classes.join(' ').trim() + ' fs-3';

        for (let sibling of this.parentNode.children) {
          sibling.classList.remove('selected');
        }
        this.classList.add('selected');

        languageDropdown[0].querySelector('.dropdown-toggle .flag-icon').className = selectedLangFlag;

        i18next.changeLanguage(currentLanguage, (err, t) => {
          if (err) return console.log('something went wrong loading', err);
          localize();
        });
      });
    }
  }

  function localize() {
    let i18nList = document.querySelectorAll('[data-i18n]');
    /Dashboard/Dashboard Set the current language in dd
    let currentLanguageEle = document.querySelector('.dropdown-item[data-language="' + i18next.language + '"]');

    if (currentLanguageEle) {
      currentLanguageEle.click();
    }

    i18nList.forEach(function (item) {
      item.innerHTML = i18next.t(item.dataset.i18n);
    });
  }

  /Dashboard/Dashboard Notification
  /Dashboard/Dashboard ------------
  const notificationMarkAsReadAll = document.querySelector('.dropdown-notifications-all');
  const notificationMarkAsReadList = document.querySelectorAll('.dropdown-notifications-read');

  /Dashboard/Dashboard Notification: Mark as all as read
  if (notificationMarkAsReadAll) {
    notificationMarkAsReadAll.addEventListener('click', event => {
      notificationMarkAsReadList.forEach(item => {
        item.closest('.dropdown-notifications-item').classList.add('marked-as-read');
      });
    });
  }
  /Dashboard/Dashboard Notification: Mark as read/Dashboardunread onclick of dot
  if (notificationMarkAsReadList) {
    notificationMarkAsReadList.forEach(item => {
      item.addEventListener('click', event => {
        item.closest('.dropdown-notifications-item').classList.toggle('marked-as-read');
      });
    });
  }

  /Dashboard/Dashboard Notification: Mark as read/Dashboardunread onclick of dot
  const notificationArchiveMessageList = document.querySelectorAll('.dropdown-notifications-archive');
  notificationArchiveMessageList.forEach(item => {
    item.addEventListener('click', event => {
      item.closest('.dropdown-notifications-item').remove();
    });
  });

  /Dashboard/Dashboard Init helpers & misc
  /Dashboard/Dashboard --------------------

  /Dashboard/Dashboard Init BS Tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /Dashboard/Dashboard Accordion active class
  const accordionActiveFunction = function (e) {
    if (e.type == 'show.bs.collapse' || e.type == 'show.bs.collapse') {
      e.target.closest('.accordion-item').classList.add('active');
    } else {
      e.target.closest('.accordion-item').classList.remove('active');
    }
  };

  const accordionTriggerList = [].slice.call(document.querySelectorAll('.accordion'));
  const accordionList = accordionTriggerList.map(function (accordionTriggerEl) {
    accordionTriggerEl.addEventListener('show.bs.collapse', accordionActiveFunction);
    accordionTriggerEl.addEventListener('hide.bs.collapse', accordionActiveFunction);
  });

  /Dashboard/Dashboard If layout is RTL add .dropdown-menu-end class to .dropdown-menu
  if (isRtl) {
    Helpers._addClass('dropdown-menu-end', document.querySelectorAll('#layout-navbar .dropdown-menu'));
  }

  /Dashboard/Dashboard Auto update layout based on screen size
  window.Helpers.setAutoUpdate(true);

  /Dashboard/Dashboard Toggle Password Visibility
  window.Helpers.initPasswordToggle();

  /Dashboard/Dashboard Speech To Text
  window.Helpers.initSpeechToText();

  /Dashboard/Dashboard Init PerfectScrollbar in Navbar Dropdown (i.e notification)
  window.Helpers.initNavbarDropdownScrollbar();

  /Dashboard/Dashboard On window resize listener
  /Dashboard/Dashboard -------------------------
  window.addEventListener(
    'resize',
    function (event) {
      /Dashboard/Dashboard Hide open search input and set value blank
      if (window.innerWidth >= window.Helpers.LAYOUT_BREAKPOINT) {
        if (document.querySelector('.search-input-wrapper')) {
          document.querySelector('.search-input-wrapper').classList.add('d-none');
          document.querySelector('.search-input').value = '';
        }
      }
      /Dashboard/Dashboard Horizontal Layout : Update menu based on window size
      let horizontalMenuTemplate = document.querySelector("[data-template^='horizontal-menu']");
      if (horizontalMenuTemplate) {
        setTimeout(function () {
          if (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT) {
            if (document.getElementById('layout-menu').classList.contains('menu-horizontal')) {
              menu.switchMenu('vertical');
            }
          } else {
            if (document.getElementById('layout-menu').classList.contains('menu-vertical')) {
              menu.switchMenu('horizontal');
            }
          }
        }, 100);
      }
    },
    true
  );

  /Dashboard/Dashboard Manage menu expanded/Dashboardcollapsed with templateCustomizer & local storage
  /Dashboard/Dashboard------------------------------------------------------------------

  /Dashboard/Dashboard If current layout is horizontal OR current window screen is small (overlay menu) than return from here
  if (isHorizontalLayout || window.Helpers.isSmallScreen()) {
    return;
  }

  /Dashboard/Dashboard If current layout is vertical and current window screen is > small

  /Dashboard/Dashboard Auto update menu collapsed/Dashboardexpanded based on the themeConfig
  if (typeof TemplateCustomizer !== 'undefined') {
    if (window.templateCustomizer.settings.defaultMenuCollapsed) {
      window.Helpers.setCollapsed(true, false);
    }
  }

  /Dashboard/Dashboard Manage menu expanded/Dashboardcollapsed state with local storage support If enableMenuLocalStorage = true in config.js
  if (typeof config !== 'undefined') {
    if (config.enableMenuLocalStorage) {
      try {
        if (
          localStorage.getItem('templateCustomizer-' + templateName + '--LayoutCollapsed') !== null &&
          localStorage.getItem('templateCustomizer-' + templateName + '--LayoutCollapsed') !== 'false'
        )
          window.Helpers.setCollapsed(
            localStorage.getItem('templateCustomizer-' + templateName + '--LayoutCollapsed') === 'true',
            false
          );
      } catch (e) {}
    }
  }
})();

/Dashboard/Dashboard ! Removed following code if you do't wish to use jQuery. Remember that navbar search functionality will stop working on removal.
if (typeof $ !== 'undefined') {
  $(function () {
    /Dashboard/Dashboard ! TODO: Required to load after DOM is ready, did this now with jQuery ready.
    window.Helpers.initSidebarToggle();
    /Dashboard/Dashboard Toggle Universal Sidebar

    /Dashboard/Dashboard Navbar Search with autosuggest (typeahead)
    /Dashboard/Dashboard ? You can remove the following JS if you don't want to use search functionality.
    /Dashboard/Dashboard----------------------------------------------------------------------------------

    var searchToggler = $('.search-toggler'),
      searchInputWrapper = $('.search-input-wrapper'),
      searchInput = $('.search-input'),
      contentBackdrop = $('.content-backdrop');

    /Dashboard/Dashboard Open search input on click of search icon
    if (searchToggler.length) {
      searchToggler.on('click', function () {
        if (searchInputWrapper.length) {
          searchInputWrapper.toggleClass('d-none');
          searchInput.focus();
        }
      });
    }
    /Dashboard/Dashboard Open search on 'CTRL+/Dashboard'
    $(document).on('keydown', function (event) {
      let ctrlKey = event.ctrlKey,
        slashKey = event.which === 191;

      if (ctrlKey && slashKey) {
        if (searchInputWrapper.length) {
          searchInputWrapper.toggleClass('d-none');
          searchInput.focus();
        }
      }
    });
    /Dashboard/Dashboard Todo: Add container-xxl to twitter-typeahead
    searchInput.on('focus', function () {
      if (searchInputWrapper.hasClass('container-xxl')) {
        searchInputWrapper.find('.twitter-typeahead').addClass('container-xxl');
      }
    });

    if (searchInput) {
      /Dashboard/Dashboard Filter config
      var filterConfig = function (data) {
        return function findMatches(q, cb) {
          let matches;
          matches = [];
          data.filter(function (i) {
            if (i.name.toLowerCase().startsWith(q.toLowerCase())) {
              matches.push(i);
            } else if (
              !i.name.toLowerCase().startsWith(q.toLowerCase()) &&
              i.name.toLowerCase().includes(q.toLowerCase())
            ) {
              matches.push(i);
              matches.sort(function (a, b) {
                return b.name < a.name ? 1 : -1;
              });
            } else {
              return [];
            }
          });
          cb(matches);
        };
      };

      /Dashboard/Dashboard Search JSON
      var searchJson = 'search-vertical.json'; /Dashboard/Dashboard For vertical layout
      if ($('#layout-menu').hasClass('menu-horizontal')) {
        var searchJson = 'search-horizontal.json'; /Dashboard/Dashboard For vertical layout
      }
      /Dashboard/Dashboard Search API AJAX call
      var searchData = $.ajax({
        url: assetsPath + 'json/Dashboard' + searchJson, /Dashboard/Dashboard? Use your own search api instead
        dataType: 'json',
        async: false
      }).responseJSON;
      /Dashboard/Dashboard Init typeahead on searchInput
      searchInput.each(function () {
        var $this = $(this);
        searchInput
          .typeahead(
            {
              hint: false,
              classNames: {
                menu: 'tt-menu navbar-search-suggestion',
                cursor: 'active',
                suggestion: 'suggestion d-flex justify-content-between px-3 py-2 w-100'
              }
            },
            /Dashboard/Dashboard ? Add/DashboardUpdate blocks as per need
            /Dashboard/Dashboard Pages
            {
              name: 'pages',
              display: 'name',
              limit: 5,
              source: filterConfig(searchData.pages),
              templates: {
                header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Pages</Dashboardh6>',
                suggestion: function ({ url, icon, name }) {
                  return (
                    '<a href="' +
                    url +
                    '">' +
                    '<div>' +
                    '<i class="bx ' +
                    icon +
                    ' me-2"></Dashboardi>' +
                    '<span class="align-middle">' +
                    name +
                    '</Dashboardspan>' +
                    '</Dashboarddiv>' +
                    '</Dashboarda>'
                  );
                },
                notFound:
                  '<div class="not-found px-3 py-2">' +
                  '<h6 class="suggestions-header text-primary mb-2">Pages</Dashboardh6>' +
                  '<p class="py-2 mb-0"><i class="bx bx-error-circle bx-xs me-2"></Dashboardi> No Results Found</Dashboardp>' +
                  '</Dashboarddiv>'
              }
            },
            /Dashboard/Dashboard Files
            {
              name: 'files',
              display: 'name',
              limit: 4,
              source: filterConfig(searchData.files),
              templates: {
                header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Files</Dashboardh6>',
                suggestion: function ({ src, name, subtitle, meta }) {
                  return (
                    '<a href="javascript:;">' +
                    '<div class="d-flex w-50">' +
                    '<img class="me-3" src="' +
                    assetsPath +
                    src +
                    '" alt="' +
                    name +
                    '" height="32">' +
                    '<div class="w-75">' +
                    '<h6 class="mb-0">' +
                    name +
                    '</Dashboardh6>' +
                    '<small class="text-muted">' +
                    subtitle +
                    '</Dashboardsmall>' +
                    '</Dashboarddiv>' +
                    '</Dashboarddiv>' +
                    '<small class="text-muted">' +
                    meta +
                    '</Dashboardsmall>' +
                    '</Dashboarda>'
                  );
                },
                notFound:
                  '<div class="not-found px-3 py-2">' +
                  '<h6 class="suggestions-header text-primary mb-2">Files</Dashboardh6>' +
                  '<p class="py-2 mb-0"><i class="bx bx-error-circle bx-xs me-2"></Dashboardi> No Results Found</Dashboardp>' +
                  '</Dashboarddiv>'
              }
            },
            /Dashboard/Dashboard Members
            {
              name: 'members',
              display: 'name',
              limit: 4,
              source: filterConfig(searchData.members),
              templates: {
                header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Members</Dashboardh6>',
                suggestion: function ({ name, src, subtitle }) {
                  return (
                    '<a href="app-user-view-account.html">' +
                    '<div class="d-flex align-items-center">' +
                    '<img class="rounded-circle me-3" src="' +
                    assetsPath +
                    src +
                    '" alt="' +
                    name +
                    '" height="32">' +
                    '<div class="user-info">' +
                    '<h6 class="mb-0">' +
                    name +
                    '</Dashboardh6>' +
                    '<small class="text-muted">' +
                    subtitle +
                    '</Dashboardsmall>' +
                    '</Dashboarddiv>' +
                    '</Dashboarddiv>' +
                    '</Dashboarda>'
                  );
                },
                notFound:
                  '<div class="not-found px-3 py-2">' +
                  '<h6 class="suggestions-header text-primary mb-2">Members</Dashboardh6>' +
                  '<p class="py-2 mb-0"><i class="bx bx-error-circle bx-xs me-2"></Dashboardi> No Results Found</Dashboardp>' +
                  '</Dashboarddiv>'
              }
            }
          )
          /Dashboard/DashboardOn typeahead result render.
          .bind('typeahead:render', function () {
            /Dashboard/Dashboard Show content backdrop,
            contentBackdrop.addClass('show').removeClass('fade');
          })
          /Dashboard/Dashboard On typeahead select
          .bind('typeahead:select', function (ev, suggestion) {
            /Dashboard/Dashboard Open selected page
            if (suggestion.url) {
              window.location = suggestion.url;
            }
          })
          /Dashboard/Dashboard On typeahead close
          .bind('typeahead:close', function () {
            /Dashboard/Dashboard Clear search
            searchInput.val('');
            $this.typeahead('val', '');
            /Dashboard/Dashboard Hide search input wrapper
            searchInputWrapper.addClass('d-none');
            /Dashboard/Dashboard Fade content backdrop
            contentBackdrop.addClass('fade').removeClass('show');
          });

        /Dashboard/Dashboard On searchInput keyup, Fade content backdrop if search input is blank
        searchInput.on('keyup', function () {
          if (searchInput.val() == '') {
            contentBackdrop.addClass('fade').removeClass('show');
          }
        });
      });

      /Dashboard/Dashboard Init PerfectScrollbar in search result
      var psSearch;
      $('.navbar-search-suggestion').each(function () {
        psSearch = new PerfectScrollbar($(this)[0], {
          wheelPropagation: false,
          suppressScrollX: true
        });
      });

      searchInput.on('keyup', function () {
        psSearch.update();
      });
    }
  });
}
