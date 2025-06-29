/Dashboard**
 * File Upload
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard previewTemplate: Updated Dropzone default previewTemplate
  /Dashboard/Dashboard ! Don't change it unless you really know what you are doing
  const previewTemplate = `<div class="dz-preview dz-file-preview">
<div class="dz-details">
  <div class="dz-thumbnail">
    <img data-dz-thumbnail>
    <span class="dz-nopreview">No preview</Dashboardspan>
    <div class="dz-success-mark"></Dashboarddiv>
    <div class="dz-error-mark"></Dashboarddiv>
    <div class="dz-error-message"><span data-dz-errormessage></Dashboardspan></Dashboarddiv>
    <div class="progress">
      <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></Dashboarddiv>
    </Dashboarddiv>
  </Dashboarddiv>
  <div class="dz-filename" data-dz-name></Dashboarddiv>
  <div class="dz-size" data-dz-size></Dashboarddiv>
</Dashboarddiv>
</Dashboarddiv>`;

  /Dashboard/Dashboard ? Start your code from here

  /Dashboard/Dashboard Basic Dropzone
  /Dashboard/Dashboard --------------------------------------------------------------------

  const myDropzone = new Dropzone('#dropzone-basic', {
    previewTemplate: previewTemplate,
    parallelUploads: 1,
    maxFilesize: 5,
    addRemoveLinks: true,
    maxFiles: 1
  });

  /Dashboard/Dashboard Multiple Dropzone
  /Dashboard/Dashboard --------------------------------------------------------------------
  const dropzoneMulti = new Dropzone('#dropzone-multi', {
    previewTemplate: previewTemplate,
    parallelUploads: 1,
    maxFilesize: 5,
    addRemoveLinks: true
  });
})();
