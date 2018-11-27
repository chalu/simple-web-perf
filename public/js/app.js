const letsBegin = (event) => {

  // initialize the side navigation for mobile
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  
  // initialize the video player modal
  M.Modal.init(document.querySelectorAll('.modal'));

  // initialize the photo slider
  M.Slider.init(document.querySelectorAll('.slider'));
};

document.addEventListener('DOMContentLoaded', letsBegin);