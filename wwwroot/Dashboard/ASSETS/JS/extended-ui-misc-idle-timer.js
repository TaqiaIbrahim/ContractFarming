/Dashboard**
 * Ideal Timer (jquery)
 */Dashboard

'use strict';

$(function () {
  var timerDoc = $('#document-Status'),
    btnPause = $('#document-Pause'),
    btnResume = $('#document-Resume'),
    btnElapsed = $('#document-Elapsed'),
    btnDestroy = $('#document-Destroy'),
    btnInit = $('#document-Init');

  /Dashboard/Dashboard Document 5 Sec Timeout
  /Dashboard/Dashboard --------------------------------------------------------------------
  if (timerDoc.length) {
    var docTimeout = 5000;
    /Dashboard/Dashboard idle/Dashboardactive events
    $(document).on('idle.idleTimer', function (event, elem, obj) {
      timerDoc
        .val(function (i, value) {
          return value + 'Idle @ ' + moment().format() + ' \n';
        })
        .removeClass('alert-success')
        .addClass('alert-warning');
    });
    $(document).on('active.idleTimer', function (event, elem, obj, e) {
      timerDoc
        .val(function (i, value) {
          return value + 'Active [' + e.type + '] [' + e.target.nodeName + '] @ ' + moment().format() + ' \n';
        })
        .addClass('alert-success')
        .removeClass('alert-warning');
    });

    /Dashboard/Dashboard button events
    btnPause.on('click', function () {
      /Dashboard/Dashboard Pause
      $(document).idleTimer('pause');
      timerDoc.val(function (i, value) {
        return value + 'Paused @ ' + moment().format() + ' \n';
      });
      $(this).blur();
      return false;
    });
    btnResume.on('click', function () {
      /Dashboard/Dashboard Resume
      $(document).idleTimer('resume');
      timerDoc.val(function (i, value) {
        return value + 'Resumed @ ' + moment().format() + ' \n';
      });
      $(this).blur();
      return false;
    });
    btnElapsed.on('click', function () {
      /Dashboard/Dashboard Elapsed
      timerDoc.val(function (i, value) {
        return value + 'Elapsed (since becoming active): ' + $(document).idleTimer('getElapsedTime') + ' \n';
      });
      $(this).blur();
      return false;
    });
    btnDestroy.on('click', function () {
      /Dashboard/Dashboard Destroy
      $(document).idleTimer('destroy');
      timerDoc
        .val(function (i, value) {
          return value + 'Destroyed: @ ' + moment().format() + ' \n';
        })
        .removeClass('alert-success')
        .removeClass('alert-warning');
      $(this).blur();
      return false;
    });
    btnInit.on('click', function () {
      /Dashboard/Dashboard Initialize
      /Dashboard/Dashboard show init with object
      $(document).idleTimer({
        timeout: docTimeout
      });
      timerDoc.val(function (i, value) {
        return value + 'Init: @ ' + moment().format() + ' \n';
      });

      /Dashboard/Dashboard Apply classes for default state
      if ($(document).idleTimer('isIdle')) {
        timerDoc.removeClass('alert-success').addClass('alert-warning');
      } else {
        timerDoc.addClass('alert-success').removeClass('alert-warning');
      }
      $(this).blur();
      return false;
    });

    /Dashboard/Dashboard Clear old statuses
    timerDoc.val('');

    /Dashboard/Dashboard Start timeout, passing no options
    $(document).idleTimer(docTimeout);

    /Dashboard/Dashboard style based on state
    if ($(document).idleTimer('isIdle')) {
      timerDoc
        .val(function (i, value) {
          return value + 'Initial Idle State @ ' + moment().format() + ' \n';
        })
        .removeClass('alert-success')
        .addClass('alert-warning');
    } else {
      timerDoc
        .val(function (i, value) {
          return value + 'Initial Active State @ ' + moment().format() + ' \n';
        })
        .addClass('alert-success')
        .removeClass('alert-warning');
    }
  }

  /Dashboard/Dashboard Element 3 Sec Timeout
  /Dashboard/Dashboard --------------------------------------------------------------------
  var elementTimer = $('#element-Status'),
    btnReset = $('#element-Reset'),
    btnRemaining = $('#element-Remaining'),
    btnLastActive = $('#element-LastActive'),
    btnState = $('#element-State');
  if (elementTimer.length) {
    var elTimeout = 3000;
    /Dashboard/Dashboard idle/Dashboardactive events
    elementTimer.on('idle.idleTimer', function (event, elem, obj) {
      event.stopPropagation();

      elementTimer
        .val(function (i, value) {
          return value + 'Idle @ ' + moment().format() + ' \n';
        })
        .removeClass('alert-success')
        .addClass('alert-warning');
    });
    elementTimer.on('active.idleTimer', function (event) {
      event.stopPropagation();

      elementTimer
        .val(function (i, value) {
          return value + 'Active @ ' + moment().format() + ' \n';
        })
        .addClass('alert-success')
        .removeClass('alert-warning');
    });

    /Dashboard/Dashboard button events
    btnReset.on('click', function () {
      /Dashboard/Dashboard Reset
      elementTimer.idleTimer('reset').val(function (i, value) {
        return value + 'Reset @ ' + moment().format() + ' \n';
      });

      /Dashboard/Dashboard classes for default state
      if ($('#element-Status').idleTimer('isIdle')) {
        elementTimer.removeClass('alert-success').addClass('alert-warning');
      } else {
        elementTimer.addClass('alert-success').removeClass('alert-warning');
      }
      $(this).blur();
      return false;
    });
    btnRemaining.on('click', function () {
      /Dashboard/Dashboard Remaining
      elementTimer.val(function (i, value) {
        return value + 'Remaining: ' + elementTimer.idleTimer('getRemainingTime') + ' \n';
      });
      $(this).blur();
      return false;
    });
    btnLastActive.on('click', function () {
      /Dashboard/Dashboard Last Active
      elementTimer.val(function (i, value) {
        return value + 'LastActive: ' + elementTimer.idleTimer('getLastActiveTime') + ' \n';
      });
      $(this).blur();
      return false;
    });
    btnState.on('click', function () {
      /Dashboard/Dashboard State
      elementTimer.val(function (i, value) {
        return value + 'State: ' + ($('#element-Status').idleTimer('isIdle') ? 'idle' : 'active') + ' \n';
      });
      $(this).blur();
      return false;
    });

    /Dashboard/Dashboard Clear value if cached & start time
    elementTimer.val('').idleTimer(elTimeout);

    /Dashboard/Dashboard show initial state
    if (elementTimer.idleTimer('isIdle')) {
      elementTimer
        .val(function (i, value) {
          return value + 'Initial Idle @ ' + moment().format() + ' \n';
        })
        .removeClass('alert-success')
        .addClass('alert-warning');
    } else {
      elementTimer
        .val(function (i, value) {
          return value + 'Initial Active @ ' + moment().format() + ' \n';
        })
        .addClass('alert-success')
        .removeClass('alert-warning');
    }
  }
});
