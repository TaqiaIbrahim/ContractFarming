/Dashboard**
 * UI Modals
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard Animation Dropdown
  const animationDropdown = document.querySelector('#animation-dropdown'),
    animationModal = document.querySelector('#animationModal');
  if (animationDropdown) {
    animationDropdown.onchange = function () {
      animationModal.classList = '';
      animationModal.classList.add('modal', 'animate__animated', this.value);
    };
  }

  /Dashboard/Dashboard On hiding modal, remove iframe video/Dashboardaudio to stop playing
  const youTubeModal = document.querySelector('#youTubeModal'),
    youTubeModalVideo = youTubeModal.querySelector('iframe');
  youTubeModal.addEventListener('hidden.bs.modal', function () {
    youTubeModalVideo.setAttribute('src', '');
  });

  /Dashboard/Dashboard Function to get and auto play youTube video
  const autoPlayYouTubeModal = function () {
    const modalTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="modal"]'));
    modalTriggerList.map(function (modalTriggerEl) {
      modalTriggerEl.onclick = function () {
        const theModal = this.getAttribute('data-bs-target'),
          videoSRC = this.getAttribute('data-theVideo'),
          videoSRCauto = `${videoSRC}?autoplay=1`,
          modalVideo = document.querySelector(`${theModal} iframe`);
        if (modalVideo) {
          modalVideo.setAttribute('src', videoSRCauto);
        }
      };
    });
  };

  /Dashboard/Dashboard Calling function on load
  autoPlayYouTubeModal();

  /Dashboard/Dashboard Onboarding modal carousel height animation
  document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('slide.bs.carousel', event => {
      /Dashboard/Dashboard ! Todo: Convert to JS (animation) (jquery)
      var nextH = $(event.relatedTarget).height();
      $(carousel).find('.active.carousel-item').parent().animate(
        {
          height: nextH
        },
        500
      );
    });
  });
})();
