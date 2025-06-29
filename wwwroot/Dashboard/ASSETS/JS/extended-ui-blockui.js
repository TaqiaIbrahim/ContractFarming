/Dashboard**
 * Block UI (jquery)
 */Dashboard

'use strict';

$(function () {
  var section = $('#section-block'),
    sectionBlock = $('.btn-section-block'),
    sectionBlockOverlay = $('.btn-section-block-overlay'),
    sectionBlockSpinner = $('.btn-section-block-spinner'),
    sectionBlockCustom = $('.btn-section-block-custom'),
    sectionBlockMultiple = $('.btn-section-block-multiple'),
    cardSection = $('#card-block'),
    cardBlock = $('.btn-card-block'),
    cardBlockOverlay = $('.btn-card-block-overlay'),
    cardBlockSpinner = $('.btn-card-block-spinner'),
    cardBlockCustom = $('.btn-card-block-custom'),
    cardBlockMultiple = $('.btn-card-block-multiple'),
    pageBlock = $('.btn-page-block'),
    pageBlockOverlay = $('.btn-page-block-overlay'),
    pageBlockSpinner = $('.btn-page-block-spinner'),
    pageBlockCustom = $('.btn-page-block-custom'),
    pageBlockMultiple = $('.btn-page-block-multiple'),
    formSection = $('.form-block'),
    formBlock = $('.btn-form-block'),
    formBlockOverlay = $('.btn-form-block-overlay'),
    formBlockSpinner = $('.btn-form-block-spinner'),
    formBlockCustom = $('.btn-form-block-custom'),
    formBlockMultiple = $('.btn-form-block-multiple');

  /Dashboard/Dashboard Block UI
  /Dashboard/Dashboard --------------------------------------------------------------------

  /Dashboard/Dashboard Default
  if (sectionBlock.length && section.length) {
    sectionBlock.on('click', function () {
      $('#section-block').block({
        message: '<div class="spinner-border text-white" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Overlay Color
  if (sectionBlockOverlay.length && section.length) {
    sectionBlockOverlay.on('click', function () {
      $('#section-block').block({
        message: '<div class="spinner-border text-primary" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.8
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Spinner
  if (sectionBlockSpinner.length && section.length) {
    sectionBlockSpinner.on('click', function () {
      $('#section-block').block({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv>',
        timeout: 100000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Message
  if (sectionBlockCustom.length && section.length) {
    sectionBlockCustom.on('click', function () {
      $('#section-block').block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Multiple Message
  if (sectionBlockMultiple.length && section.length) {
    sectionBlockMultiple.on('click', function () {
      $('#section-block').block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        },
        timeout: 1000,
        onUnblock: function () {
          $('#section-block').block({
            message: '<p class="mb-0">Almost Done...</Dashboardp>',
            timeout: 1000,
            css: {
              backgroundColor: 'transparent',
              color: '#fff',
              border: '0'
            },
            overlayCSS: {
              opacity: 0.25
            },
            onUnblock: function () {
              $('#section-block').block({
                message: '<div class="p-3 bg-success">Success</Dashboarddiv>',
                timeout: 500,
                css: {
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '0'
                },
                overlayCSS: {
                  opacity: 0.25
                }
              });
            }
          });
        }
      });
    });
  }

  /Dashboard/Dashboard Card Blocking
  /Dashboard/Dashboard --------------------------------------------------------------------

  /Dashboard/Dashboard Default
  if (cardBlock.length && cardSection.length) {
    cardBlock.on('click', function () {
      $('#card-block').block({
        message: '<div class="spinner-border text-white" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Overlay Color
  if (cardBlockOverlay.length && cardSection.length) {
    cardBlockOverlay.on('click', function () {
      $('#card-block').block({
        message: '<div class="spinner-border text-primary" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.8
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Spinner
  if (cardBlockSpinner.length && cardSection.length) {
    cardBlockSpinner.on('click', function () {
      $('#card-block').block({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Message
  if (cardBlockCustom.length && cardSection.length) {
    cardBlockCustom.on('click', function () {
      $('#card-block').block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Multiple Message
  if (cardBlockMultiple.length && cardSection.length) {
    cardBlockMultiple.on('click', function () {
      $('#card-block').block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        },
        timeout: 1000,
        onUnblock: function () {
          $('#card-block').block({
            message: '<p class="mb-0">Almost Done...</Dashboardp>',
            timeout: 1000,
            css: {
              backgroundColor: 'transparent',
              color: '#fff',
              border: '0'
            },
            overlayCSS: {
              opacity: 0.25
            },
            onUnblock: function () {
              $('#card-block').block({
                message: '<div class="p-3 bg-success">Success</Dashboarddiv>',
                timeout: 500,
                css: {
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '0'
                },
                overlayCSS: {
                  opacity: 0.25
                }
              });
            }
          });
        }
      });
    });
  }

  /Dashboard/Dashboard Page Blocking
  /Dashboard/Dashboard --------------------------------------------------------------------

  /Dashboard/Dashboard Default
  if (pageBlock.length) {
    pageBlock.on('click', function () {
      $.blockUI({
        message: '<div class="spinner-border text-white" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Overlay Color
  if (pageBlockOverlay.length) {
    pageBlockOverlay.on('click', function () {
      $.blockUI({
        message: '<div class="spinner-border text-primary" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.8
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Spinner
  if (pageBlockSpinner.length) {
    pageBlockSpinner.on('click', function () {
      $.blockUI({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Message
  if (pageBlockCustom.length) {
    pageBlockCustom.on('click', function () {
      $.blockUI({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Multiple Message
  if (pageBlockMultiple.length) {
    pageBlockMultiple.on('click', function () {
      $.blockUI({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        },
        timeout: 1000,
        onUnblock: function () {
          $.blockUI({
            message: '<p class="mb-0">Almost Done...</Dashboardp>',
            timeout: 1000,
            css: {
              backgroundColor: 'transparent',
              color: '#fff',
              border: '0'
            },
            overlayCSS: {
              opacity: 0.5
            },
            onUnblock: function () {
              $.blockUI({
                message: '<div class="p-3 bg-success">Success</Dashboarddiv>',
                timeout: 500,
                css: {
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '0'
                },
                overlayCSS: {
                  opacity: 0.5
                }
              });
            }
          });
        }
      });
    });
  }

  /Dashboard/Dashboard Form Blocking
  /Dashboard/Dashboard --------------------------------------------------------------------

  /Dashboard/Dashboard Default
  if (formBlock.length && formSection.length) {
    formBlock.on('click', function () {
      formSection.block({
        message: '<div class="spinner-border text-white" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Overlay Color
  if (formBlockOverlay.length && formSection.length) {
    formBlockOverlay.on('click', function () {
      formSection.block({
        message: '<div class="spinner-border text-primary" role="status"></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.8
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Spinner
  if (formBlockSpinner.length && formSection.length) {
    formBlockSpinner.on('click', function () {
      formSection.block({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Custom Message
  if (formBlockCustom.length && formSection.length) {
    formBlockCustom.on('click', function () {
      formSection.block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        timeout: 1000,
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
    });
  }
  /Dashboard/Dashboard Multiple Message
  if (formBlockMultiple.length && formSection.length) {
    formBlockMultiple.on('click', function () {
      formSection.block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</Dashboardp> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv> <div class="sk-rect sk-wave-rect"></Dashboarddiv></Dashboarddiv> </Dashboarddiv>',
        css: {
          backgroundColor: 'transparent',
          color: '#fff',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        },
        timeout: 1000,
        onUnblock: function () {
          formSection.block({
            message: '<p class="mb-0">Almost Done...</Dashboardp>',
            timeout: 1000,
            css: {
              backgroundColor: 'transparent',
              border: '0'
            },
            overlayCSS: {
              opacity: 0.25
            },
            onUnblock: function () {
              formSection.block({
                message: '<div class="p-3 bg-success">Success</Dashboarddiv>',
                timeout: 500,
                css: {
                  backgroundColor: 'transparent',
                  border: '0'
                },
                overlayCSS: {
                  opacity: 0.25
                }
              });
            }
          });
        }
      });
    });
  }
});
