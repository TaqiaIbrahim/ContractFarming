/Dashboard**
 * App Calendar
 */Dashboard

/Dashboard**
 * ! If both start and end dates are same Full calendar will nullify the end date value.
 * ! Full calendar will end the event on a day before at 12:00:00AM thus, event won't extend to the end date.
 * ! We are getting events from a separate file named app-calendar-events.js. You can add or remove events from there.
 *
 **/Dashboard

'use strict';

let direction = 'ltr';

if (isRtl) {
  direction = 'rtl';
}

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const calendarEl = document.getElementById('calendar'),
      appCalendarSidebar = document.querySelector('.app-calendar-sidebar'),
      addEventSidebar = document.getElementById('addEventSidebar'),
      appOverlay = document.querySelector('.app-overlay'),
      calendarsColor = {
        Business: 'primary',
        Holiday: 'success',
        Personal: 'danger',
        Family: 'warning',
        ETC: 'info'
      },
      offcanvasTitle = document.querySelector('.offcanvas-title'),
      btnToggleSidebar = document.querySelector('.btn-toggle-sidebar'),
      btnAddEvent = document.querySelector('.btn-add-event'),
      btnUpdateEvent = document.querySelector('.btn-update-event'),
      btnDeleteEvent = document.querySelector('.btn-delete-event'),
      btnCancel = document.querySelector('.btn-cancel'),
      eventTitle = document.querySelector('#eventTitle'),
      eventStartDate = document.querySelector('#eventStartDate'),
      eventEndDate = document.querySelector('#eventEndDate'),
      eventUrl = document.querySelector('#eventURL'),
      eventLabel = $('#eventLabel'), /Dashboard/Dashboard ! Using jquery vars due to select2 jQuery dependency
      eventGuests = $('#eventGuests'), /Dashboard/Dashboard ! Using jquery vars due to select2 jQuery dependency
      eventLocation = document.querySelector('#eventLocation'),
      eventDescription = document.querySelector('#eventDescription'),
      allDaySwitch = document.querySelector('.allDay-switch'),
      selectAll = document.querySelector('.select-all'),
      filterInput = [].slice.call(document.querySelectorAll('.input-filter')),
      inlineCalendar = document.querySelector('.inline-calendar');

    let eventToUpdate,
      currentEvents = events, /Dashboard/Dashboard Assign app-calendar-events.js file events (assume events from API) to currentEvents (browser store/Dashboardobject) to manage and update calender events
      isFormValid = false,
      inlineCalInstance;

    /Dashboard/Dashboard Init event Offcanvas
    const bsAddEventSidebar = new bootstrap.Offcanvas(addEventSidebar);

    /Dashboard/Dashboard! TODO: Update Event label and guest code to JS once select removes jQuery dependency
    /Dashboard/Dashboard Event Label (select2)
    if (eventLabel.length) {
      function renderBadges(option) {
        if (!option.id) {
          return option.text;
        }
        var $badge =
          "<span class='badge badge-dot bg-" + $(option.element).data('label') + " me-2'> " + '</Dashboardspan>' + option.text;

        return $badge;
      }
      eventLabel.wrap('<div class="position-relative"></Dashboarddiv>').select2({
        placeholder: 'Select value',
        dropdownParent: eventLabel.parent(),
        templateResult: renderBadges,
        templateSelection: renderBadges,
        minimumResultsForSearch: -1,
        escapeMarkup: function (es) {
          return es;
        }
      });
    }

    /Dashboard/Dashboard Event Guests (select2)
    if (eventGuests.length) {
      function renderGuestAvatar(option) {
        if (!option.id) {
          return option.text;
        }
        var $avatar =
          "<div class='d-flex flex-wrap align-items-center'>" +
          "<div class='avatar avatar-xs me-2'>" +
          "<img src='" +
          assetsPath +
          'img/Dashboardavatars/Dashboard' +
          $(option.element).data('avatar') +
          "' alt='avatar' class='rounded-circle' /Dashboard>" +
          '</Dashboarddiv>' +
          option.text +
          '</Dashboarddiv>';

        return $avatar;
      }
      eventGuests.wrap('<div class="position-relative"></Dashboarddiv>').select2({
        placeholder: 'Select value',
        dropdownParent: eventGuests.parent(),
        closeOnSelect: false,
        templateResult: renderGuestAvatar,
        templateSelection: renderGuestAvatar,
        escapeMarkup: function (es) {
          return es;
        }
      });
    }

    /Dashboard/Dashboard Event start (flatpicker)
    if (eventStartDate) {
      var start = eventStartDate.flatpickr({
        enableTime: true,
        altFormat: 'Y-m-dTH:i:S',
        onReady: function (selectedDates, dateStr, instance) {
          if (instance.isMobile) {
            instance.mobileInput.setAttribute('step', null);
          }
        }
      });
    }

    /Dashboard/Dashboard Event end (flatpicker)
    if (eventEndDate) {
      var end = eventEndDate.flatpickr({
        enableTime: true,
        altFormat: 'Y-m-dTH:i:S',
        onReady: function (selectedDates, dateStr, instance) {
          if (instance.isMobile) {
            instance.mobileInput.setAttribute('step', null);
          }
        }
      });
    }

    /Dashboard/Dashboard Inline sidebar calendar (flatpicker)
    if (inlineCalendar) {
      inlineCalInstance = inlineCalendar.flatpickr({
        monthSelectorType: 'static',
        inline: true
      });
    }

    /Dashboard/Dashboard Event click function
    function eventClick(info) {
      eventToUpdate = info.event;
      if (eventToUpdate.url) {
        info.jsEvent.preventDefault();
        window.open(eventToUpdate.url, '_blank');
      }
      bsAddEventSidebar.show();

      btnAddEvent.classList.add('d-none');
      btnUpdateEvent.classList.remove('d-none');

      /Dashboard/Dashboard For update event set offcanvas title text: Update Event
      if (offcanvasTitle) {
        offcanvasTitle.innerHTML = 'Update Event';
      }
      btnDeleteEvent.classList.remove('d-none');

      eventTitle.value = eventToUpdate.title;
      start.setDate(eventToUpdate.start, true, 'Y-m-d');
      eventToUpdate.allDay === true ? (allDaySwitch.checked = true) : (allDaySwitch.checked = false);
      eventToUpdate.end !== null
        ? end.setDate(eventToUpdate.end, true, 'Y-m-d')
        : end.setDate(eventToUpdate.start, true, 'Y-m-d');
      eventLabel.val(eventToUpdate.extendedProps.calendar).trigger('change');
      eventToUpdate.extendedProps.location !== undefined
        ? (eventLocation.value = eventToUpdate.extendedProps.location)
        : null;
      eventToUpdate.extendedProps.guests !== undefined
        ? eventGuests.val(eventToUpdate.extendedProps.guests).trigger('change')
        : null;
      eventToUpdate.extendedProps.description !== undefined
        ? (eventDescription.value = eventToUpdate.extendedProps.description)
        : null;

      /Dashboard/Dashboard /Dashboard/Dashboard Call removeEvent function
      /Dashboard/Dashboard btnDeleteEvent.addEventListener('click', e => {
      /Dashboard/Dashboard   removeEvent(parseInt(eventToUpdate.id));
      /Dashboard/Dashboard   /Dashboard/Dashboard eventToUpdate.remove();
      /Dashboard/Dashboard   bsAddEventSidebar.hide();
      /Dashboard/Dashboard });
    }

    /Dashboard/Dashboard Modify sidebar toggler
    function modifyToggler() {
      const fcSidebarToggleButton = document.querySelector('.fc-sidebarToggle-button');
      fcSidebarToggleButton.classList.remove('fc-button-primary');
      fcSidebarToggleButton.classList.add('d-lg-none', 'd-inline-block', 'ps-0');
      while (fcSidebarToggleButton.firstChild) {
        fcSidebarToggleButton.firstChild.remove();
      }
      fcSidebarToggleButton.setAttribute('data-bs-toggle', 'sidebar');
      fcSidebarToggleButton.setAttribute('data-overlay', '');
      fcSidebarToggleButton.setAttribute('data-target', '#app-calendar-sidebar');
      fcSidebarToggleButton.insertAdjacentHTML('beforeend', '<i class="bx bx-menu bx-sm"></Dashboardi>');
    }

    /Dashboard/Dashboard Filter events by calender
    function selectedCalendars() {
      let selected = [],
        filterInputChecked = [].slice.call(document.querySelectorAll('.input-filter:checked'));

      filterInputChecked.forEach(item => {
        selected.push(item.getAttribute('data-value'));
      });

      return selected;
    }

    /Dashboard/Dashboard --------------------------------------------------------------------------------------------------
    /Dashboard/Dashboard AXIOS: fetchEvents
    /Dashboard/Dashboard * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
    /Dashboard/Dashboard --------------------------------------------------------------------------------------------------
    function fetchEvents(info, successCallback) {
      /Dashboard/Dashboard Fetch Events from API endpoint reference
      /Dashboard* $.ajax(
        {
          url: '../Dashboard../Dashboard../Dashboardapp-assets/Dashboarddata/Dashboardapp-calendar-events.js',
          type: 'GET',
          success: function (result) {
            /Dashboard/Dashboard Get requested calendars as Array
            var calendars = selectedCalendars();

            return [result.events.filter(event => calendars.includes(event.extendedProps.calendar))];
          },
          error: function (error) {
            console.log(error);
          }
        }
      ); */Dashboard

      let calendars = selectedCalendars();
      /Dashboard/Dashboard We are reading event object from app-calendar-events.js file directly by including that file above app-calendar file.
      /Dashboard/Dashboard You should make an API call, look into above commented API call for reference
      let selectedEvents = currentEvents.filter(function (event) {
        /Dashboard/Dashboard console.log(event.extendedProps.calendar.toLowerCase());
        return calendars.includes(event.extendedProps.calendar.toLowerCase());
      });
      /Dashboard/Dashboard if (selectedEvents.length > 0) {
      successCallback(selectedEvents);
      /Dashboard/Dashboard }
    }

    /Dashboard/Dashboard Init FullCalendar
    /Dashboard/Dashboard ------------------------------------------------
    let { dayGrid, interaction, timeGrid, list } = calendarPlugins;
    let calendar = new Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: fetchEvents,
      plugins: [interaction, dayGrid, timeGrid, list],
      editable: true,
      dragScroll: true,
      dayMaxEvents: 2,
      eventResizableFromStart: true,
      customButtons: {
        sidebarToggle: {
          text: 'Sidebar'
        }
      },
      headerToolbar: {
        start: 'sidebarToggle, prev,next, title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      direction: direction,
      initialDate: new Date(),
      navLinks: true, /Dashboard/Dashboard can click day/Dashboardweek names to navigate views
      eventClassNames: function ({ event: calendarEvent }) {
        const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
        /Dashboard/Dashboard Background Color
        return ['fc-event-' + colorName];
      },
      dateClick: function (info) {
        let date = moment(info.date).format('YYYY-MM-DD');
        resetValues();
        bsAddEventSidebar.show();

        /Dashboard/Dashboard For new event set offcanvas title text: Add Event
        if (offcanvasTitle) {
          offcanvasTitle.innerHTML = 'Add Event';
        }

        btnAddEvent.classList.remove('d-none');
        btnUpdateEvent.classList.add('d-none');
        btnDeleteEvent.classList.add('d-none');
        eventStartDate.value = date;
        eventEndDate.value = date;
      },
      eventClick: function (info) {
        eventClick(info);
      },
      datesSet: function () {
        modifyToggler();
      },
      viewDidMount: function () {
        modifyToggler();
      }
    });

    /Dashboard/Dashboard Render calendar
    calendar.render();
    /Dashboard/Dashboard Modify sidebar toggler
    modifyToggler();

    const eventForm = document.getElementById('eventForm');
    const fv = FormValidation.formValidation(eventForm, {
      fields: {
        eventTitle: {
          validators: {
            notEmpty: {
              message: 'Please enter event title '
            }
          }
        },
        eventStartDate: {
          validators: {
            notEmpty: {
              message: 'Please enter start date '
            }
          }
        },
        eventEndDate: {
          validators: {
            notEmpty: {
              message: 'Please enter end date '
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          eleValidClass: '',
          rowSelector: function (field, ele) {
            /Dashboard/Dashboard field is the field name & ele is the field element
            return '.mb-3';
          }
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        /Dashboard/Dashboard Submit the form when all fields are valid
        /Dashboard/Dashboard defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        autoFocus: new FormValidation.plugins.AutoFocus()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      isFormValid = true;
    });

    /Dashboard/Dashboard Sidebar Toggle Btn
    if (btnToggleSidebar) {
      btnToggleSidebar.addEventListener('click', e => {
        btnCancel.classList.remove('d-none');
      });
    }

    /Dashboard/Dashboard Add Event
    /Dashboard/Dashboard ------------------------------------------------
    function addEvent(eventData) {
      /Dashboard/Dashboard ? Add new event data to current events object and refetch it to display on calender
      /Dashboard/Dashboard ? You can write below code to AJAX call success response

      currentEvents.push(eventData);
      calendar.refetchEvents();

      /Dashboard/Dashboard ? To add event directly to calender (won't update currentEvents object)
      /Dashboard/Dashboard calendar.addEvent(eventData);
    }

    /Dashboard/Dashboard Update Event
    /Dashboard/Dashboard ------------------------------------------------
    function updateEvent(eventData) {
      /Dashboard/Dashboard ? Update existing event data to current events object and refetch it to display on calender
      /Dashboard/Dashboard ? You can write below code to AJAX call success response
      eventData.id = parseInt(eventData.id);
      currentEvents[currentEvents.findIndex(el => el.id === eventData.id)] = eventData; /Dashboard/Dashboard Update event by id
      calendar.refetchEvents();

      /Dashboard/Dashboard ? To update event directly to calender (won't update currentEvents object)
      /Dashboard/Dashboard let propsToUpdate = ['id', 'title', 'url'];
      /Dashboard/Dashboard let extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description'];

      /Dashboard/Dashboard updateEventInCalendar(eventData, propsToUpdate, extendedPropsToUpdate);
    }

    /Dashboard/Dashboard Remove Event
    /Dashboard/Dashboard ------------------------------------------------

    function removeEvent(eventId) {
      /Dashboard/Dashboard ? Delete existing event data to current events object and refetch it to display on calender
      /Dashboard/Dashboard ? You can write below code to AJAX call success response
      currentEvents = currentEvents.filter(function (event) {
        return event.id != eventId;
      });
      calendar.refetchEvents();

      /Dashboard/Dashboard ? To delete event directly to calender (won't update currentEvents object)
      /Dashboard/Dashboard removeEventInCalendar(eventId);
    }

    /Dashboard/Dashboard (Update Event In Calendar (UI Only)
    /Dashboard/Dashboard ------------------------------------------------
    const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
      const existingEvent = calendar.getEventById(updatedEventData.id);

      /Dashboard/Dashboard --- Set event properties except date related ----- /Dashboard/Dashboard
      /Dashboard/Dashboard ? Docs: https:/Dashboard/Dashboardfullcalendar.io/Dashboarddocs/DashboardEvent-setProp
      /Dashboard/Dashboard dateRelatedProps => ['start', 'end', 'allDay']
      /Dashboard/Dashboard eslint-disable-next-line no-plusplus
      for (var index = 0; index < propsToUpdate.length; index++) {
        var propName = propsToUpdate[index];
        existingEvent.setProp(propName, updatedEventData[propName]);
      }

      /Dashboard/Dashboard --- Set date related props ----- /Dashboard/Dashboard
      /Dashboard/Dashboard ? Docs: https:/Dashboard/Dashboardfullcalendar.io/Dashboarddocs/DashboardEvent-setDates
      existingEvent.setDates(updatedEventData.start, updatedEventData.end, {
        allDay: updatedEventData.allDay
      });

      /Dashboard/Dashboard --- Set event's extendedProps ----- /Dashboard/Dashboard
      /Dashboard/Dashboard ? Docs: https:/Dashboard/Dashboardfullcalendar.io/Dashboarddocs/DashboardEvent-setExtendedProp
      /Dashboard/Dashboard eslint-disable-next-line no-plusplus
      for (var index = 0; index < extendedPropsToUpdate.length; index++) {
        var propName = extendedPropsToUpdate[index];
        existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName]);
      }
    };

    /Dashboard/Dashboard Remove Event In Calendar (UI Only)
    /Dashboard/Dashboard ------------------------------------------------
    function removeEventInCalendar(eventId) {
      calendar.getEventById(eventId).remove();
    }

    /Dashboard/Dashboard Add new event
    /Dashboard/Dashboard ------------------------------------------------
    btnAddEvent.addEventListener('click', e => {
      if (isFormValid) {
        let newEvent = {
          id: calendar.getEvents().length + 1,
          title: eventTitle.value,
          start: eventStartDate.value,
          end: eventEndDate.value,
          startStr: eventStartDate.value,
          endStr: eventEndDate.value,
          display: 'block',
          extendedProps: {
            location: eventLocation.value,
            guests: eventGuests.val(),
            calendar: eventLabel.val(),
            description: eventDescription.value
          }
        };
        if (eventUrl.value) {
          newEvent.url = eventUrl.value;
        }
        if (allDaySwitch.checked) {
          newEvent.allDay = true;
        }
        addEvent(newEvent);
        bsAddEventSidebar.hide();
      }
    });

    /Dashboard/Dashboard Update event
    /Dashboard/Dashboard ------------------------------------------------
    btnUpdateEvent.addEventListener('click', e => {
      if (isFormValid) {
        let eventData = {
          id: eventToUpdate.id,
          title: eventTitle.value,
          start: eventStartDate.value,
          end: eventEndDate.value,
          url: eventUrl.value,
          extendedProps: {
            location: eventLocation.value,
            guests: eventGuests.val(),
            calendar: eventLabel.val(),
            description: eventDescription.value
          },
          display: 'block',
          allDay: allDaySwitch.checked ? true : false
        };

        updateEvent(eventData);
        bsAddEventSidebar.hide();
      }
    });

    /Dashboard/Dashboard Call removeEvent function
    btnDeleteEvent.addEventListener('click', e => {
      removeEvent(parseInt(eventToUpdate.id));
      /Dashboard/Dashboard eventToUpdate.remove();
      bsAddEventSidebar.hide();
    });

    /Dashboard/Dashboard Reset event form inputs values
    /Dashboard/Dashboard ------------------------------------------------
    function resetValues() {
      eventEndDate.value = '';
      eventUrl.value = '';
      eventStartDate.value = '';
      eventTitle.value = '';
      eventLocation.value = '';
      allDaySwitch.checked = false;
      eventGuests.val('').trigger('change');
      eventDescription.value = '';
    }

    /Dashboard/Dashboard When modal hides reset input values
    addEventSidebar.addEventListener('hidden.bs.offcanvas', function () {
      resetValues();
    });

    /Dashboard/Dashboard Hide left sidebar if the right sidebar is open
    btnToggleSidebar.addEventListener('click', e => {
      btnDeleteEvent.classList.add('d-none');
      btnUpdateEvent.classList.add('d-none');
      btnAddEvent.classList.remove('d-none');
      appCalendarSidebar.classList.remove('show');
      appOverlay.classList.remove('show');
    });

    /Dashboard/Dashboard Calender filter functionality
    /Dashboard/Dashboard ------------------------------------------------
    if (selectAll) {
      selectAll.addEventListener('click', e => {
        if (e.currentTarget.checked) {
          document.querySelectorAll('.input-filter').forEach(c => (c.checked = 1));
        } else {
          document.querySelectorAll('.input-filter').forEach(c => (c.checked = 0));
        }
        calendar.refetchEvents();
      });
    }

    if (filterInput) {
      filterInput.forEach(item => {
        item.addEventListener('click', () => {
          document.querySelectorAll('.input-filter:checked').length < document.querySelectorAll('.input-filter').length
            ? (selectAll.checked = false)
            : (selectAll.checked = true);
          calendar.refetchEvents();
        });
      });
    }

    /Dashboard/Dashboard Jump to date on sidebar(inline) calendar change
    inlineCalInstance.config.onChange.push(function (date) {
      calendar.changeView(calendar.view.type, moment(date[0]).format('YYYY-MM-DD'));
      modifyToggler();
      appCalendarSidebar.classList.remove('show');
      appOverlay.classList.remove('show');
    });
  })();
});
